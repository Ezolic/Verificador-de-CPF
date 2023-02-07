document.onkeypress = function(e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    return false;
  }
};

function verificarCPF() {
  let CPF = document.getElementById("cpf").value;

  let vetorCPF = []; // Vetor do CPF inteiro
  let vetorCPFVal = []; // Vetor dos numeros validadores do CPF digitado
  let vetorCPFNum1 = []; // Numeros do CPF multiplicados
  let vetorCPFNum2 = []; // Numeros do CPF + o numero verificador descoberto multiplicados
  let somaNum1 = 0; // Soma dos resultados das multiplicações do vetor
  let somaNum2 = 0; // Soma dos resultados das multiplicações do vetor com o numero descoberto 
  let aux = 10;
  let aux2 = 11;
  let validadorNum1 = ""; // 1° numero validador real
  let validadorNum2 = ""; // 2° numero validador real
  let textoValidador = ""; // Texto apresentando se é verdadeiro ou não
  let CPFRestante = "";


  if (CPF.length < 10) {

    CPFRestante = 11 - CPF.length;

    let icone = '<i class="bi bi-info-lg" style="color: #000;"></i>';
    document.getElementById("icon").innerHTML = icone;
    document.getElementById("text").innerHTML = "Digite os outros " + CPFRestante + " numeros do seu CPF.";


    let icon = document.getElementById("icon");
    let text = document.getElementById("text");

    icon.classList.remove("validoCor")
    text.classList.remove("valido")
    icon.classList.remove("invalidoCor")
    text.classList.remove("invalido")


    icon.classList.add("infoCor")
    text.classList.add("info")

  } else if (CPF.length == 10) {
    let icone = '<i class="bi bi-info-lg" style="color: #000;"></i>';
    document.getElementById("icon").innerHTML = icone;
    document.getElementById("text").innerHTML = "Digite o ultimo numero do seu CPF";


    let icon = document.getElementById("icon");
    let text = document.getElementById("text");

    icon.classList.remove("validoCor")
    text.classList.remove("valido")
    icon.classList.remove("invalidoCor")
    text.classList.remove("invalido")


    icon.classList.add("infoCor")
    text.classList.add("info")
  } else {


    for (contador = 0; contador < 9; contador++) // Organizou os vetores do CPF
    {
      vetorCPF.push(CPF.substring(contador, contador + 1));
    }

    for (contador = 9; contador < 11; contador++) // Organizou os vetores do CPF
    {
      vetorCPFVal.push(CPF.substring(contador, contador + 1));
    }

    for (contador = 0; contador < 9; contador++) // Multiplicou os 9 primeiros numeros do CPF
    {
      vetorCPFNum1[contador] = vetorCPF[contador] * aux;
      aux -= 1;
    }

    for (contador = 0; contador < 9; contador++) // Somou os resultados das multiplicações dos primeiros numeros do CPF
    {
      somaNum1 = somaNum1 + vetorCPFNum1[contador];
    }


    if (somaNum1 % 11 < 2) // Se baseando no numero do CPF digitado foi criado um Validador do 1° numero Validador
    {
      validadorNum1 = 0;

    } else {
      validadorNum1 = 11 - somaNum1 % 11;
    }

    vetorCPF[9] = validadorNum1;

    for (contador = 0; contador < 10; contador++) {
      vetorCPFNum2[contador] = vetorCPF[contador] * aux2;
      aux2 -= 1;
    }

    for (contador = 0; contador < 10; contador++) {
      somaNum2 = somaNum2 + vetorCPFNum2[contador];
    }

    if (somaNum2 % 11 < 2) {
      validadorNum2 = 0;

    } else {
      validadorNum2 = 11 - somaNum2 % 11;
    }

    if ((validadorNum1 == vetorCPFVal[0]) && (validadorNum2 == vetorCPFVal[1])) {


      let icone = '<i class="bi bi-check-lg"></i>';
      document.getElementById("icon").innerHTML = icone;
      document.getElementById("text").innerHTML = "Valido";


      let icon = document.getElementById("icon");
      let text = document.getElementById("text");


      icon.classList.remove("invalidoCor")
      text.classList.remove("invalido")
      icon.classList.remove("infoCor")
      text.classList.remove("info")

      icon.classList.add("validoCor")
      text.classList.add("valido")


      // textoValidador = "Valido";
    }
    else if (CPF.length == 0) {

      let icone = '<i class="bi bi-exclamation"></i>';
      document.getElementById("icon").innerHTML = icone;
      document.getElementById("text").innerHTML = "Invalido";


      let icon = document.getElementById("icon");
      let text = document.getElementById("text");

      icon.classList.remove("validoCor")
      text.classList.remove("valido")
      icon.classList.remove("infoCor")
      text.classList.remove("info")


      icon.classList.add("invalidoCor")
      text.classList.add("invalido")


      // textoValidador = "Invalido";
    }
    else {
      let icone = '<i class="bi bi-exclamation"></i>';
      document.getElementById("icon").innerHTML = icone;
      document.getElementById("text").innerHTML = "Invalido";


      let icon = document.getElementById("icon");
      let text = document.getElementById("text");

      icon.classList.remove("validoCor")
      text.classList.remove("valido")
      icon.classList.remove("infoCor")
      text.classList.remove("info")


      icon.classList.add("invalidoCor")
      text.classList.add("invalido")

    }
  }
}
