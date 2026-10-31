import { cities } from "./cities.js";

var locationdropdown = document.getElementById("location2")

for (var city of cities){
    var ci = document.createElement("Option");
    ci.innerText = city;
    ci.value = city;
    locationdropdown.appendChild(ci);
}

