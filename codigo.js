console.log("funciona");

//muestra en consola el json de una api de jsonplaceholder
//utiliza metodo fethc
//utiliza async / await
//utiliza callback clasico 
const url = 'https://jsonplaceholder.typicode.com/users';

async function ejecutarEjemplos() {

    // ==========================================
    // APARTADO 1: ASYNC / AWAIT
    // ==========================================
    console.log("--- 1. ASYNC / AWAIT ---");
    try {
        const respuesta1 = await fetch(url);
        const datos1 = await respuesta1.json();
        console.log(datos1);
    } catch (error) {
        console.error(error);
    }

    // ==========================================
    // APARTADO 2: FETCH  (.then)
    // ==========================================
    console.log("\n--- 2. FETCH TRADICIONAL (.then) ---");
    await fetch(url)
        .then(respuesta2 => respuesta2.json())
        .then(datos2 => console.log(datos2))
        .catch(error => console.error(error));

    // ==========================================
    // APARTADO 3: CALLBACK 
    // ==========================================
    console.log("\n--- 3. CALLBACK CLÁSICO ---");

    // Definimos la función que usa el callback
    function peticionConCallback(callback) {
        fetch(url)
            .then(res => res.json())
            .then(data => callback(null, data))
            .catch(err => callback(err, null));
    }

    // Ejecutamos la función pasando el callback
    peticionConCallback((error, datos3) => {
        if (error) {
            console.error(error);
        } else {
            console.log(datos3);
        }
    });

}

// Ejecutar todo en orden
ejecutarEjemplos();