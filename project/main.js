import data from "./data/video.js"

let videoHtml = "";

console.log(data);
let dataJson = JSON.stringify(data);
let videoList = JSON.parse(dataJson);

let videoArr = [];
console.log(videoArr);
let mostList = document.querySelector(".most-list");
let exList = document.querySelector(".ex-list");

videoList.forEach((video)=> {
    let temp = document.createElement("div");
    temp.className = "most-video";

    let iframeDiv = document.createElement("div");
    iframeDiv.innerHTML = `<iframe width="365" height="200" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    temp.appendChild(iframeDiv);
    let title = document.createElement("span");
    title.innerHTML = video.title; 
    temp.appendChild(title);

    
    mostList.appendChild(temp);
    console.log(exList);
    console.log(mostList);
})

videoList.forEach((video)=> {
    let temp = document.createElement("div");
    temp.className = "most-video";

    let iframeDiv = document.createElement("div");
    iframeDiv.innerHTML = `<iframe width="365" height="200" src="https://www.youtube.com/embed/${video.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    temp.appendChild(iframeDiv);
    let title = document.createElement("span");
    title.innerHTML = video.title; 
    temp.appendChild(title);

    
    exList.appendChild(temp);
    console.log(exList);
    console.log(mostList);
})


let idxMost = 0;
document.querySelector(".most-left-button").addEventListener("click",function(){
    console.log(idxMost)
    if(idxMost >= 0 && idxMost < 4){
        idxMost++;
        let x = idxMost * (-425);
        document.querySelector(".most-list").style.translate  = `${x}px 0`;
    }
    
})

document.querySelector(".most-right-button").addEventListener("click",function(){
    console.log(idxMost)
    if(idxMost > 0 && idxMost <= 4){
        idxMost--;
        let x = idxMost * (-425);
        document.querySelector(".most-list").style.translate = `${x}px 0`;
    }

})

let idxEx = 0;
document.querySelector(".ex-left-button").addEventListener("click",function(){
    console.log(idxEx)
    if(idxEx >= 0 && idxEx < 4){
        idxEx++;
        let x = idxEx * (-425);
        document.querySelector(".ex-list").style.translate  = `${x}px 0`;
    }
    
})

document.querySelector(".ex-right-button").addEventListener("click",function(){
    console.log(idxEx)
    if(idxEx > 0 && idxEx <= 4){
        idxEx--;
        let x = idxEx * (-425);
        document.querySelector(".ex-list").style.translate = `${x}px 0`;
    }

})
