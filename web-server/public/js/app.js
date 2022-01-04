console.log("client side js file loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  // console.log(location)
  
  messageOne.innerHTML 
  messageTwo.innerHTML

  fetch('http://localhost:3000/weather?address=' + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.innerHTML = data.error
          // console.log(data.error);
          messageTwo.innerHTML = ""
        } else {
          // console.log(data.location);
          // console.log(data.forecast);
          messageOne.innerHTML = data.location
          messageTwo.innerHTML = data.forecast
        }
      });
    }
  );
});
