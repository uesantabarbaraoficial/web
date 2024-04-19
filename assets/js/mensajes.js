function presentacion(texto){
    let arr=texto.split("");
    i=0;
   let intervalo= setInterval(function(){
      if(i==arr.length-1){ 
        document.getElementById("titulo").innerHTML+=arr[i];
        clearInterval(intervalo);} 
      else {
      if(arr[i]==" "){
       document.getElementById("titulo").innerHTML+=arr[i];
       document.getElementById("titulo").innerHTML+=arr[i+1];
        i+=2;
      }else{
      document.getElementById("titulo").innerHTML+=arr[i];
      i++;
        }
      }
    },10); 
  }
  
  presentacion("¡Hola! ¡Bienvenid@s al Portal Web de la UE Santa Bárbara! Soy Max y junto a mi compañera Zoe, somos tus guías virtuales. Te acompañaremos en una experiencia educativa, novedosa, interactiva y de desarrollo colectivo, donde te mostraremos las características de nuestra web escolar y atenderemos tus solicitudes de manera inmediata y precisa. Sin más preámbulos, sígueme y te muestro nuestra institución.");