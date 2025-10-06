console.log("js Working..."); // check if JS is connected or not

const URL = "https://official-joke-api.appspot.com/random_joke"; // API
let jokeBtn = document.querySelector("#Fetch-jokes"); // HTML
let setup = document.querySelector(".setup");
let punchline = document.querySelector(".punchline");

const getJokes = async () => { // async function to get promise from the API/URL
    
    let response = await fetch(URL); // getting response 

    let useData = await response.json(); // converting it into json() file

    console.log(useData.setup); // check if it is working or not 
    console.log(useData.punchline);

    // Changing HTML code
    setup.innerText = useData.setup;
    punchline.innerText = useData.punchline;
}

jokeBtn.addEventListener("click" , getJokes); // adding event listener to my button