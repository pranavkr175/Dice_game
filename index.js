
var num=prompt("Enter number between 1-6");

// var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
if(num>6){
    alert("enter number between 1 to 6");
    var num=prompt("Enter number between 1-6")
}

var randomDiceImage1="dice"+num+".png";
var randomImageSource1="images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1); 

var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


if(num>randomNumber2){
    document.querySelector("h4").innerHTML="🚩You 🧔🏽‍♂️ Wins";
}else if(num<randomNumber2){
    document.querySelector("h4").innerHTML="Machine 💻 Wins🚩";
}else{
    document.querySelector("h4").innerHTML="🚩Draw🚩";
}



