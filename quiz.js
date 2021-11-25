function buttonFunction(){
  let score = 0

  let bird = document.querySelector("#bird").checked;
  console.log(bird);
  function birdanswer(bird) {
    if (bird == true){
      score +=1;
    }
  };
  console.log(birdanswer(bird))

  let one = document.querySelector("#Yes").checked;

  let two = document.querySelector("#No").checked;

  let three = document.querySelector("#good").checked;

  function milkanswer(three) {
    if (three == true) {
      score += 1;
    }
  };
  console.log(milkanswer(three))

  let birdfly = document.querySelector("#pick").checked;
  console.log(birdfly);
  function birdflying(birdfly) {
    if (birdfly == false){
      score +=1;
    }
  };

  console.log(birdflying(birdfly))

  let dolphins = document.querySelector("#pic").checked;
  console.log(dolphins);
  function dolphinreal(dolphins) {
    if (dolphins == false){
      score +=1;
    }
  };
  console.log(dolphinreal(dolphins))

  let dolphinswim = document.querySelector("#dolphin").checked;

  let ostrichswim = document.querySelector("#ostrich").checked;

  let flyswim = document.querySelector("#fly").checked;

  console.log(dolphinswim);

  function dolphinswimanswer(dolphinswim){
    if (dolphinswim == true) {
      score +=1;
    }
  };
  console.log(dolphinswimanswer(dolphinswim))
  console.log(score)


  document.getElementById("p1").innerHTML = "Answers (each answer is worth 1 point)";
  document.getElementsByClassName("paragraph")[0].innerHTML = "Birdo!!!";
  document.getElementsByClassName("paragraph")[1].innerHTML = "Obv Yes you need the MILK";
  document.getElementsByClassName("paragraph")[2].innerHTML = "birds can't fly, they are not even real. Oh and dolphins can't swim too lol.";
  document.getElementsByClassName("paragraph")[3].innerHTML = "dolphins can swim.";
  document.getElementById("h3").innerText = "Score:" + score;

};
