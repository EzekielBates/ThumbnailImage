images = new Array();

var img = new Image();
var img2 = new Image();
var img3 = new Image();

img.src = "bird.jpg";
img2.src = "man.jpg";
img3.src = "cat.jpg";

images[0] = img;
images[1] = img2;
images[2] = img3;

for(let i = 0; i < images.length; ++i){
    document.write("<img src='" + images[i].src + "'/>");
}