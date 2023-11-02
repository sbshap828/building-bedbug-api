import mongoose from "mongoose";

const Schema = mongoose.Schema;

let BuildingSchema = new Schema({
  bldgadd: { type: String },
  bldgno:{ type: String },
  block: { type: String },
  lot: { type: String },
  mdr: { type: String },
  bin: { type: String },
  communitybd: { type: String },
  photo: { type: String }
});




export default mongoose.model("buildings", BuildingSchema);
