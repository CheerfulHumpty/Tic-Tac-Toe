const cell = document.querySelectorAll(".cells");
let tic = document.querySelector(".tic")
let main = document.querySelector(".main");
let win = document.getElementById("win")
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let t6 = document.getElementById("t6");
let t7 = document.getElementById("t7");
let t8 = document.getElementById("t8");
let t9 = document.getElementById("t9");
let roll = document.getElementById("roll");
let rotate = 0;
let go = 25;
setInterval(function(){
    tic.classList.toggle("down");
} , 1000)
setInterval(function(){
  rotate += 20;
  roll.style.transform = "rotate("+rotate+"deg)";
} , 40)
let player = "X";
    cell.forEach((cells) => {
      cells.addEventListener("click", function(e){
          if(e.target.innerHTML === ""){
           e.target.innerHTML = player;
           if(t1.innerHTML != ""&&t2.innerHTML != ""&&t3.innerHTML != ""&&t4.innerHTML != ""&&t5.innerHTML != ""&&t6.innerHTML != ""&&t7.innerHTML != ""&&t8.innerHTML != ""&&t9.innerHTML != ""){
              main.classList.toggle("show");
                win.innerHTML = "This match is a tie";
                roll.style.display = "none"
                setTimeout(function(){
                    window.location.reload();
                } , 5000)
          }
           switchplayer();
           winner();}
      });
      function winner(){
          if(t1.innerHTML === "X"&&t2.innerHTML === "X"&&t3.innerHTML === "X"||t4.innerHTML === "X"&&t5.innerHTML === "X"&&t6.innerHTML === "X"||t7.innerHTML === "X"&&t8.innerHTML === "X"&&t9.innerHTML === "X"||t1.innerHTML === "X"&&t4.innerHTML === "X"&&t7.innerHTML === "X"||t2.innerHTML === "X"&&t5.innerHTML === "X"&&t8.innerHTML === "X"||t3.innerHTML === "X"&&t6.innerHTML === "X"&&t9.innerHTML === "X"||t1.innerHTML === "X"&&t5.innerHTML === "X"&&t9.innerHTML === "X"||t3.innerHTML === "X"&&t5.innerHTML === "X"&&t7.innerHTML === "X"){
               roll.innerHTML = "X";
               setInterval(function(){
                   go+=5;
                   roll.style.left = go + "px"
               },40)
                main.classList.toggle("show");
                win.innerHTML = "Player X , you won the match !!!!";
           
              setTimeout(function(){
                  window.location.reload(); 
              } , 4000);
          }
          else if(t1.innerHTML === "O"&&t2.innerHTML === "O"&&t3.innerHTML === "O"||t4.innerHTML === "O"&&t5.innerHTML === "O"&&t6.innerHTML === "O"||t7.innerHTML === "O"&&t8.innerHTML === "O"&&t9.innerHTML === "O"||t1.innerHTML === "O"&&t4.innerHTML === "O"&&t7.innerHTML === "O"||t2.innerHTML === "O"&&t5.innerHTML === "O"&&t8.innerHTML === "O"||t3.innerHTML === "O"&&t6.innerHTML === "O"&&t9.innerHTML === "O"||t1.innerHTML === "O"&&t5.innerHTML === "O"&&t9.innerHTML === "O"||t3.innerHTML === "O"&&t5.innerHTML === "O"&&t7.innerHTML === "O"){
              roll.innerHTML = "O";
               setInterval(function(){
                   go+=5;
                   roll.style.left = go + "px"
               },40)
              main.classList.toggle("show");
                win.innerHTML = "Player O , you won the match !!!!";
                setTimeout(function(){
                  window.location.reload(); 
              } , 4000);
          }
          
      }
      function switchplayer(){
          if(player === "X"){
              player = "O"
          }
          else if(player === "O"){
              player = "X"
          }
      }
    });
