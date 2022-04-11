// 1ª ARRAY - Linhas de Ônibus

linhasDeOnibus = ["linha1", "linha2", "linha3", "linha4", "linha5", "linha6"];


function printArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }
  }
  
  printArray(linhasDeOnibus);

  //Push
 function addOnibus (){
     linhasDeOnibus.push("linha7", "linha8");
     console.log('Adiciona Linha 7 e 8', linhasDeOnibus);
 }

//Unshift
function addLinhaEspecial (){ 
    linhasDeOnibus.unshift("linha Especial");
    console.log('Adiciona a Linha Especial no ínicio da array', linhasDeOnibus);
}

//Shift
function removerLinhaEspecial (){
    linhasDeOnibus.shift();
    console.log('Remover Linha Especial', linhasDeOnibus);
}

//Splice
function removerLinhas (){
    console.log('Linhas Atuais: ', linhasDeOnibus);
    linhasDeOnibus.splice(4, 2);
    console.log('Depois de remover: ', linhasDeOnibus);
}

addOnibus ();
addLinhaEspecial ();
removerLinhaEspecial ();
removerLinhas();


// 2ª ARRAY - Linhas de Metrô
/*O distrito B é o principal ponto da cidade, por isso é usado como estação central para as linhas do distrito A e C. 

Distrito A (verde) Linhas 1,3 e 5 - ímpares

Distrito C (Vermelho) Linhas 2, 4 e 6 - Pares
*/

linhasDeMetro = [1,2,3,4,5,6];

function printArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }
  }

// Some e Every

printArray (linhasDeMetro);

function someOrEvery (){
    const linha = x => x % 2 === 0;

    console.log('Todas as linhas são B-A: ', linhasDeMetro.every(linha));
    console.log('Pelo menos uma linha é B-C', linhasDeMetro.some(linha));
}

// For Each

function forEachh (){
    linhasDeMetro.forEach(x => console.log(`Linha B-C: ${x} % 2 === 0`, x % 2 === 0));
}

// Map

function mapp (){
    const linha = x => x % 2 === 0;
    console.log('numbers.map(isEven)', linhasDeMetro.map(linha));
}

//Filter

function linhasBC (){
    const linha = x => x % 2 === 0;
    console.log('Linhas B-C', linhasDeMetro.filter(linha));
}


function linhasBA (){
    const linha = x => x % 2 != 0;
    console.log('Linhas B-A', linhasDeMetro.filter(linha));
}

// Reduce

function reducee (){
console.log('LinhasDeMetro.reduce', linhasDeMetro.reduce((previous, current) => previous + current));
}

// Find

function findBA (){
    const linha = x => x % 2 != 0;
    console.log('FindBA', linhasDeMetro.find(linha));
}

function findBC (){
    const linha = x => x % 2 === 0;
    console.log('FindBC', linhasDeMetro.find(linha));
}

// Find Index

function findIndexBC (){
    const linha = x => x % 2 === 0;
    console.log('FindIndexBC', linhasDeMetro.find(linha));
}

// For Of Loop

function forOfLoop () {
    for (const x of linhasDeMetro) {
        console.log(`for..of loop: ${x} % 2 === 0`, x % 2 === 0 ? 'BC' : 'BA');
}
}
someOrEvery (linhasDeMetro);
forEachh (linhasDeMetro);
mapp (linhasDeMetro);
linhasBC (linhasDeMetro);
linhasBA (linhasDeMetro);
reducee (linhasDeMetro);
findBA (linhasDeMetro);
findBC (linhasDeMetro);
findIndexBC (linhasDeMetro);
forOfLoop (linhasDeMetro);


//Array 3 - Distritos

distritos = ["Distrito A", "Distrito B", "Distrito C", "Distrito D", "Distrito E"];
distritosSecundarios = ["Distrito F", "Distrito G"];

function printArray(myArray) {
    for (let i = 0; i < myArray.length; i++) {
      console.log(myArray[i]);
    }
  }

// Concat 

function concatt(){
    console.log (distritos.concat(distritosSecundarios));
}

// Fill

function filll () {
    distritos.fill("Zona Comercial", 3);
    console.log (distritos);
}


printArray (distritos);
concatt(distritos);
filll(distritos);


//Array 4

doentes = [31,52,32,10,15,1,80];
medicos = [20,12,15,5,10,7,28];
hospital = [doentes, medicos];

//Iterator

function iterator1 (){
    let iterator = doentes[Symbol.iterator]();
    console.log('Valor P.0', iterator.next().value); 
    console.log('Valor P.1', iterator.next().value); 
    console.log('Valor P.2', iterator.next().value);
}

//Entries

function entries1 (){
    let aEntries = doentes.entries(); 
    console.log('aEntries.next().value', aEntries.next().value)
    console.log('aEntries.next().value', aEntries.next().value)
    console.log('aEntries.next().value', aEntries.next().value)
}

//Array 2d
console.log(hospital);


printArray (doentes);
iterator1(doentes);
entries1(doentes);


