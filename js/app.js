let attempts_name = 0
let limit_name = 2

do{    
    dato_nombre();
    
    
    attempts_name++
} while(attempts_name<limit_name)



function dato_nombre (){
    let remaining = limit_name-attempts_name
    let nombre = prompt("Ingrese su nombre. Le quedan " +remaining+ "de " +limit_name+ " intentos." );
    if(nombre ==="" || !isNaN(nombre)){
    alert("No puede haber campos vacíos y no debe ser un número"); 
    }else{
        
        alert("Bienvenido "+nombre)
        attempts_name=limit_name;
    }
}

function calcularAlumnos(){
    let cantidadAlumnos = parseInt( prompt("Ingrese la cantidad de alumnos que hay en la division. Ojo que se que son menos de 15!"));

    if(cantidadAlumnos > 15){
        alert("Dije que se que son como mucho 15");
        calcularAlumnos();
        }else if (cantidadAlumnos <= 15 && cantidadAlumnos > 0){
            console.log("vamos a ver esas notas");
            let resultado = 0;
    for(let i = 0; i < cantidadAlumnos; i++){
        console.log("preguntar notas");
        let notas = parseInt(prompt(`Ingrese una nota del alumno #${i+1}. No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero)`));
        while(notas==="" || isNaN(notas) || notas==0){
            alert("No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero).");
            notas = parseInt(prompt(`Ingrese una nota del alumno #${i+1}. No puede haber campos vacíos y tiene que ser un número y distinto de 0(cero)`))
        }
        resultado += notas;
        }
    const total = resultado / cantidadAlumnos;
    alert("El promedio de las " + cantidadAlumnos + " notas es: " + total);
    alert("Adios");
}
}

function Cuentas(){
    let cuentas = confirm("¿Hacemos unas cuentas para pasar el rato?");
    if (cuentas == true){
        alert("vamos!!!!");
        calcularAlumnos();
}else{
    alert("Bajon, te creía bueno.");
    alert("Adios!")
    }
}
Cuentas();