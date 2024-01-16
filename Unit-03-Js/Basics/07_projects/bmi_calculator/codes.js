const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = bmi;

    let message = document.querySelector("#message");

    if (results < 18.6) {
      message.innerHTML = `The age is under weight ${results}`;
    } else if (results === 18.6 && 24.9) {
      results.innerHTML = `The age is in normal range ${results}`;
    } else if (results > 24.9) {
      results.innerHTML = `The age is in over weight ${results}`;
    }
  }
});
