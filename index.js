let nickname = "Junior "
let xp = 1000
let nivel

switch(true){
    case xp <= 1000:
        nivel = " Ferro";
        break;
    case xp >= 1001 && xp <=2000:
        nivel = " Bronze";
        break;
    case xp >= 2001 && xp <= 3000:
        nivel = " Prata";
        break;
    case xp >= 3001 && xp <= 4000:
        nivel = " Ouro";
        break;
    case xp >= 4001 && xp <= 5000:
        nivel = "Platina"
        break;
    case xp >= 5001 && xp <= 6000:
        nivel = " Ascendente";
        break;
    case xp >= 6001 && xp <= 7000:
        nivel = " Imortal";
        break;
    case xp >= 7001 && xp <= 8000:
        nivel = " Radiante";
        break;

}

console.log(" O Herói nomeado " + nickname + "Está no nível " + nivel);
