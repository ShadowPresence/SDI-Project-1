// Title: Deliverable 1
// Author: Phil Ainsworth
// Created: 3/4/12
// Description: Trip to Virginia

console.log("Hello World!");

    var music="I tend to listen to Classical. It adds just enough background ambiance to drown out the kids :-)";
    var experience="No formal training but I have dabled in the following: BASIC, HTML, PHP, Javascript & OSX shell scripts";
    var OS="I prefer the iOS platform simply because it is standardized. With android there are a number of different sizes and resolutions to deal with, iOS narrows it down to only a few.";
    var qtext1="What music do you listen to while you code?";
    var qtext2="Did you have any coding experience before this course? (And if so, what was it?)";
    var qtext3="iPhone or Android, and why?";
    function Q1(){
        music=prompt(qtext1);
        if (music){    
        }
        else {
            music="Classical";
        }
    }
    function Q2(){
        experience=prompt(qtext2);
        if (experience){
        }
        else {
            experience="PHP & Javascript";
        }
    }
    function Q3(){
        OS=prompt(qtext3);
        if (OS){
        }
        else {
            OS="iPhone";
        }
    }
    function results(){
        document.write("<dl>")
        document.write("<dt>" + qtext1 + "</dt><dd>" + music + "</dd><br />");
        document.write("<dt>" + qtext2 + "</dt><dd>" + experience + "</dd><br />");
        document.write("<dt>" + qtext3 + "</dt><dd>" + OS + "</dd></dl>");
    }

