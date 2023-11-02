

//not sure about plural in first

import Bedbug from "../models/Bedbug.js";

export const getBedbugs = async (req, res) => {
  try {
    const Bedbugs = await Bedbug.find();
    res.json(Bedbugs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBedBugDate = async (req, res) => {
    try {
      const { filing_date } = req.params;
      const Bedbugs = await Bedbug.find({filing_date});
      res.json(Bedbugs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

export const getBedbug = async (req, res) => {
  try {
    const { id } = req.params;
    const bedbug = await Bedbug.findById(id);

    if (bedbug) {
      return res.json(bedbug);
    }

    res.status(404).json({ message: "Bedbug not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createBedbugs = async (req, res) => {
  const bedbug = new Bedbug(req.body);
  await Bedbug.save();
  res.status(201).json(bedbug);
};

export const updateBedbug = async (req, res) => {
  try {
    const { id } = req.params;
    const bedbug = await Bedbug.findByIdAndUpdate(id, req.body);
    res.status(201).json(bedbug);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteBedbug = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bedbug.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Bedbug deleted!");
    }

    throw new Error("Bedbug not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
