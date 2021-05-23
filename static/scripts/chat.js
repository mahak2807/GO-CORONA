var clicking = document.getElementsByClassName("bar-box");

for (let i = 0; i < clicking.length; i++) {
    clicking[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = " hello!!"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Gets the frequently asked questions
function frequentQuestions() {
    let Question = " Ask any of the questions below:</br> 1.How can i protect myself?</br> 2.What should i do if i get sick? </br>3.What treatments are available for COVID-19? </br> 4.How do i report COVID-19 vaccine side effects?</br> 5.Are there any at-home tests for COVID-19? </br> 6.I recently recovered from COVID-19, can i donate plasma? "
    document.getElementById("options").innerHTML = '<p class="optionText"><span>' + Question+ '</span></p>';
    document.getElementById("userInput").scrollIntoView(false);
}

frequentQuestions();


// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Thank you !!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}


// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
  
