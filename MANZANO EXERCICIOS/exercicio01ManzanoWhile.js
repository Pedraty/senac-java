function teste(){
    var numero = parseFloat(prompt("Digite um número"));
    var contadora = 0;

    while (contadora<11){
        document.write(numero+" x "+contadora+" = "+contadora*numero+"</br>");
        contadora++;
    }
}