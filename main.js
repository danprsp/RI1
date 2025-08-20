class personagem  {
   constructor(nome,codinome,armaPrincipal,armaSecundaria,velocidade,forca,resistencia){ 
    this.nome = nome;
    this.codinome = codinome;
    this.armaPrincipal = armaPrincipal;
    this.armaSecundaria = armaSecundaria;
    this.velocidade = velocidade;
    this.forca = forca;
    this.resistencia = resistencia;
    }
    descricao(){
        return "Nome do Personagem:" + this.nome+ "\n"
            + "Codinome do personagem:" + this.codinome + "\n"
            + "Arma principal:" + this.armaPrincipal + "\n"
            + "Arma secundaria:"+ this.armaSecundaria+ "\n"
            + "Nível de força:" + this.forca + "\n"
            + "Nível de velocidade:" + this.velocidade + "\n"
            + "Nível de resistencia:" + this.resistencia + "\n"
    };
    compararForca(personagemDesafiante){
        if(personagemDesafiante.forca>this.forca){return personagemDesafiante}
        else if(this.forca>personagemDesafiante.forca){return this}
        else{return "Empate" }
    }
    compararVelocidade(personagemDesafiante){
        if(personagemDesafiante.velocidade>this.velocidade){return personagemDesafiante}
        else if(this.velocidade>personagemDesafiante.velocidade){return this}
        else{return "Empate" }
    }
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
    const ironMan = new personagem("Tony Stark","Iron Man","Lazer de armadura","Murro de armadura",100,60,90);
    const hulk = new personagem("Bruce Banner","Hulk","Murro","",90,100,95);
    const thor = new personagem ("Thor Odinson", "Thor", "Mjolnir", "Stormbreaker",97,99,100);
    const capitaoAmerica = new personagem ("Steve Rogers", "Capitão America", "Escudo americano", "",85,75,80);
    const homemAranha = new personagem ("Peter Parker", "Homem Aranha", "Teia", "Soco",97,99,80)
    const mercurio = new personagem ("Pietro Maximoff ", "Mercurio", "Soco", "Velocidade", 150,80,80)
    const drEstranho = new personagem ("Dr Estranho ", "Stephen Strange", "Magia","Joia do Tempo",100,230,200)
    const feiticeraEscarlate = new personagem ("Feiticeira Escarlate", "Wanda Maximoff", "Magia", "Magia",100,230,200)

    var listaPersonagem = [ironMan, hulk, thor, capitaoAmerica,homemAranha,mercurio,drEstranho,fe]
    

    torneioDeVelocidade(listaPersonagem)
    
    torneioDeResistencia(listaPersonagem)

    torneioDeForca(listaPersonagem)

}




main();
