function change_icon(){
    x = document.getElementById("fav");
    y = document.getElementById("not_fav");
    if(window.getComputedStyle(x).display=="flex"){
        y.style.display = "flex";
        x.style.display = "none";
        return;
    }else if(window.getComputedStyle(y).display=="flex"){
        x.style.display = "flex";
        y.style.display = "none";
        return;
    }
}