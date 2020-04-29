let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let playAgainButton = document.querySelector("#playAgain")

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

//array to store county codes
let countyCodeArray = [] 
//array to store county names
let countryNameArray = []

console.log(countyCodeArray)
//calls refresh function on page load
onload = refreshPage()

console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available 

function refreshPage(){
    let randomCountryEl = countriesAndCodes[Math.floor(Math.random()*countriesAndCodes.length)]
    console.log(randomCountryEl)
    let randomCountry = randomCountryEl.name 
    console.log(randomCountry)
    randomCountryElement.innerHTML = randomCountry
    countryCodeArray.push(randomCountryEl['alpha-2'])
    countryNameArray.push(randomCountryEl.name)
}

submitButton.addEventListener('click', function(){
    let theAnswer = theAnswerElement.value //turns their answer into value
    if(!theAnswer)
        alert('Please enter a Capital Name')
}else{
    let urlWorldBank ='https://api.worldbank.org/v2/country/${countryCode}?format=json'
        fetch(urlWorldBank)
        .then( (res) => res.json())
        .then( rcc => {
            console.log(rcc)
            let capitalCity = rcc[1][0]['capitalCiy']
        console.log(theAnswer)
    console.log(capitalCity)
    if(theAnswer.trim().toLowerCase() != capitalCity.toLowerCase())
            resultTextElement.innerHTML = "Incorrect, the Capital of ${countryNameArray} is not the ${theAnswer}. It is ${capitalCity}"
    if(theAnswer.trim().toLowerCase() === capitalCity.toLowerCase())
    resultTextElement.innerHTML = "Congrats! you are correct! ${capitalCity} is the capital of ${countryName}"

})
.catch ( err => { //if no response lof error
console.log(err)
})
}})
playAgainButton.addEventListener('click', function(){
    theAnswerElement.value = ''
    countryNameArray = []
    countyCodeArray = []
    refreshPage()
    resultTextElement.innerHTML = 'Wha is the Correct Capital'
})

//// TODO when the page loads, select an element at random from the countriesAndCodes array




// TODO display the country's name in the randomCountryElement 



// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice. 
