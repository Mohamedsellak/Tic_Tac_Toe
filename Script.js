let turn = 'x';
let title = document.querySelector(".title")
let square =[]

function equal(){
  setTimeout(function(){location.reload()},500)
}

function end(nb1,nb2,nb3)
{
  title.innerHTML = square[nb2] + "  won" ;
  document.getElementById("item"+ nb1).style.background = "#000"
  document.getElementById("item"+ nb2).style.background = "#000"
  document.getElementById("item"+ nb3).style.background = "#000"
  setInterval(function(){title.innerHTML += "."},1000)
  setTimeout(function(){location.reload()},4000)
}

function winner()
{
  for(let i = 1; i<10; i++)
  {
    square[i] = document.getElementById("item" + i).innerHTML
  }
  if (square[1] == square[2] && square[2] == square[3] && square[2] != "")
  {
    end(1,2,3)
  }
  else if (square[4] == square[5] && square[5] == square[6] && square[5] != "")
  {
    end(4,5,6)
  }
  else if (square[7] == square[8] && square[8] == square[9] && square[8] != "")
  {
    end(7,8,9)
  }
  else if (square[1] == square[4] && square[4] == square[7] && square[4] != "")
  {
    end(1,4,7)
  }
  else if (square[2] == square[5] && square[5] == square[8] && square[5] != "")
  {
    end(2,5,8)
  }
  else if (square[3] == square[6] && square[6] == square[9] && square[6] != "")
  {
    end(3,6,9)
  }
  else if (square[1] == square[5] && square[5] == square[9] && square[5] != "")
  {
    end(1,5,9)
  }
  else if (square[3] == square[5] && square[5] == square[7] && square[5] != "")
  {
    end(3,5,7)
  }
}




function game(id)
{
  let element = document.getElementById(id);
  if(turn ==='x' && element.innerHTML === "" )
  {
    element.innerHTML = turn
    turn = "o"
    title.innerHTML = turn
  }
  else if (turn ==="o" && element.innerHTML === "")
  {
     element.innerHTML = turn
     turn = "x"
     title.innerHTML = turn
  }
  winner();
}