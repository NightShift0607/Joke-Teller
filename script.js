const speech = new SpeechSynthesisUtterance();

let button = document.querySelector("#button");

async function getJoke() {
  let joke = "";
  try {
    const apiUrl = "https://v2.jokeapi.dev/joke/Dark";
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
  } catch (error) {
    console.log(error);
  }
}

function tellMe(joke) {
  speech.text = joke;
  window.speechSynthesis.speak(speech);
}

button.addEventListener("click", getJoke);
