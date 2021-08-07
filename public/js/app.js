const weatherForm = document.querySelector("form");
const weatherInput = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageTwo.textContent = "";
  messageOne.textContent = 'Loading ...';
  const location = weatherInput.value;
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = "";
          messageTwo.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecastData;
        }
      });
    }
  );
});
