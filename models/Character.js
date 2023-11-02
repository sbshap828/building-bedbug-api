import mongoose from "mongoose";

const Schema = mongoose.Schema;

let CharacterSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  role: { type: String },
  house: { type: String },
  school: { type: String },
  ministryOfMagic: { type: Boolean },
  orderOfThePhoenix: { type: Boolean },
  dumbledoresArmy: { type: Boolean },
  deathEater: { type: Boolean },
  bloodStatus: { type: String },
  species: { type: String },
});

export default mongoose.model("characters", CharacterSchema);
