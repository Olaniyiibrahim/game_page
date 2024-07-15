const bar = document.querySelector(".bar");
const ulNav = document.querySelector("ul") ;
bar.addEventListener("click", function(){
    ulNav.style.display = "block";
    while(ulNav.style.display = "block"){
        ulNav.style.display = "none";
    }
})
