const express = require("express");
const Joi = require("joi");
const router = express.Router();
const auth = require("../middleware/auth");
const validator = require("../middleware/validate");
const { Rental } = require("../models/rental");
const { Movie } = require("../models/movie");

router.post("/", [auth, validator(validateReturn)], async (req, res, next) => {
  const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

  if (!rental) return res.status(404).send("No Rental found.");

  if (rental.dateReturned)
    return res.status(400).send("Rental already processed.");

  rental.return();
  await rental.save();

  await Movie.updateOne(
    { _id: rental.movie._id },
    {
      $inc: { numberInStock: 1 },
    }
  );

  return res.send(rental);
});

function validateReturn(req) {
  const schema = {
    customerId: Joi.ObjectId().required(),
    movieId: Joi.ObjectId().required(),
  };

  return Joi.validate(genre, schema);
}

module.exports = router;
