const table = document.getElementById("tableKey");
    let tbody = table.children[0];
    let saveThead
    
function generateKey(){
    console.log("Generate Euromilhões key");

    const key = {
        numbers: generateXNumbersBetweenMinAndMax
        (5,1,50),
        stars: generateXNumbersBetweenMinAndMax
        (2,1,12)
    }
    key.numbers = sortIntArray(key.numbers);
    key.stars = sortIntArray(key.stars);

    addKeyToHtmlTable(key)
}

function generateXNumbersBetweenMinAndMax(
    lenght,
    minNumber,
    maxNumber
){
    let numbers = [];

    while(numbers.length < lenght){
        let randomNumber =
            Math.random() * (maxNumber - minNumber) + minNumber;
        numbers.push(Math.floor(randomNumber));
    }
    return numbers;
}

function sortIntArray(array) {
    array.sort((a,b) => a - b)
}

function addKeyToHtmlTable(key) {

    tbody.innerHTML = tbody.innerHTML
    + '<tr>'
        + '<td>' + key.numbers.join(' - ')
        + ' ** ' + key.stars.join(' - ') + '</td>'
        + '<td>' + key.numbers.join(' - ') + '</td>'
        + '<td>' + key.stars.join(' - ') + '</td>'
    + '</tr>'
}

function cleanTable(){
    tbody.innerHTML = '';
    console.log("Clean Euromilhões keys");
}