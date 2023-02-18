const nextEL = document.querySelector(".next");
const prevEL = document.querySelector(".prev")

let currentImg = 1
let timeout 
const inmgsEL = document.querySelectorAll("img");
const ImaContEl = document.querySelector(".imageContainer");
nextEL.addEventListener("click",()=>{
currentImg++; 
clearTimeout(timeout)
updateImg()
})
prevEL.addEventListener("click",()=>{
    currentImg--; 
    clearTimeout(timeout)
    updateImg()
    })
function updateImg(){
    if (currentImg > inmgsEL.length){
        currentImg = 1;
    }else if (currentImg<1){
        currentImg= inmgsEL.length
    }
    ImaContEl.style.transform = `translateX(${-(currentImg-1) *500}px)`;
    timeout=setTimeout(() => {
        currentImg ++ 
        updateImg()
    }, 3000);
}