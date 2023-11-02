import Building from "../models/Building.js";
import Bedbug from "../models/Bedbug.js";

export const getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find();
    res.json(buildings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    
    const building = await Building.findById(id);
    const bedbug = await Bedbug.find({ registration_id: building.mdr})

    if (building) {
      return res.json({building: building, bedbug: bedbug[0]});
    }

    res.status(404).json({ message: "Building not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createBuilding = async (req, res) => {
  const building = new Building(req.body);
  await building.save();
  res.status(201).json(building);
};

export const updateBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const building = await Building.findByIdAndUpdate(id, req.body);
    res.status(201).json(building);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteBuilding = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Building.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Building deleted!");
    }

    throw new Error("Building not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
