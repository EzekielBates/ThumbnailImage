images = new Array();


images[0] = "bird.jpg";
images[1] = "cat.jpg";
images[2] = "man.jpg";

for(let i = 0; i < images.length; ++i){
    document.write("<img src='" + images[i] + "' width='100' height='100' class='smallImage'/>");
}

for(let i = 0; i < images.length; ++i){
document.getElementsByTagName("img")[i].onclick = function(){
    document.getElementById("largeImage").innerHTML = "<img src='" + images[i] + "' width='300' height='300' class='smallImage'/>";
    };
}

document.getElementById("largeImage").innerHTML = "<img src='" + images[0] + "' width='300' height='300' class='smallImage'/>";

myTimer = setInterval(randomImage,3000);

function randomImage(){
    var myRand;
    myRand = Math.floor(Math.random() * (images.length));
    document.getElementById("largeImage").innerHTML = "<img src='" + images[myRand] + "' width='300' height='300' class='smallImage'/>";
}
