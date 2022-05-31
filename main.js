function edad(age = prompt("Ingrese su edad")){
    parseInt(edad)
    if(edad >=18){
        document.write(`Eres mayor de edad tienes ${edad} años`)
    }
    else if(edad >0){
        document.write(`Eres menor de edad tienes ${edad} años`)    
    } else{
        document.write(`Ingresaste un valor invalido`)
    }
}
edad()