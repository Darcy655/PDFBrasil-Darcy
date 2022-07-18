const Expend = require("../models/Expend");

const mongoose = require("mongoose");
const { db } = require("../models/Expend");

// Register an expend
const register = async (req, res) => {
  const { description, value, date } = req.body;

  // Create expend
  const expend = await new Expend({
    value,
    description,
    value,
    date,
    done: false,
  });

  await expend
    .save()
    .then(() =>
      res.status(201).json({
        _id: expend._id,
      })
    )
    .catch(() =>
      res
        .status(422)
        .json({ errors: ["Houve um erro, por favor tente mais tarde!"] })
    );
};

// Get expends
const expends = async (req, res) => {
  const expends = await db
    .collection("expends")
    .find({})
    .sort({ date: 1 })
    .toArray();

  if (!expends) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde"] });
    return;
  }
  res.status(201).json({ expends });
};

// Update Status
const updateStatus = async (req, res) => {
  const { id } = req.params;
  const done = req.body.done === "false" ? true : false;

  db.collection("expends").updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    { $set: { done: done } }
  );

  res.status(200).json(done);
};

// Update an expend
const update = async (req, res) => {
  const { id } = req.params;
  const { description, value, date } = req.body;

  const expend = await db
    .collection("expends")
    .updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      { $set: { description: description, value: value, date: date } }
    );

  res.status(200).json(expend);
};

const remove = async (req, res) => {
  const { id } = req.params;

  db.collection("expends").deleteOne({ _id: mongoose.Types.ObjectId(id) });

  res.status(200).json({ message: ["Deleted success!"] });
};

module.exports = {
  register,
  expends,
  updateStatus,
  update,
  remove,
};
