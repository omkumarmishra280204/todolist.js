let btn = document.querySelector("button");
let num = document.querySelector("#number");
let grow = document.querySelector("#growth");

let nuum = 0;


btn.addEventListener("click", function () {

    let time =setInterval(function(){
        nuum++;
        num.innerHTML = nuum + "%";
        grow.style.width = nuum + "%";
        btn.innerHTML = "downloading...";

    },50)
    setTimeout(function() {
        clearInterval(time);
        btn.innerHTML = "downloaded";
        // alert("downloaded successfully");
        // num.innerHTML = "0%";
        // grow.style.width = "0%";
        nuum = 0;
        alert("downloaded successfully");
        // num.innerHTML = "0%";
        
        
    },5000 );





})









    
