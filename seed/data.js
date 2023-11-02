import db from "../db/connection.js";
import Building from "../models/Building.js";
//import Character from "../models/Character.js";
import buildings from "./buildings.json" assert { type: "json" };
//import characters from "./characters.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();

  // Insert Data
  //await Character.create(characters);
  await Building.create(buildings);

  console.log(chalk.magenta("hfyrff Buildings created!"));

  // Close DB Connection
  await db.close();
};

insertData();
