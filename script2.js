// Lista de contactos como objetos

let contactos = [
    {
        id: 01,
        nombres: "Santiago",
        apellidos: "Rivera",
        telefono: 3123456789,
        ubicaciones: {
            ciudad: "Cali",
            direccion: "Cra. 1a #12-34"
        }
    },
    {
        id: 02,
        nombres: "Camila",
        apellidos: "Zuluaga",
        telefono: 3134567890,
        ubicaciones: {
            ciudad: "Medellin",
            direccion: "Calle 2 #1b-34"
    }
    },
    {
        id: 03,
        nombres: "Mateo",
        apellidos: "Marin",
        telefono: 3145678901,
        ubicaciones: {
            ciudad: "Manizales",
            direccion: "Cra. 14a #35-22"
    }
    },
    {
        id: 04,
        nombres: "Lina",
        apellidos: "Martinez",
        telefono: 3156789012,
        ubicaciones: {
            ciudad: "Barranquilla",
            direccion: "Calle 5 #45b-16"
    }
    },
    {
        id: 05,
        nombres: "Ronny",
        apellidos: "Castillo",
        telefono: 3167890123,
        ubicaciones: {
            ciudad: "Bogotá",
            direccion: "Cra. 13 #15-18"
    }
    }
]
console.log(contactos);

// Función añadir contacto
// Utilizo como parámetros los datos que contiene contactos, usando el método push añado el nuevo contacto, y cuando llamo la función le paso los datos a ingresar en cada uno

function añadirContacto(id, nombres, apellidos, telefono, ciudad, direccion){
    let json = { id: id, nombres: nombres , apellidos: apellidos, telefono: telefono, ubicaciones: {ciudad: ciudad, direccion: direccion}};
    contactos.push(json);
    return json;
}
// añadirContacto(06, "Dora", "Ospina", 3178901234, "Pereira", "Calle 35 #12a-80");
// console.log(contactos);


// Función borrar contacto
// Para ello le pasé el parámetro de nombre, utilicé un for para recorrer el arreglo, usando el método splice elimino un elemento, con el indice que obtengo del for y al llamar la función escribo el nombre del contacto que quiero eliminar

function borrarContacto(nombre){
    let indice = -1;
    for (let i = 0; i < contactos.length && indice == -1; i++){
        if(contactos[i].nombres === nombre){
            indice = i;
        }
    }
    if (indice!=-1){
        contactos.splice(indice,1);
    }
    return contactos; 
}
// borrarContacto("Lina");
// console.log(contactos);


// Función actualizar contacto
// Actualiza los datos del contacto por medio del id, se ponen los parámetros que hay en cada contacto y al llamar la función se reemplazan los datos según el id

function actualizarContacto(id, nombre, apellidos, telefono, ciudad, direccion){
    let indice = -1;
    for (let i = 0; i < contactos.length && indice == -1; i++){
        if(contactos[i].id === id){
            indice = i;
        }
    }
    if (indice!=-1){
        contactos[indice].nombres = nombre;
        contactos[indice].apellidos = apellidos;
        contactos[indice].telefono = telefono;
        contactos[indice].ubicaciones.ciudad = ciudad;
        contactos[indice].ubicaciones.direccion = direccion;
    }
    return contactos; 
}
actualizarContacto(02, "Natalia", "Delgado", 3189012345, "Popayan", "Calle 12 #34a-50");
console.log(contactos);