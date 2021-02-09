function comparacion () {
    var valor1 = document.getElementById ("text1").value 
    var valor2 = document.getElementById ("text2").value
    var valor3 = document.getElementById ("text3").value
    var edad = Number(valor1) >= Number(valor2) >= Number(valor3);
    if (Number(valor1) == Number(valor2) && Number (valor3) == Number(valor1) )
  {
    document.getElementById("edades").innerHTML = "son iguales"

  }

else {

    document.getElementById("edades").innerHTML = "no son iguales"
}
}
