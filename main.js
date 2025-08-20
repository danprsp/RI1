const ironMan={ //1
    nome :"Tony Stark",
    codinome : "Iron Man",
    armaPrincipal : "Lazer de Armadura",
    armaSecundaria : "Murro de armadura",
    velocidade : 99,
    forca : 80,
    resistencia : 90,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}

const hulk={ //2
    nome :"Bruce Banner",
    codinome : "Hulk",
    armaPrincipal : "Soco",
    armaSecundaria : "",
    velocidade : 90,
    forca : 100,
    resistencia : 95,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const thor={ //3
    nome :"Thor Odinson",
    codinome : "Thor",
    armaPrincipal : "Mjolnir",
    armaSecundaria : "Stormbreaker",
    velocidade : 97,
    forca : 99,
    resistencia : 100,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const capitaoAmerica={ //4
    nome :"Steve Rogers",
    codinome : "Capitão América",
    armaPrincipal : "Escudo Americano",
    armaSecundaria : "",
    velocidade : 85,
    forca : 75,
    resistencia : 80,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const homemAranha={ //5
    nome :"Peter Parker",
    codinome : "Homem Aranha",
    armaPrincipal : "Teia",
    armaSecundaria : "Soco",
    velocidade : 97,
    forca : 70,
    resistencia : 75,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const mercurio={ //6
    nome :"Pietro Maximoff",
    codinome : "Mercurio",
    armaPrincipal : "Soco Velocidade",
    armaSecundaria : "Murro de armadura",
    velocidade : 100,
    forca : 50,
    resistencia : 60,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const drEstranho={ //7
    nome :"Dr Estranho",
    codinome : "Stephen Strange",
    armaPrincipal : "Magia",
    armaSecundaria : "Joia do Tempo",
    velocidade : 90,
    forca : 96,
    resistencia : 97,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}
const feiticeraEscarlate={ //8
    nome :"Feiticeira Escarlate",
    codinome : "Wanda Maximoff",
    armaPrincipal : "Magia",
    armaSecundaria : "Magia",
    velocidade : 80,
    forca : 97,
    resistencia : 97,
    
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    },
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    },
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    },
    compararResistencia(personagemDesafiante){
        if(personagemDesafiante.resistencia>this.resistencia){return personagemDesafiante}
        else if(this.resistencia>personagemDesafiante.resistencia){return this}
        else{return "Empate" }
    }
}






function torneioDeForca(listaOri){
    lista= listaOri.slice();
    desafiante=lista.shift()
    for(heroi of lista){
        console.log("Desafiante1: \n "+desafiante.descricao())
        console.log("Desafiante2: \n"+heroi.descricao())
       if(desafiante.compararForca(heroi)!="Empate")
        desafiante=desafiante.compararForca(heroi)
       console.log(desafiante.nome + "  é o vencedor")
    }
    console.log("============================================================")
    console.log("O Personagem mais forte é "+desafiante.nome)
    console.log("============================================================")
}


function torneioDeResistencia(listaOri){
    lista= listaOri.slice();
    desafiante=lista.shift()
    for(heroi of lista){
        console.log("Desafiante1: \n "+desafiante.descricao())
        console.log("Desafiante2: \n"+heroi.descricao())
       if(desafiante.compararResistencia(heroi)!="Empate")
        desafiante=desafiante.compararResistencia(heroi)
       console.log(desafiante.nome + "  é o vencedor")
    }
    console.log("============================================================")
    console.log("O Personagem mais resistente é "+desafiante.nome)
    console.log("============================================================")
}

function torneioDeVelocidade(listaOri){
    lista= listaOri.slice();
    desafiante=lista.shift()
    for(heroi of lista){
        console.log("Desafiante1: \n "+desafiante.descricao())
        console.log("Desafiante2: \n"+heroi.descricao())
       if(desafiante.compararVelocidade(heroi)!="Empate")
        desafiante=desafiante.compararVelocidade(heroi)
       console.log(desafiante.nome + "  é o vencedor")
    }
    console.log("============================================================")
    console.log("O Personagem mais Rapido é "+desafiante.nome)
    console.log("============================================================")
}



function main(){

    var listaPersonagem = [ironMan, hulk, thor, capitaoAmerica,homemAranha,mercurio,drEstranho,feiticeraEscarlate]
    

    torneioDeVelocidade(listaPersonagem)
    
    torneioDeResistencia(listaPersonagem)

    torneioDeForca(listaPersonagem)

}


main()
