let button = document.querySelector(".form_button");
button.addEventListener("mousedown", checkPass, false);

function checkPass(){
  let inputs = document.querySelectorAll(".form_input");
  let banned = ["-", "/", "[", "]", "(", ")", "^", ":", ";"];



  for(let i=0; i<inputs.length; i++){
    for(let j=0; j<banned.length; j++){
      checker = inputs[i].value.indexOf(banned[j]);
      if(checker!=-1){
        notify();
        break;
      }
    }
  }

  function notify(){
    let elem = document.createElement("div");
    elem.classList.add("notification");
    elem.setAttribute("style", "white-space: pre;");
    elem.textContent = "Woops!\r\nInvalid Password/Email...";

    let body = document.querySelector("body");
    let script = document.querySelector("script");
    body.insertBefore(elem, script);

    console.error("Error #1: Unavailable symbol catched in Login.");


    let pos = 10;
    let opacity = 0.10;

    let intervalId = setInterval(move, 1000/60);

    setTimeout(function(){elem.remove();}, 10000);

    function move(){
      if(pos<75){
        pos += 3;
      }
      opacity += 0.03;
      elem.style.top = pos+"%";
      elem.style.opacity = opacity;
      if(opacity==100){
        clearInterval(intervalId);
      }
    }
  }
}
