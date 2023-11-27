// Locations and Hints Object
const options = {
    Paris: "City; The Effiel Tower",
    Himalayas: "Highest mountain range in the world",
    Mississippi: "American State; Birthplace of Elvis Presley",
    China: "Country; The Great Wall",
    England: "Country; London is it's capital",
    Wolverhampton: "City; Named after Wulfrun, a Merican noblewoman and landowner",
    Antarctic: "Uninhabited continent in the Southern Hemisphere and the site of the South Pole", 
    Salisbury: "City; Famous for Stonehenge", 
    Australia: "Country; Down Under", 
    Bethlehem: "Town; Biblical birthplace of Jesus",
    Gibraltar: "A British Overseas Territory on the south coast of Spain", 
    Mediterranean: "Sea; Between the continents of Europe and Africa",  
    Nevada: "The Silver State, Area 51",
    Kazakhstan: "Country; Former Soviet republic located in central Asia", 
    Jamaica: "Country; Birthplace of Bob Marley",
    Sahara: "The largest hot desert in the world",
    Peckham: "District in South-east London where Del Boy lives",
    Pamplona: "City; Running of the bulls", 
    Bermuda: "A British island territory in the North Atlantic",
    Mariana: "An oceanic trench located in the Western Pacific Ocean", 
    Southampton: "Port city; Where the Titanic started it's fatal maiden voyage from", 
    Houston: "City; Located in the Texan state and is nicknamed the Space City", 
    Keystone: "Resort town in the South Dakota state where Mount Rushmore is", 
    Chessington: "Part of Surrey, bordered by Greater London, which is known for having a popular theme park resort",
    Yellowstone: "A national park in the western United State where the Old Faithful geyser is located",
    Detroit: "The Motor City where fictional Robocop comes to life", 
    Manhattan: "One of boroughs of New York City which translate to 'the place where we get bows' from Lenape language",
    Guernsey: "The second largest island in the Channel Islands in the English Channel",
    Madagascar: "The world's fourth largest island near the southeastern coast of Africa",
    Indonesia: "Country; The world's largest archipelagic state",
};

//Initial References
const message = document.getElementById("message");
const hint = documment.querySelector(".hint");
const controls = document.querySelector(".controls-area");
const startBtn = document.getElementById("start");
const onScreenKeyboard = document.getElementById("on-screen-keyboard");
const userInput = document.getElementById("user-input");
const resultDisplay = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
    randomHint = "";
let winCount = 0,
    lossCount = 0;

//Generate random location values
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

//Block all the buttons
const blocker = () => {
    let lettersButtons = document.querySelectorAll(".letters");
};