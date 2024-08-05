//Desafio do felipão#02 Ranqueamento de partidas online!
let score = winrate(9,100) // Armazena o valor de vitorias e derrotas

function winrate(lose,win){ // Começo da função, onde cálculei a diferença entre ganhos e perdas
    let calculo = win - lose
    return calculo

}

function rank(){ // Estrutura de decisão, onde o valor armazenado em score irá retornar o nível do jogador
    switch (true){
    case score<=10:
        return "Ferro";
    case score>=11, score<=20:
        return "Bronze";
    case score>=21, score<=50:
        return "Prata";
    case score>=51,score<=80:
        return "Ouro";
    case score>=81, score<=90:
        return "Diamante";
    case score>=91, score <=100:
        return "Lendário";
    case score>=101:
        return "Imortal";
    
    }
}
console.log(`O Herói tem de saldo de ${score} está no nível ${rank(score)}`) // mensagem de saída