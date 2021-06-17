const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const left_container = document.querySelector(".left_container");

arr.addEventListener("click",()=>{
arr.classList.add("active_arr");
if(left_container.classList.contains("off")){
left_container.classList.remove("off");
left_container.classList.add("active");
}
});

clc.addEventListener("click",()=>{
arr.classList.remove("active_arr");
if(left_container.classList.contains("active")){
left_container.classList.remove("active");
left_container.classList.add("off");
}
});
document.getElementById("github").onclick = function() {
location.href = "https://github.com/ravitejarmkv"
};
document.getElementById("linkedin").onclick = function() {
location.href = "http://linkedin.com/in/raviteja-ranthu-21574819a"
};
document.getElementById("twitter").onclick = function() {
location.href = "https://twitter.com/RRavi_theja"
};
document.getElementById("facebook").onclick = function() {
location.href = "https://www.facebook.com/ravi.tejar.7"
};
