//Lista de contactos - 1


//1. Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

//Se crea un array con varios  contactos que contienen nombre y apellido

let contactos = ["Santiago Rivera", "Camila Zuluaga", "Mateo Marin", "Lina Martinez", "Ronny Castillo"];

console.log(contactos);


// //2. Crea una función para añadir un nuevo contacto a una lista

// //Sin verificación de que sea una cadena

//let nuevoContacto = prompt("Digite nombre y apellido del nuevo contacto");
// function añadirContacto() {
//     return contactos.push(prompt("Digite nombre y apellido del nuevo contacto"));
// }
// console.log(contactos);

//Con verificación de que sea una cadena
function añadirContacto() {
    let nuevoContacto = prompt("Digite nombre y apellido del nuevo contacto");
    while(!isNaN(nuevoContacto)){
        nuevoContacto = prompt("¡Debes digitar un nombre y un apellido!");
    }
    return contactos.push(nuevoContacto); 
}
añadirContacto();
console.log(contactos);


// //3. Crea una función para borrar un contacto existente de la lista

// //Eliminar contacto por índice

// function borrarContacto(){
//     let eliminarContacto = prompt("Digite el indice del contacto que desea eliminar (Solo numeros)");
//         while(isNaN(eliminarContacto)){
//             eliminarContacto = prompt("¡Debes digitar solo el número del índice! (0, 1, 2, 3...)");
//     }
//     return contactos.splice(eliminarContacto, 1); 
// }
// borrarContacto();
// console.log(contactos);

// Eliminar contacto por nombre

function borrarContacto(){
    let contactoAEliminar = prompt('Digite nombre y apellido que quiere eliminar');
    while(!isNaN(contactoAEliminar) && !contactos.includes(contactoAEliminar)){
        contactoAEliminar = prompt("¡Debes digitar el nombre y un apellido quiere eliminar correctamente!");
    }
    contactos =  contactos.filter(contacto => contacto != contactoAEliminar);
    return contactoAEliminar; 
}
borrarContacto();


// 4. Crea una función para imprimir en consola los contactos presentes en la lista

function imprimirContactos() {
    console.log(contactos);
}
imprimirContactos();

