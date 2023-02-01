//bolinha 
let xBolinha = 300;
let yBolinha = 180;
let diametro = 13;
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
let VelocidadeyOponente;

let colidiu= false;

//placar do jogo
let meusPontos = 0;
let pontosdoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  Bolinha();
  velocidadeBolinha();
  movimentoBolinha();   
  Raquete1(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  Raquete1(xRaqueteOponente, yRaqueteOponente);  
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);   incluiPlacar();
  marcaPonto();
}

function Bolinha (){
  circle(xBolinha, yBolinha, diametro);
}
function velocidadeBolinha (){
  xBolinha += VelocidadexBolinha;
  yBolinha += VelocidadeyBolinha;
}
function movimentoBolinha(){
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
  rect(x, y, comprimentoRaquete, alturaRaquete)
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
    raquetada.play();
  }
}
function verificaColisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    VelocidadexBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
     VelocidadeyOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
     yRaqueteOponente += VelocidadeyOponente
   }

function incluiPlacar(){
     stroke(255);
     textAlign(CENTER);
     textSize(16);
     fill(color(255, 140, 0))
     rect(150, 10, 40, 20);
     fill(255);
     text(meusPontos, 170, 26);
     fill(color(255, 140, 0))
     rect(450, 10, 40, 20);
     fill(255);
     text(pontosdoOponente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosdoOponente += 1;
    ponto.play();
  }
}