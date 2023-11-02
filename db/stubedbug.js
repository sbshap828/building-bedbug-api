//this is the start of going to city data

//this works:    https://data.cityofnewyork.us/resource/wz6d-d3jb.json?&registration_id=125348

// following is data available here 
// 0 building_id	"34462"
// 1 registration_id	"140033"
// 2 borough	"MANHATTAN"
// 3 house_number	"26"
// 4 street_name	"WEST 61 STREET"
// 5 postcode	"10023"
// 6 of_dwelling_units	"169"
// 7 infested_dwelling_unit_count	"0"
// 8 eradicated_unit_count	"0"
// 9 re_infested_dwelling_unit	"0"
// 10 filing_date	"2020-12-29T00:00:00.000"
// 11 filing_period_start_date	"2019-11-01T00:00:00.000"
// 12 filling_period_end_date	"2020-10-31T00:00:00.000"
// 13 latitude	"40.769976"
// 14 longitude	"-73.982685"
// 15 community_board	"7"
// 16 city_council_district	"3"
// 17 census_tract_2010	"145"
// 18 bin	"1027195"
// 19 bbl	"1011137501"
// 20 nta	"Lincoln Square"
// '''
// #########################################################################################

// // #
//code is something like
// for each mdr in buildings, go to city url and return with #8-12 data above

function onLoad(){
   
    let url = "https://data.cityofnewyork.us/resource/wz6d-d3jb.json?&registration_id=125348"
//need to plug in each mdr from buildings 
  

    fetch(url)
    // wait for promises
    .then(res => res.json())
    .then(res => {
        //images.push(...res)
        //displayImages()
        console.log(res[4].filing_date)
    })
}
onLoad()
//const req = new XMLHttpRequest();
//   function displayInfo(res) {
//     // document.getElementById("title").textContent = res.explanation;
//     //document.getElementById("date").textContent = res.date;
//     document.getElementById("pic").src = res.hdurl;
//   }
// }
//below is how images got displayed... prob not going to use them 
// const wrapper = document.querySelector(".wrapper")
// let images = []
//Get 12 images using count
// put them in an array called images
// go get them



// display images by puting them in the adhHTML
// function displayImages(){
//     images.forEach((img, i) => {
//         let html = `
//             <div class="image-containers">
//                 <img class="images" src="${img.url}" alt="${img.title}" data-index="${i}"/>
//             </div>
//         

//         wrapper.insertAdjacentHTML("beforeend", html)
//     })
// //now they are there , add listener to each image- click
//     const imageContainers = document.querySelectorAll(".image-containers")
//     imageContainers.forEach(imgContainer => {
//         imgContainer.addEventListener("click", handleClick)
//     })
// }
// //on click put the explanation in imagecontainers and do it via modal
// //modal displays by block method until clicxked elsewhere or x
// function handleClick(e){
//     console.log(images[e.target.dataset.index])
//     const imageContainers = document.querySelector(".test")
//     imageContainers.innerHTML=images[e.target.dataset.index].explanation
   
    

//    let modal = document.getElementById("myModal");

//     // Get the button that opens the modal
//     //var btn = document.getElementById("myBtn");
    
//     //// Get the <span> element that closes the modal
//     let span = document.getElementsByClassName("close")[0];
    
//     // When the user clicks on the button, open the modal 
    
//       modal.style.display = "block";
    
    
//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         imageContainers.innerHTML=""
       
//       const gif = document.createElement("img")
//      gif.src = "https://penmarkpropertyadvisors.com/test2/rocket.gif"

//      //gif.src = https://media2.giphy.com/media/3ohnEqJ1XOfvWaSk7e/giphy.gif?cid=ecf05e47j5tlfxhp17u2v7prgsht2ck90583r1n1tq83llwi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
//       gif.classList.add("stuart")
//       imageContainers.appendChild(gif)
//       setTimeout(function(){
//         gif.style.display="none"
//         modal.style.display = "none";
// //it will do 5 seconds of rocket 

//       },5000)
//     }

    
//     // When the user clicks anywhere outside of the modal, close it
//     document.onclick = function(event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//      let hml2="jkhjhkhjkh"
//     //modal-content.insertAdjacentHTML("beforeend",html2)
//       //div class="modal-content"
   
//     // wrapper.insertAdjacentHTML("beforeend", html)
// console.log("hello")

    









