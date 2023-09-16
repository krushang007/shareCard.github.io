// let ele=document.body;
// ele.addEventListener('onclick' ,function()
// {
//     let el=document.querySelector('.filter');
//     el.style="z-index:10";    
// })
let share = document.querySelector(".share");
let filter = document.querySelector(".filter");
function showShare() {
    share.style.transform = "scale(1)";
    filter.style= "z-index:15";
    
};
function hideShare() {
    share.style.transform = "scale(0)";
    filter.style= "z-index:0";
};
filter.addEventListener("click",hideShare);