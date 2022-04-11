/*
1. Palyginti du num a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
*/

const a = 189;
const b = 13;

if (a > b) {
    console.log(`${a} yra daugiau už ${b}`);
} else if (a < b) {
    console.log(`${a} yra mažiau už ${b}`);
} else if (a === b) {
    console.log('Skaiciai yra lygus.');
}
    
/*
2. Naudojant for ciklą, išvesti į konsolę num nuo 1 iki 10. (5 taškai)
*/

for(let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
3. Naudojant for ciklą, išvesti į konsolę num nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/

for(let i = 0; i <= 10; i+=2) {
    console.log(i);
}

/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius num nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/

function atsitiktinisNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
} for (let i = 0; i < 5; i++) {
     console.log(atsitiktinisNum(1,10));
 }

/*
5. Naudojant while ciklą, spausdinti atsitiktinius num nuo 1 iki 10. Paskutinis atspausdintas num turi būti 5. (7 taškai)
*/

let e = 0;
while (e !== 5) {
     e = Math.floor(Math.random() * 10);
     console.log(e)
}

/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/
console.log('----------------------')

function number(masyvas) {
    let biggestNumber = -Infinity;
    for (let i = 0; i < masyvas.letter; i++) {
        const num = masyvas[i];
        if (typeof num !== 'number' || !isFinite(num)) {
            continue;
        } if (num > biggestNumber) {
            biggestNumber = num;
        }
    } return biggestNumber;
}
console.log(number([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]))

console.log('-----MENTORIAUS BŪDAS-----')

let masyvas = [];
let max = 9;

for (let i = 0; i < rand(20,30); i++) {
    masyvas.push(rand(10, 30));
}
console.log(masyvas);

for (let i = 0; i < masyvas.length; i++){
    if (masyvas[i] > max){
        max = masyvas[i];
    }
}
console.log('max: ' + max);

/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/

const letter = ['A', 'B', 'C', 'D']
function count(letters) {
    const X = {};
    for (let i = 0; i < 100; i++) {
        const a = letters[i];
        X[a] = (X[a] || 0) + 1
    }
    return X;
}
console.log(count(letter))


const letters = ('A', 'B', 'C', 'D');
function generate(letter) {
    let result = ' ';
    const lettersletter = letters.letter;
    for ( let i = 0; i < 100; i++ ) {
        result += letters.charAt(Math.floor(Math.random() * lettersletter));
    }
    return result;
}

console.log(generate());

console.log('-----MENTORIAUS BŪDAS-----')

const raides = ['A', 'B', 'C', 'D'];

const masyvas7 = [];

for (let i = 0; i < 100; i++) {
    masyvas7.push(raides[rand(0,3)]);
}

console.log(masyvas7);

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < masyvas7.length; i++) {
    if (masyvas7[i] === 'A'){
        countA++;
    }
    if (masyvas7[i] === 'B'){
        countB++;
    }
    if (masyvas7[i] === 'C'){
        countC++;
    }
    if (masyvas7[i] === 'D'){
        countD++;
    }
}

console.log(`Raidžių masyve yra: A: ${countA}, B: ${countB}, C: ${countC}, D: ${countD}`);

/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas num, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/

console.log('-----MENTORIAUS BŪDAS-----')

function lygineSuma (a, b){
    if (typeof a === 'number' && typeof b === 'number'){
        let suma = a + b;
        if (suma % 2 === 0){
            return `Skaičių a ir b suma yra: ${suma}`;
        } else {
            return 'Skaičių suma nelyginė';
        }
    } else if (Array.isArray(a) && Array.isArray(b)){
        let suma = a.length + b.length;
        if (suma % 2 === 0){
            return `Masyvų  a ir b ilgių suma yra: ${suma}`;
        } else {
            return 'Masyvų ilgių suma nelyginė';
        }
    } else {
        return 'Pateikti neteisingi kintamieji';
    }
}

console.log(lygineSuma(2,8));
console.log(lygineSuma(2,7));
console.log(lygineSuma('2',8));
console.log(lygineSuma([2],8));
console.log(lygineSuma([2],[8]));
console.log(lygineSuma([2],[8, 1, '456', '1']));

/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra num. Funkcija turi grąžinti ar pateiktas num yra pirminis( pirminis
num yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/

console.log('-----MANO BŪDAS, BE MENTORIAUS NEVEIKIA-----')

const c = 17
function pirminisSkaicius(c) {
    if (typeof number === 'number') {
        let count = 0;
        for (let i = 2; i < c; i++) {
            if (c % i === 0) {
                count++
            } return `Skaičius yra pirminis`
        }
    } 
}
console.log(pirminisSkaicius(c));

console.log('-----MENTORIAUS BŪDAS-----')

function pirminisSkaicius(a) {
    if (typeof a !== 'number') {
        return 'Pateiktas kintamasis nėra skaičius';
    }
    let count = 0;
    for (let i = 1; i <= a; i++){
        if (a % i === 0) {
            count++;
        }
    }
    if (count < 2) {
        return 'Įvestas blogas skaičius';
    }
    if (count === 2) {
        return 'Įvestas skaičius yra pirminis';
    }
    if (count > 2) {
        return 'Įvestas skaičius yra sudėtinis';
    }
}

console.log(pirminisSkaicius('asdf'));
console.log(pirminisSkaicius([4,4,'sdf']));
console.log(pirminisSkaicius(0));
console.log(pirminisSkaicius(1));
console.log(pirminisSkaicius(2));
console.log(pirminisSkaicius(3));
console.log(pirminisSkaicius(15));
console.log(pirminisSkaicius(17));

// if (typeof a !== 'number' && a % 1 === 0 && a % a === 0) {
//     return 'Pateiktas kintamasis nėra skaičius';
// }

/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

console.log('-----MANO BŪDAS-----')
const numeris = [3, 7, 0, 6, 0, 6, 7, 0, 6, 4];
function telefonoNumeris(n) {
    return `Mano telefono numeris yra (${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}.`
} 
console.log(telefonoNumeris(numeris))

console.log('-----MENTORIAUS BŪDAS-----')
function telefonoNumeris(a){
    if (!Array.isArray(a)) {
        return 'Kintamasis nėra masyvas';
    }
    if (a.length !== 10) {
        return 'Masyvas yra netinkamo ilgio';
    }
    for (let i = 0; i < 10; i++) {
        if ( typeof a[i] !== 'number') {
            return 'Masyvo reikšmės turi būti skaičiai';
        }
    }
    return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log(telefonoNumeris(17));
console.log(telefonoNumeris('asdasd'));
console.log(telefonoNumeris([9,5,8,6,5,4,7,1,2]));
console.log(telefonoNumeris([9,5,8,6,5,4,7,1,2,1,8]));
console.log(telefonoNumeris([9,5,8,6,5,4,'7',1,2,1,8]));
console.log(telefonoNumeris([9,5,8,6,5,4,'7',1,2,1]));
console.log(telefonoNumeris([9,5,8,6,5,4,7,1,2,1]));