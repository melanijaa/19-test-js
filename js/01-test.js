/*
1. Palyginti du num a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
*/
console.log('----------------------')
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
console.log('----------------------')
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
3. Naudojant for ciklą, išvesti į konsolę num nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/
console.log('----------------------')
for(let i = 0; i <= 10; i+=2) {
    console.log(i);
}

/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius num nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/
console.log('----------------------')
function atsitiktinisNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
} for (let i = 0; i < 5; i++) {
     console.log(atsitiktinisNum(1,10));
 }

/*
5. Naudojant while ciklą, spausdinti atsitiktinius num nuo 1 iki 10. Paskutinis atspausdintas num turi būti 5. (7 taškai)
*/
console.log('----------------------')
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

/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas num, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/

/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra num. Funkcija turi grąžinti ar pateiktas num yra pirminis( pirminis
num yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/

const c = 1234
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

/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

console.log('----------------------')
const numeris = [3, 7, 0, 6, 0, 6, 7, 0, 6, 4];
function telefonoNumeris(n) {
    return `Mano telefono numeris yra (${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}.`
} 
console.log(telefonoNumeris(numeris))