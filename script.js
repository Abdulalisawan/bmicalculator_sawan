function getBmi() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    // let bmi = (weight) / (height*height)
    // document.getElementById("result").innerHTML = "Your BMI is" + bmi +

    if (weight > 0 && height > 0){
        let bmi = (weight) / (height*height);
        

        let cetagory = ""
        if( bmi < 18.5){
            cetagory = "Underwwight"
        }
        else if( bmi < 25){
            cetagory ="Normal weight"
        }
        else if ( bmi < 30){
            cetagory = "overweight"
        }
        else{
            cetagory = "obese"
        }
        document.getElementById("result").innerHTML = " Your BMI is " + bmi.toFixed(2)  + " and you are " + cetagory;
    }

        
    else {
        document.getElementById("result").innerHTML = "Weight and Height should be bigger then 0"

    }
   
}
