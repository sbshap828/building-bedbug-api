import db from "../db/connection.js";
import Bedbug from "../models/Bedbug.js";
import buildings from "./buildings.json" assert { type: "json" };
import axios from "axios";

async function insertData(){
    let url = "https://data.cityofnewyork.us/resource/wz6d-d3jb.json"

    let begBugUrls = []
    let finalBuildings = []

    buildings.forEach(building => {
        begBugUrls.push(axios.get(`${url}?registration_id=${building.mdr}`))
    })

    let results = await Promise.all(begBugUrls)

    results.forEach(result =>{
        finalBuildings.push(result.data[0])
    })

    console.log("Building Bedbug codes added!")
    await Bedbug.create(finalBuildings)

    await db.close();
}

insertData()

//create your array. i inserted only 1 object here
// const bedbugs = []
//   new Bedbug({

//   })
//connect mongoose
// mongoose
//   .connect(String(dev.db), { useNewUrlParser: true })
//   .catch(err => {
//     console.log(err.stack);
//     process.exit(1);
//   })
//   .then(() => {
//     console.log("connected to db in development environment");
//   });
//save your data. this is an async operation
//after you make sure you seeded all the bedbugs, disconnect automatically
// bedbugs.map(async (p, index) => {
//   await p.save((err, result) => {
//     if (index === bedbugs.length - 1) {
//       console.log("DONE!");
//       mongoose.disconnect();
//     }
//   });
// });