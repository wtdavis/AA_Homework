console.log("Hello from the console!");

// Your code here
let weather = fetch('https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=bcb83c4b54aee8418983c2aff3073b3b')
.then(function (response) {console.log(response.json())})

//instructions are so unclear. process? wtf