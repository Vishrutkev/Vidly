const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const router = express.Router();
const mongoose = require("mongoose");
const validator = require("../middleware/validate");
const validateObjectId = require("../middleware/validateObjectId");
const asyncMiddleware = require("../middleware/async");
const { Genre, validate } = require("../models/genre");

router.get("/", async (req, res, next) => {
  // throw new Error("Could not get Genres..");
  const genres = await Genre.find().sort({ name: 1 });
  res.send(genres);
});

router.post(
  "/",
  [auth, validator(validate)],
  asyncMiddleware(async (req, res) => {
    let genre = new Genre({
      name: req.body.name,
    });
    genre = await genre.save();
    res.send(genre);
  })
);

router.put(
  "/:id",
  [auth, validator(validate)],
  validateObjectId,
  asyncMiddleware(async (req, res) => {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );
    if (!genre)
      return res.status(404).send("The genre with the given Id is not found");
    res.send(genre);
  })
);

router.delete(
  "/:id",
  [auth, admin],
  validateObjectId,
  asyncMiddleware(async (req, res) => {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre)
      return res.status(404).send("The genre with the given Id is not found");

    res.send(genre);
  })
);

router.get(
  "/:id",
  validateObjectId,
  asyncMiddleware(async (req, res) => {
    const genre = await Genre.findById(req.params.id);
    if (!genre)
      return res.status(404).send("The genre with the given Id is not found");

    res.send(genre);
  })
);

module.exports = router;
