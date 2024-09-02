import { createConnection } from "mysql2/promise.js";

async function ConnectionDataBase(){
try {
        const connection = await createConnection({
            host: 'localhost',
            user: 'root',
            database: 'db_system',
        })
        return connection
} catch (error) {
    console.error("ERROR AL CONECTAR A LA BASE DE DATOS", error)
}
}

export {ConnectionDataBase}