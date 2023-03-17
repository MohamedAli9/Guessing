// initialize the number of attems variable
let attempts = 0;


// call main where the doc is ready
$(document).ready(main);

 // main calls the load functions.
function main () {
    // get the user name from session storage and welcome them
    let name = sessionStorage.getItem("username");
    console.log(name);
    let result2 = $("#Welcoming").text()+ " "+ name;
    $("#Welcoming").text(result2);
    // when the button in index page or game page is clicked, call didTheyGotIt function
    $("button").on("click", didTheyGotIt);
    
    
}
//initialize the ramdom number the first time. When the user got it right, get a random number from the server.
let theRandomNumber = 7;
//userInputs collects the user input values and displayes them on the screen.
let userInputs = "";

//create an array which hold the number of attempts of each game the user played. I stored this array into the local storage and displayed it on the screen
let scores = []

//didTheyGotIt function determines whether the number the user typed in is too low, too high, or is the correct number
//if the user gets the number right, the function calll ajaxsent() function which will send http request for another 
//random number.
function didTheyGotIt() {
    let userInput = $("#userNum").val();

    if (userInput == theRandomNumber) {
        attempts = attempts + 1;
        let name = sessionStorage.getItem("username");
        scores.push(attempts);
        sessionStorage.setItem( name, JSON.stringify(scores));
        $("#answer").html("Congratulations "+ name+ "! You Guessed the number in " + (attempts)+" attempts")
        $("#NumOfAttempts").text(scores);
        $("#user").html("");
        attempts = 0;
        ajaxsent();

    }
    else if (userInput < theRandomNumber) {
        attempts =attempts+1;
        userInputs = $("#userNum").val();
        var result = $("#user").text()+" " +userInputs;
        $("#user").text(result);
        $("#answer").html("Your guess is two low");

    } else {
        attempts =attempts+1;
        userInputs = $("#userNum").val();
        var result = $("#user").text() +" " +userInputs;
        $("#user").text(result)
        $("#answer").html("Your guess is two high");

    }
}

//this function send http request for my server using jquery.
function ajaxsent() {
    $.ajax({url: "http://45.79.221.107:3020/random", success: informationReceived });
}

//this function parses the random number and assigns it to theRandomNumber variable which I initialized above.
function informationReceived(dataObject) {
    let parseTheObject = JSON.parse(dataObject);
    console.log("Here is the random nummber", parseTheObject.Number);
    theRandomNumber =  parseTheObject.Number;


}



