const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
    ataques:[]
}

const pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
    ataques:[]    
}
    
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

pokemon2.ataques = [...pokemon1.ataques]

pokemon1.ataques.push({
    nome: "Folha navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})

pokemon2.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "água",
    precisao: 100
})

console.log(pokemon1)
console.log(pokemon2)