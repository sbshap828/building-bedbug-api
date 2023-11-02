import mongoose from "mongoose";

const Schema = mongoose.Schema;

let BedbugSchema = new Schema({
  registration_id: { type: String },
  filing_date: { type: Date },
  filing_period_start_date: { type: Date },
  filing_period_end_date: { type: Date },
  infested_dwelling_unit_count: { type: String },
  eradicated_unit_count: { type: String },
  of_dwelling_units: { type: String }
});

export default mongoose.model("bedbugs", BedbugSchema);
