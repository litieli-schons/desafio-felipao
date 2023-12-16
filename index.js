let nomeHeroi = "Josivaldo"
let expHeroi = 10200
let nivelHeroi = ""

switch(true){
    case expHeroi < 1000:
        nivelHeroi = "Ferro"
        break

    case expHeroi > 1000 && expHeroi <= 2000:
        nivelHeroi = "Bronze"
        break

    case expHeroi > 2000 && expHeroi <= 5000:
        nivelHeroi = "Prata"
        break
    
    case expHeroi > 5000 && expHeroi <= 7000:
        nivelHeroi = "Ouro"
        break

    case expHeroi > 7000 && expHeroi <= 8000:
        nivelHeroi = "Platina"
        break

    case expHeroi > 8000 && expHeroi <= 9000:
        nivelHeroi = "Ascendente"
        break

    case expHeroi > 9000 && expHeroi <= 10000:
        nivelHeroi = "Imortal"
        break

    case expHeroi >= 10001:
        nivelHeroi = "Radiante"
        break
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi + "!")