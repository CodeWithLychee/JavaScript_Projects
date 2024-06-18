const form = document.querySelector("form");
const BMIWeightGuide = ["Under Weight", "Normal Range", "Over Weight"];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = document.querySelector("button");
  button.innerHTML = " &#9995; Wait I'm Calculating....";

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  result.innerHTML = "";

  function calculateBMI() {
    button.innerHTML = "Result is : ";
    if (height === "" || isNaN(height) || height < 0) {
      result.innerHTML = `<span><img src="../images/03_Cat_crying.gif" height=200px> <br/>
                                Please Enter a valid height</span>`;
    } else if (weight === "" || isNaN(weight) || weight < 0) {
      result.innerHTML = `<span><img src="../images/03_Cat_crying.gif" height=200px> <br/>
                                Please Enter a valid height</span>`;
    } else {
      const formula = (weight / ((height * height) / 10000)).toFixed(2);
      if (formula < 18.6) {
        result.innerHTML = `<span><img src="../images/02_Happy.gif" height=200px><br/>BMI is : ${formula}<br/>
            Person is ${BMIWeightGuide[0]}</span>`;
      } else if (formula >= 18.6 && formula <= 24.9) {
        result.innerHTML = `<span><img src="../images/02_Happy.gif" height=200px><br/>BMI is : ${formula}<br/>
              Person is ${BMIWeightGuide[1]}</span>`;
      } else if (formula > 24.9) {
        result.innerHTML = `<span><img src="../images/02_Happy.gif" height=200px><br/>BMI is : ${formula}<br/>
                Person is ${BMIWeightGuide[2]}</span>`;
      }
    }
  }
  setTimeout(calculateBMI, 3000);
});
