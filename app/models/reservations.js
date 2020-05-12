const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const reservationSchema = new Schema(
  {
    createdAt: Number,
    updatedAt: Number,
    tableNumber: {
      type: Number,
      required: [true, "table number is required"],
      unique: false,
    },
    numberOfPersons: {
      type: Number,
      required: [true, "number of persons is required"],
      unique: false,
    },
    user: {
      type: ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: { currentTime: () => new Date().getTime() } }
);

module.exports = mongoose.model(
  "reservation",
  reservationSchema,
  "reservations"
);
