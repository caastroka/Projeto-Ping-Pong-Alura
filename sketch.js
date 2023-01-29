//bolinha 
let xBolinha = 300;
let yBolinha = 180;
let diametro = 22;
let raio = diametro / 2

//velocidadebolinha
let VelocidadexBolinha = 6;
let VelocidadeyBolinha = 6;
let comprimentoRaquete = 10;
let alturaRaquete = 80

//raquete
let xRaquete = 5;
let yRaquete = 150;

//raqueteOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu= false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Bolinha();
  velocidadeBolinha();
  movimentoolinha();   
  Raquete1(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  Raquete1(xRaqueteOponente, yRaqueteOponente);  
}

function Bolinha (){
  circle(xBolinha, yBolinha, diametro);
}
function velocidadeBolinha (){
  xBolinha += VelocidadexBolinha;
  yBolinha += VelocidadeyBolinha;
}
function movimentoolinha(){
 if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    
     VelocidadexBolinha *= -1
  }
    
    if (yBolinha + raio > height ||
       yBolinha - raio < 0){      
      VelocidadeyBolinha *= -1
    } 
}
function Raquete1 (x ,y){
  rect( x, y, comprimentoRaquete, alturaRaquete)
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
 }
if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
 }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){    
    
    VelocidadexBolinha *= -1;
  }
}
function colisaoMinhaRaqueteBiblioteca(){
  collideRectCircle(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
}
   