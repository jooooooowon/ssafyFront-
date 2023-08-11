import data from "../data/video.js"

let videoHtml = "";

console.log(data);
let dataJson = JSON.stringify(data);
let videoList = JSON.parse(dataJson);
let video = videoList[0];
let mainVideo = document.querySelector(".main-video");

mainVideo.innerHTML = `<iframe width="1271" height="715" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;