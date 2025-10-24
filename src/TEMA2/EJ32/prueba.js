function calcularNumerosPrimos() {
  let numerosPrimos = [];

  for (let i = 2; i < 10000; i++) {
    let esPrimo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo==true) {
      numerosPrimos.push(i);
    }
  }

  console.log("Números primos:", numerosPrimos);
  return numerosPrimos;
}




function calcularPalindromos(){
  let comprobacion=true;
  let arrayNumerosCapicua=[]
  for (let i=2;i<10000;i++){
    let array=[];

    comprobacion=true;

    let numeroString=i.toString();
    for(let j=0;j<numeroString.length;j++){
      array.push(numeroString.charAt(j));
    }

    for (let j = 0; j < array.length / 2; j++) {
      if (array[j] !== array[array.length - 1 - j]) {
        comprobacion = false;
        break;
      }
    }

    if(comprobacion==true){
      arrayNumerosCapicua.push(i)
    }
  }
  console.log("Números capicúa:", arrayNumerosCapicua);
  return arrayNumerosCapicua;
}



function calcularPalindromosYPrimos() {
  let numerosCapicuas = calcularPalindromos();
  let numerosPrimos = calcularNumerosPrimos();

  // Buscar números que estén en ambos arrays
  let conjunto = numerosCapicuas.filter(num => numerosPrimos.includes(num));

  console.log("🔢 Números que son capicúa y primos:", conjunto);
};

calcularPalindromosYPrimos()
  /*function calcularNumerosPrimos() {
  let numerosPrimos = [];

  for (let i = 2; i < 10000; i++) {
    let esPrimo = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo == true) {
      numerosPrimos.push(i);
    }
  }

  console.log("Números primos:", numerosPrimos);
  return numerosPrimos;
}


function calcularPalindromos() {
  let numerosCapicua = [];

  for (let i = 2; i < 10000; i++) {
    let numeroString = i.toString();
    let numeroInvertido = numeroString.split("").reverse().join("");

    if (numeroString === numeroInvertido) {
      numerosCapicua.push(i);
    }
  }

  console.log("Números capicúa:", numerosCapicua);
  return numerosCapicua;
}


function calcularPalindromosYPrimos() {
  let numerosCapicua = calcularPalindromos();
  let numerosPrimos = calcularNumerosPrimos();
  let conjunto = [];

  // Recorremos los capicúa
  for (let i = 0; i < numerosCapicua.length; i++) {
    // Recorremos los primos
    for (let j = 0; j < numerosPrimos.length; j++) {
      if (numerosCapicua[i] == numerosPrimos[j]) {
        conjunto.push(numerosCapicua[i]);
      }
    }
  }

  console.log("Números que son capicúa y primos:", conjunto);
  console.log("Cantidad total:", conjunto.length);
}

calcularPalindromosYPrimos();
*/