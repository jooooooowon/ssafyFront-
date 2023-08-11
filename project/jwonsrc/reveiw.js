import data from "../data/video.js"

let videoHtml = "";

console.log(data);
let dataJson = JSON.stringify(data);
let videoList = JSON.parse(dataJson);

document.querySelector