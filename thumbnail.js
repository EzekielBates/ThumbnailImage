images = new Array();

var img = new Image(100,100);
var img2 = new Image(100,100);
var img3 = new Image(100,100);

img.src = "bird.jpg";
img2.src = "man.jpg";
img3.src = "cat.jpg";

images[0] = img;
images[1] = img2;
images[2] = img3;

for(let i = 0; i < images.length; ++i){
    document.write("<img src='" + images[i].src + "' width='100' height='100' class='smallImage'/>");
}

document.getElementsByClassName("smallImage").onclick = function(){
    alert("Hello");
};
