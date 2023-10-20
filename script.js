var images = document.querySelector(".img")
var imgpho=["images/images.jpg","images/images1.jpg","images/photo_2023-10-13_01-10-38.jpg"]
var i=0;
function displayNextImage() {
    i++;
    if( i>= imgpho.length){
    i=0;
    images.src=imgpho[i];
}else{
images.src=imgpho[i]
}
}
function displayPreviousImage() {
    i--;
    if(i=0){
        i=imgpho.length-1;
        images.src=imgpho[i];
}else{
    images.src=imgpho[i];
}
}
