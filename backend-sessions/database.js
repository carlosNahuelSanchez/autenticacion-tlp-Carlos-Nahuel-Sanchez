import { createConnection } from "mysql2/promise.js";

async function ConnectionDataBase(){
    const connection = await createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test_db',
    })
    return connection
}

export {ConnectionDataBase}