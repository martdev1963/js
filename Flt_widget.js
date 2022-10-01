const tableBody = document.getElementById('table-body');
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            **DOCUMENTATION/COMMENTS**
                                                            FLIGHT WIDGET Coded in JS
VID_TIME_PAUSED_@: 22:25/2:18:22
3 way to build a flight widget Javasript + React +Nodejs + API + Database
https://www.youtube.com/watch?v=3QSWROFg_sc
JS VERSION ENDS: 38:19
Nodejs + API VERSION STARTS: 38:24 / 2:18:22 It uses the RapidAPI Hub!
---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// -- FLIGHT SCHEDULE OBJECTS BEGIN --

let flights = [
    {
        time: "10:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "12:21",
        destination: "London",
        flight: "CL 320",
        gate: "C 31",
        remarks: "CANCELLED"
    },

    {
        time: "13:30",
        destination: "DUBAI",
        flight: "DX8 301",
        gate: "A 19",
        remarks: "ON TIME"
    },

    {
        time: "14:23",
        destination: "SPAIN",
        flight: "SPA 788",
        gate: "Z 78",
        remarks: "ON TIME"
    },

    {
        time: "15:11",
        destination: "PARIS",
        flight: "PAR 709",
        gate: "B 77",
        remarks: "DELAYED"
    }

]
// -- FLIGHT SCHEDULE OBJECTS END --

// arrays...
const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "ABUDABI", "OMAN", "DOMINICAN REPUBLIC"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;



// function to populate table with flights departure data objects...
function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr"); // creates a table row for each of the scheduled flights...
        // loop within a loop...    
          
        for (const flightDetail in flight) { // each flight's detail
            const tableCell = document.createElement("td");
            console.log('flightDetail', flightDetail); // for shits and giggles...
            const word = Array.from(flight[flightDetail]) // make  an array of the flightDetails...
            //tableCell.innerText = flight[flightDetail];
            //tableCell.innerText = flightDetail;
              
            for (const [index, letter] of word.entries()){ // parse/traverse through the array of words letter by letter...
                const letterElement = document.createElement('div');

                setTimeout(() => { // this is the object as 1st parameter...

                 // times the index so then 100ms, 200ms ,etc...
                    letterElement.classList.add('flip'); // dynamically adding flip class...
                    letterElement.textContent = letter;
                    //console.log(letterElement.textContent = letter); // just to test the output...
                    tableCell.append(letterElement); // display the letters...
                }, 100 * index) //and then the specified time as 2nd parameter...
            }

            tableRow.appendChild(tableCell);
        }

        tableBody.append(tableRow);
        //tableRow.append(tableData);
    }
}

populateTable(); // call function...


function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //string
    return alphabet.charAt(Math.floor(Math.random()*alphabet.length)); //using floor() to round off to lowest possible integer...hence floor...
}


function generateRandomNumber(maxNum) {
    const numbers = "0123456789"; //string
    if (maxNum) {
        const newNumbers = numbers.slice(0, maxNum + 1); // returns new array with start point and end point specified by 2nd parameter...(maxNum) the end (maxNum) is non-inclusive...
        return newNumbers.charAt(Math.floor(Math.random()*newNumbers.length));
    }
    return numbers.charAt(Math.floor(Math.random()*numbers.length)); //using floor() to round off to lowest possible integer...hence floor...
}


function generateTime() {
    let displayHour = hour;
    if (hour < 24) {
        hour++;    
    }
    if (hour >= 24) {
        hour = 1;  
        displayHour = hour;  
    }
    if (hour < 10) {  
        displayHour = "0"  + hour;  
    }

    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();

}



function shuffleUp() {
    flights.shift(); // gets rid of value in first index...
    flights.push({ // pushes this value (which is an object) into the array or list...
        time: generateTime(),
        destination: destinations[Math.floor(Math.random()*destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " "  + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random()*remarks.length)]

    });

    tableBody.textContent = " ";
    populateTable();
}



setInterval(shuffleUp, 4700);
