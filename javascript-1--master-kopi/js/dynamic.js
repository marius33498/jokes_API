


document.querySelector('input').addEventListener("input", function(){
	var theNumberInput = document.querySelector('#inputNumber').value;
	var output = document.querySelector('.dynamic-divs');
	

	output.innerHTML = "Number " + theNumberInput;
     
})

function resetButton(){
	document.getElementById('form').reset();
	document.getElementById('dynamic').reset();
}

/*Correct code
const input = document.querySelector("input");
const dynamicDivs = document.querySelector(".dynamic-divs");

input.addEventListener("change", function (event) {
  console.log(event.target.value);

  dynamicDivs.innerHTML = "";

  const amount = event.target.value;

  for (let i = 1; i <= amount; i++) {
    dynamicDivs.innerHTML += `<div>Number ${i}</div>`;
  }
});

const resetButton = document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".dynamic-divs").innerHTML = "";
  document.querySelector("input").value = "";
});
*/