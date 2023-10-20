var images = document.querySelector(".img")
var imgpho=["images/photo_2023-10-13_01-10-38.jpg","images/images.jpg","images/images1.jpg","images/images (2).jpg"]
var num=0;
function next(){
    if( num >=imgpho.length-1){
        num=0;
    }
   else{
    num++;
   } 
   console.log(num);
   again();
}
function back(){
    if(num<=0)
        num=imgpho.length-1;
     else{
        num--;
     }
     console.log(num);
        again();
}
function again(){
    return images.setAttribute('src',imgpho[num]);
}
