// item a
const pokemon1 = {
    nome: "Bulbasauro",
    tipo: "Grama",
    nivel: 5,
}

console.log("item a:", pokemon1);

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
}

console.log("copia da 'a' com modificações:", pokemon2);

// item b
pokemon1.ataques = [];

pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisão: 100,
});

console.log("item b:\n", pokemon1.ataques);

// item c

pokemon2.ataques = [...pokemon1.ataques];
console.log("item c:\n", pokemon2.ataques);

//item d

pokemon1.ataques.push ({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
})

console.log("item d:\n", pokemon1.ataques);

//item e

pokemon2.ataques.push({
    nome: "Jato de água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
})

console.log("item e:\n", pokemon2.ataques);

//item f

console.log("objeto 1:",pokemon1);
console.log("objeto 2:", pokemon2);



