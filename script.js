"use strict"

///inputai_nauji duomenys
    var input = document.getElementsByTagName("input")

  
///mygtukai-funkcijos
    var add = document.getElementById("btnOne")
    var remove_first = document.getElementById("btnTwo")
    var remove_last = document.getElementById("btnThree")
    var tbody = document.querySelector("tbody");


    btnOne.addEventListener("click", function(){

var Vardas = document.getElementById("name").value;
var Pavardė = document.getElementById("lastName").value;
var Amžius = document.getElementById("age").value;

if (Vardas.trim() !== "" && Pavardė.trim() !== "" && Amžius.trim()!=="" &&!isNaN(Amžius)){
   
var newRow = tbody.insertRow();
    newRow.innerHTML = `
        <td>${Vardas}</td>
        <td>${Pavardė}</td>
        <td>${Amžius}</td>
        `;
}
else  alert("Prašome įvesti teisingus duomenis");
})  

input.value="";
   
    btnTwo.addEventListener("click", function() {
        const firstRow = tbody.rows[0];
        if (firstRow) {
            tbody.deleteRow(0);
        }
    })
    
    btnThree.addEventListener("click", function() {
        const lastRowIndex = tbody.rows.length - 1;
        if (lastRowIndex >= 0) {
            tbody.deleteRow(lastRowIndex);
        }
    })

