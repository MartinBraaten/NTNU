
function visDokumentasjon() {
  // Endre tekst på knappen
 var button = document.getElementById('knapp');
 if (button.innerHTML === "Skjul dokumentasjonen") {
     button.innerHTML = "Vis dokumentasjonen";
 } else {
     button.innerHTML = "Skjul dokumentasjonen";
 }
 // Vis/skjul dokumentasjonen på siden
 var dokumentasjon = document.getElementById("dokumentasjon");
 if (dokumentasjon.style.display === "none") {
     dokumentasjon.style.display = "block";
 } else {
     dokumentasjon.style.display = "none";
 }
}

function visDokumentasjon1() {
  var button = document.getElementById('knapp');
  var dokumentasjon = document.getElementById("dokumentasjon");
  if (dokumentasjon.style.display === "none") {
     dokumentasjon.style.display = "block";
     button.innerHTML = "Skjul dokumentasjonen";
  } 
}



// Figur i canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let raf;

const statisk = {
    draw() {
      // Stolpe
      ctx.beginPath();
      ctx.moveTo(190, 390);
      ctx.lineTo(190, 140);
      ctx.lineTo(210, 140);
      ctx.lineTo(210, 390);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "lightgrey";
      ctx.fill();
    
      //Rosjonssirkel
      ctx.beginPath();
      ctx.arc(200, 140, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill()

      //Lyspæreboks
      ctx.beginPath();
      ctx.moveTo(210, 390);
      ctx.lineTo(300, 360);
      ctx.closePath();
      ctx.stroke()
      ctx.beginPath();
      ctx.moveTo(300, 360);
      ctx.lineTo(300, 300);
      ctx.lineTo(360, 300);
      ctx.lineTo(360, 360);
      ctx.moveTo(300, 360);
      ctx.lineTo(360, 360);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "lightblue";
      ctx.fill()
      ctx.beginPath();
      ctx.moveTo(360, 360);
      ctx.lineTo(210, 390);
      ctx.closePath();
      ctx.stroke();
      
      //pluss 
      ctx.beginPath();    
      ctx.moveTo(310, 350);
      ctx.lineTo(310, 355); //(0,5)
      ctx.moveTo(310, 350); 
      ctx.lineTo(315, 350);  //(5,0) 
      ctx.moveTo(310, 350);  
      ctx.lineTo(305, 350); //(-5,0)
      ctx.moveTo(310, 350);  
      ctx.lineTo(310, 345); //(0,-5)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill()
      //minus
      ctx.beginPath();
      ctx.moveTo(350, 350);
      ctx.lineTo(355, 350); //(0,5)
      ctx.moveTo(350, 350);
      ctx.lineTo(345, 350); //(-5,0)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill()
      //lyspære
      ctx.beginPath();
      ctx.moveTo(330, 295);
      ctx.lineTo(335, 295);
      ctx.lineTo(325, 295)
      ctx.moveTo(330, 290);
      ctx.lineTo(337, 290);
      ctx.lineTo(323, 290)
      ctx.moveTo(330, 285);
      ctx.lineTo(340, 285);
      ctx.lineTo(320, 285)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill()
      //sirkelen
      ctx.beginPath();
      ctx.moveTo(330, 240);
      ctx.arc(330, 260, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "white"; // byttes til gul når vindmøllen roterer
      ctx.fill()
      //vindmøllebladene
      ctx.beginPath();
      ctx.moveTo(200, 120);
      ctx.lineTo(200, 10);
      ctx.lineTo(220, 90);
      ctx.lineTo(205, 120);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //syd
      ctx.beginPath();
      ctx.moveTo(200, 160);
      ctx.lineTo(200, 270);
      ctx.lineTo(180, 180);
      ctx.lineTo(195, 160);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //vest
      ctx.beginPath();
      ctx.moveTo(180, 140);
      ctx.lineTo(70, 140); // (-110, 0)
      ctx.lineTo(150, 120); // (80, -20)
      ctx.lineTo(180, 135);  // (30, -15)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //øst
      ctx.beginPath();
      ctx.moveTo(220, 140);
      ctx.lineTo(330, 140); 
      ctx.lineTo(250, 160);
      ctx.lineTo(220, 145);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill()  
    }
}

  
const dynamisk = {
    
    draw() {
      
      ctx.save();

      //lyspæra
      ctx.beginPath();
      ctx.moveTo(330, 240);
      ctx.arc(330, 260, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "yellow"; // lyset skrus på når vindmøllen roterer
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(190, 390);
      ctx.lineTo(190, 140);
      ctx.lineTo(210, 140);
      ctx.lineTo(210, 390);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "lightgrey";
      ctx.fill();
      //Rotasjonssirkel
      ctx.beginPath();
      ctx.arc(200, 140, 20, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "blue";
      ctx.fill();
      //Lyspæreboks
      ctx.beginPath();
      ctx.moveTo(210, 390);
      ctx.lineTo(300, 360);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(300, 360);
      ctx.lineTo(300, 300);
      ctx.lineTo(360, 300);
      ctx.lineTo(360, 360);
      ctx.moveTo(300, 360);
      ctx.lineTo(360, 360);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "lightblue";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(360, 360);
      ctx.lineTo(210, 390);
      ctx.closePath();
      ctx.stroke();
      
      //pluss 
      ctx.beginPath();    
      ctx.moveTo(310, 350);
      ctx.lineTo(310, 355); //(0,5)
      ctx.moveTo(310, 350); 
      ctx.lineTo(315, 350);  //(5,0) 
      ctx.moveTo(310, 350);  
      ctx.lineTo(305, 350); //(-5,0)
      ctx.moveTo(310, 350);  
      ctx.lineTo(310, 345); //(0,-5)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //minus
      ctx.beginPath();
      ctx.moveTo(350, 350);
      ctx.lineTo(355, 350); //(0,5)
      ctx.moveTo(350, 350);
      ctx.lineTo(345, 350); //(-5,0)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //lyspære
      ctx.beginPath();
      ctx.moveTo(330, 295);
      ctx.lineTo(335, 295);
      ctx.lineTo(325, 295);
      ctx.moveTo(330, 290);
      ctx.lineTo(337, 290);
      ctx.lineTo(323, 290);
      ctx.moveTo(330, 285);
      ctx.lineTo(340, 285);
      ctx.lineTo(320, 285);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();

      //det som skal rotere 
      const now = new Date().getMilliseconds();
      let speed = document.getElementById('speedCanvas').value;
      ctx.translate(200, 140); // punktet som skal roteres rundt
      ctx.rotate( (speed*now) / (Math.PI*200) );  //rotasjonshastinghet
      ctx.translate(-200, -140);
      //nord
      ctx.beginPath();
      ctx.moveTo(200, 120);
      ctx.lineTo(200, 10);
      ctx.lineTo(220, 90);
      ctx.lineTo(205, 120);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //syd
      ctx.beginPath();
      ctx.moveTo(200, 160);
      ctx.lineTo(200, 270);
      ctx.lineTo(180, 180);
      ctx.lineTo(195, 160);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //vest
      ctx.beginPath();
      ctx.moveTo(180, 140);
      ctx.lineTo(70, 140); // (-110, 0)
      ctx.lineTo(150, 120); // (80, -20)
      ctx.lineTo(180, 135);  // (30, -15)
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      //øst
      ctx.beginPath();
      ctx.moveTo(220, 140);
      ctx.lineTo(330, 140); 
      ctx.lineTo(250, 160);
      ctx.lineTo(220, 145);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.restore();
    }       
}

function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'; // trailing effekt
    ctx.fillRect(0, 0, 400, 400); // trailing effekt
    dynamisk.draw();
    raf = window.requestAnimationFrame(draw);
}


canvas.addEventListener('mouseover', (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', (e) => {
  window.cancelAnimationFrame(raf);
  // Tegne lyspæra pånytt som hvit og ikke gul
  ctx.beginPath();
  ctx.moveTo(330, 240);
  ctx.arc(330, 260, 20, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = "white"; 
  ctx.fill()
});


statisk.draw();




// Figur i SVG

var animate = function (objectToAnimate, animationPath, rotationSpeed){
  const lys = document.getElementById("lys");
  var fps = 60;
  var total = rotationSpeed / (1000/fps);
  var incrementSize = 360 / total
  var increment = 1;
  var timeout;

  var animer=function(){
    objectToAnimate.setAttribute("transform",`rotate(
      ${increment*incrementSize},
      ${animationPath.getAttribute('cx')},
      ${animationPath.getAttribute('cy')}
      )`);
    
    if (isSpinning){
      increment ++
      timeout = setTimeout(animer, 1000/fps);
      lys.setAttribute("fill", "yellow");
    } else {
      clearTimeout(timeout);
      lys.setAttribute("fill", "white");
    }
  }
  animer();
}

let isSpinning = false;
const nord = document.getElementById("nord");
const syd = document.getElementById("syd");
const vest = document.getElementById("vest");
const øst = document.getElementById("øst");
const runding = document.getElementById("runding");



function start() {
  if (!isSpinning) {
    let speed2 = document.getElementById('speedSVG').value;
    let rotationSpeed = (((6-speed2)*2000) / 3); 
    isSpinning = true;
    animate(nord, runding, rotationSpeed);
    animate(syd, runding, rotationSpeed);
    animate(vest, runding, rotationSpeed);
    animate(øst, runding, rotationSpeed);
  }
  
}
function stop() {
  let speed2 = document.getElementById('speedSVG').value;
  let rotationSpeed = (((6-speed2)*2000) / 3); 
  isSpinning = false;
  animate(nord, runding, rotationSpeed);
  animate(syd, runding, rotationSpeed);
  animate(vest, runding, rotationSpeed);
  animate(øst, runding, rotationSpeed);
  
}

