// Se declara la variable con las opciones de los meses
var meses = new Array ("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
// Se declara la variable con las opciones de días de la semana
var diasSemana = new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
// Se declara la variable f, para referirnos a la fecha general
var f=new Date();
// Se declaran la variables Horas y Minutos
var hrs = f.getHours();
var min = f.getMinutes();
// Se declara la variable con la condición para A.M y P.M
var ampm = hrs >= 12 ? 'PM' : 'AM';
// Convertir a formato de 12 horas
hrs = hrs % 12 || 12;
// Añadir un cero si los minutos son menores a 10
min = min < 10 ? '0' + min : min;
document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + "......." + hrs + ":" + min + ampm);