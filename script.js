
// const dilogbox = document.querySelector(".dilogbox");
// //const overlay = document.querySelector(".overlay");

// //   Modal open function
// const apper = () => {
//   //console.log("Modal is Open");
//   dilogbox.classList.add("active");
//   overlay.classList.add("overlayactive");
// };

// // Modal close function
// const closeModal = () => {
//   modal.classList.remove("active");
//   overlay.classList.remove("overlayactive");
// };

// let dilog=document.getElementById("dilog");


// function apper(){
//   dilog.classList.remove("modal");
// }

// function h(){
//   dilog.classList.add("modal");
//   console.log(dilog.className);
// }
let b1=document.querySelector("#b1");
let modal=document.querySelector(".modal");
let cencle=document.querySelector("#cencle");
let body=document.querySelector("body");
b1.addEventListener("click",()=>{
  modal.classList.remove("modal");
})
cencle.addEventListener("click",()=>{
  modal.classList.add("modal");
})
