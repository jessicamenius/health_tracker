const bmr;
const age = document.getElementById("age").value;
const gender = document.getElementById("gender").value;
const height = document.getElementById("height").value;
const weigth = document.getElementById("weight").value;

function calculateBMR(){
    if (gender == "male") {
        bmr = 66.5 + ( 13.75 * weigth ) + ( 5.003 * height ) + ( -6.755 * age )
        }
        else {
        bmr = 655.1 + ( 9.563 * weigth ) + ( 1.850 * height ) + ( -4.676 * age )
        }
        
}

console.log(calculateBMR());
