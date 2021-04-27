function operacion(a,b,c) {
 else if  (c== 1){
  console.log("estoy sumando")
  console.log("el resultado es", a+b)
}
else if (c== 2){
  console.log("estoy restando")
  console.log("el resulatdo es" a-b)
}
else if (c== 3){
  console.log("estoy multiplicando")
  console.log("el resultado es" a*b)
}
else if (c== 4){
  console.log("estoy dividiendo")
  console.log("el resultado es" a/b)
}

else{
  console.log("operacion no valida")
}

}

console.log("calculadora");

let continuar = "s";
while (continuar == "s")

{

numero1 =parseInt(prompt("diga el numero uno"))
numero2 =parseInt(prompt("diga el numero dos"))
operaciones = prompt("que operacion deseas haser sumar (1) ,restar (2) , multiplicar (3) , dividir (4) ")

operacion(numero1,numero2,operaciones)

continuar=prompt("desea continuar s/n")
}

console.log("fin del programa grasias")