import { appendInfo } from "./append";
import "./index.css";
import icon from "./logo.jpg";

var image = document.getElementById("image");

var logo = document.createElement("img");
logo.src = icon;

image.append(logo);

var morning = document.getElementById("morning");
var afternoon = document.getElementById("afternoon");
var evening = document.getElementById("evening");
var night = document.getElementById("night");

var morningDiv = document.getElementById("morningDiv");
var afternoonDiv = document.getElementById("afternoonDiv");
var eveningDiv = document.getElementById("eveningDiv");
var nightDiv = document.getElementById("nightDiv");

var button = document.querySelector("button");

button.addEventListener("click", function (event)  {
    appendInfo(morning.value, morningDiv);
    appendInfo(afternoon.value, afternoonDiv);
    appendInfo(evening.value, eveningDiv);
    appendInfo(night.value, nightDiv);
} );


