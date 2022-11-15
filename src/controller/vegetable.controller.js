const express = require("express");
const Vegetables = require("../models/vegetable.module");
const router = express.Router();
const path = require("path");

router.get("", async (req, res) => {
  try {
    const page = req.query.page - 1;
    const limit = req.query.limit || 40;
    let brand = req.query.brand || "all";
    let sort = req.query.sort || "price";
    let order = req.query.order || "desc";
    const brandOptions = ["Fresho", "Organic", "Brotos", "Hoovu Fresh"];
    let price_gte = req.query.price_gte || "price";
    let _gte = req.query._gte || 0;
    let _lte = req.query._lte || 1000;
    let quantity = req.query.quantity || "all";
    let quantityOptions = [1, 2, 40, 100, 250];

    //*****Filtering*****//
    console.log("price", price_gte);
    brand === "all"
      ? (brand = [...brandOptions])
      : (brand = req.query.brand)
    quantity === "all"
      ? (quantity = [...quantityOptions])
      : (quantity = req.query.quantity);
    //*****Filtering*****//

    //*****Sorting*****//
    const _sort = {};
    if (sort && order) {
      _sort[sort] = order === "desc" ? -1 : 1;
    }
    //*****Sorting*****//

    //***** Searching *****//
    const keyword = req.query.search
      ? {
          $or: [
            { brand: { $regex: req.query.search, $options: "i" } },
            { title: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    //*****Searching*****//
    const vegetables = await Vegetables.find(keyword)
      .sort(_sort)
      .skip(page * limit)
      .limit(limit)
      .where("brand")
      .in([...brand])
      .where("quantity")
      .in([...quantity])
      .where(price_gte)
      .gte(_gte)
      .lte(_lte);

    // console.log("fruits",fruits)
    const totalPages = Math.ceil(
      (await Vegetables.find().countDocuments()) / limit
    );
    return res.send({ vegetables, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const vegetables = await Vegetables.create(req.body);
    return res.send(vegetables);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vegetables = await Vegetables.findById(req.params.id).lean().exec();

    if (vegetables) {
      return res.send(vegetables);
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// met + route => patch /users/${variable} and the name of variable is id
router.patch("/:id", async (req, res) => {
  try {
    const vegetable = await Vegetables.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();

    res.status(201).send(vegetable);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// met + route => delete /users/${variable} and the name of variable is id
router.delete("/:id", async (req, res) => {
  try {
    const vegetables = await Vegetables.findByIdAndDelete(req.params.id)
      .lean()
      .exec();

    res.send(vegetables);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
