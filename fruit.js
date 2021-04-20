<html>
    <head>
        <title>Fruit Zen</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet">
    </head>
    <body>
        <h1 id='heading'></h1>
        <div class="container">
            <div class="slot" id="one"></div>
            <div class="slot" id="two"></div>
            <div class="slot" id="three"></div>
            <button id="btn" onclick="stop();">Stop</button>
      
            <audio src="won.mp3" id="winningSound"></audio>
            <audio src="music.mp3" id="backgroundMusic"></audio>
            <button id="soundBtn"
                    onclick="document.getElementById('backgroundMusic').play();">
              Play Sound
            </button>
            <button id="musicBtn" onclick="stopMusic();">Stop Music</button>
            <div id="gameOver">
            </div> 
          
          
        </div>
            
       
        <script>
             
            var name = prompt("Enter your name");
            document.getElementById('heading').innerHTML = name + "'s Fruit Zen";
          
            var things = [ "banana.png",
			    "pineapple.png",
			    "cherry.png",
			    "strawberry.png",
			    "apple.png",
			    "pear.png",
			    "watermelon.png",
			    "orange.png",
			    "juice.png"
            ];

            var total = things.length - 1;
          
            function randomNumber() {
                var num = Math.round(Math.random()*total);
                return num;
            }

            function randomize() {
                var num1 = randomNumber();
                var num2 = randomNumber();
                var num3 = randomNumber();

                var html1 = "<img src=" + things[num1] + ">";
                document.getElementById("one").innerHTML = html1;

                var html2 = "<img src=" + things[num2] + ">";
                document.getElementById("two").innerHTML = html2;

                var html3 = "<img src=" + things[num3] + ">";
                document.getElementById("three").innerHTML = html3;
            }

            var interval = setInterval(randomize, 500);
            
            function stop(){
                document.getElementById("backgroundMusic").pause();
                clearInterval(interval); // this stops the setInterval() function from calling the randomize() function repeatedly...
                var one = document.getElementById("one").innerHTML;
                var two = document.getElementById("two").innerHTML;
                var three = document.getElementById("three").innerHTML;
                if(one == two && two == three){
                  document.getElementById("winningSound").play();
                  document.getElementById("heading").innerHTML = "You Won!!"; 
                }else{
                  document.getElementById("heading").innerHTML = "Better luck next time!";
                }
                document.getElementById("gameOver").innerHTML = "<button id='btn' onclick='restart();'>Try again</button>"; // draws a button in the div...
            }
           
          function restart(){
            document.getElementById("backgroundMusic").play();  
            document.getElementById("gameOver").innerHTML = " "; 
            document.getElementById('heading').innerHTML = name + "'s Fruit Zen";
            interval = setInterval(randomize, 500);
          }
          
          function stopMusic(){
             document.getElementById("backgroundMusic").pause();
            
          }


          

        </script>
    </body>
</html>
