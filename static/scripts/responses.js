function getBotResponse(input) {

    if (input == "hello"||input == "hii"||input == "hey"||input == "hi"||input == "hlo") {
        return "Hello !!</br> Are you staying indoor? If not , Stay home Stay safe. "; 
    } 
    else if (input == "how are you?") {
        return "I am Fine !";
    }
    else if (input == "How can i protect myself?") {
        return "Protect yourself and others around you by taking appropriate precautions like:</br>1.Clean your hands. </br>2. A safe distance from anyone who is coughing or sneezing.</br>3.Wear a mask in crowded place.</br>4.Don’t touch your eyes, nose or mouth. ";
    }
    else if (input == "What should i do if i get sick?") {
        return "Stay home and self-isolate even if you have minor symptoms such as cough, headache, mild fever, until you recover. Call your health care provider or hotline for advice. Have someone bring you supplies. If you need to leave your house or have someone near you, wear a medical mask to avoid infecting others.";
    }
    else if (input == "What treatments are available for COVID-19?") {
        return "In October 2020, the FDA approved the antiviral drug remdesivir to treat COVID-19. The drug may be used to treat adults and children ages 12 and older and weighing at least 88 pounds, who have been hospitalized for COVID-19. Clinical trials suggest that in these patients, remdesivir may modestly speed up recovery time";
    }
    else if (input == "How do i report COVID-19 vaccine side effects?") {
        return "COVID-19 vaccine will be introduced only when the safety is proven. As is true for other vaccines, the common side effects in some individuals could be mild fever, pain, etc. at the site of injection.";
    }
    else if (input == "Are there any at-home tests for COVID-19?") {
        return "Yes. There are now FDA-authorized COVID-19 tests available for purchase online or in a store that can be used completely at home. At-home tests allow you to collect your own sample and test it with a system that gives you results in minutes at home.";
    }
    else if (input == "I recently recovered from COVID-19, can i donate plasma?") {
        return "COVID-19 convalescent plasma must only be collected from recovered individuals if they are eligible to donate blood.Individuals must have fully recovered from COVID-19, with complete resolution of symptoms for at least 14 days before donation of convalescent plasma. You can ask your local blood center if there are options to donate convalescent plasma in your area.";
    }
    else if (input == "goodbye"||input == "bye") {
        return "Goodbye !! Have a nice day";
    } else {
        return "Try asking something else!";
    }
}