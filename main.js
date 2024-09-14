// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama
function setup() {
    createCanvas(400, 400);
    
  }
  function draw() {
    background(220);
  
    let campoIdade = createInput("15").value()
      let idade = campoIdade;
    let recomedacao = geraRecomendacao(idade);
    text(recomedacao, width / 2, height / 2);
  }
  
  function geraRecomendacao(idade){
    if(idade => 14){
       return"historia de pi";
       }
    else{
      return"ladroes de bicicleta";
    }
  }
  