let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function (e) {
    let y = e.clientY;
    let x = e.clientX;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

const parent = document.getElementById("parent");

function handler(){
    if(is_active === true){
        cursor.style.scale='2';
    }else if(is_active === false){
        cursor.style.scale='1';
    }
};

window.onmousedown = function(){
    is_active = true;
    handler();
};
window.onmouseup = function(){
    is_active = false;
    handler();
};
parent.onmouseover = function(){
    console.log("onmouseover");
    is_active = true;
    handler();
};
parent.onmouseout = function(){
    console.log("onmouseout");
    is_active = false;
    handler();
};
