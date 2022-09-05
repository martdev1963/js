<DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Coding Train: Data/APIs 1</title>
    </head>    
    <body>
        <img src="" id="picture_x" width="480" />
        <script>
            console.log('about to fetch a specified picture as a datatype blob...')

            //catchImageBlob();
            
            catchImageBlob()
                .then(response => {
                    console.log('YAY!! WILL ROBINSON!!');
                })
                .catch(error => {
                    console.log('Error! WILL ROBINSON!!!');
                    console.log(error);
                });

            async function catchImageBlob() {
                const response = await fetch('download.jpeg');
                //const response = fetch('iss200.png');
                const blob = await response.blob();
                document.getElementById('picture_x').src = URL.createObjectURL(blob); // placing the returned blob image data and placing it into the <i mg> DOM element with id: picture_x
            }



           /*  HERE'S ANOTHER WAY TO GET SAME RESULTING OUTPUT AS IN THE CODE ABOVE...

            fetch('download.jpeg') // millenium falcon pic...
            //fetch('iss200.png') // international space station vector graphic...
            .then(response => {  // arrow syntax (=>) is an alternative to using the keyword: function when writing function definitions...
                console.log(response);
                return response.blob();
            })
            .then(blob => {
                console.log(blob);
                document.getElementById('picture_x').src = URL.createObjectURL(blob); // placing the returned blob image data and placing it into the <i mg> DOM element with id: picture_x
            })
            .catch(error => {
                console.log('error!');
                console.log(error);
            });
            */
//.catch; 
 //HERE ARE THE SOLUTIONS TO THE CODE CHALLENGES AT THE END OF VIDEO TUTORIAL:
 //REPOSITORY:
 //https://github.com/CodingTrain/Intro-to-Data-APIs-JS
//STOPPED VIDEO @ 11:01 / 15:38  1.1 fetch() - Working with data & APIs in JavaScript...
// https://www.youtube.com/watch?v=tc8DU14qX6I&t=190s
// type this address for local nodejs server (live-server) http://127.0.0.1:8080/index2.html
// command to start live-server is just: live-server in the terminal... command to stop live-server is just ctrl c
/*------
OS Terminal OUTPUT:
Martins-Mini:APIs martinbatista$ live-server --version
live-server 1.2.2
Martins-Mini:APIs martinbatista$ ls
api_data.js	download.jpeg	index.html	index2.html	iss200.png	main.js		style.css
Martins-Mini:APIs martinbatista$ live-server
Serving "/Users/martinbatista/Desktop/APIs" at http://127.0.0.1:8080
Ready for changes
GET /my-icon-shadow.png 404 54.019 ms - 157
GET /favicon.ico 404 1.743 ms - 150
GET /my-icon-shadow.png 404 1.611 ms - 157
GET /my-icon-shadow.png 404 2.448 ms - 157
GET /my-icon-shadow.png 404 3.738 ms - 157
GET /my-icon-shadow.png 404 1.054 ms - 157
GET /my-icon-shadow.png 404 2.686 ms - 157
GET /index2 404 0.615 ms - 145
Change detected /Users/martinbatista/Desktop/APIs/index2.html
GET /index2 404 1.246 ms - 145
------*/
        </script>

    </body>

</html>
