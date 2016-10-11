/*jslint browser: true*/
document.getElementById("button").addEventListener("click", function () {
    "use strict";
    var divTest = document.getElementById("test").appendChild(document.createElement("p"));
    divTest.innerHTML = "jeeey";
});