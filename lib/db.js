import mysql from "mysql2/promise";



export async function dbQuery({query, values}) {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    });
    try {
        const [data] = await connection.query(query, values);
        connection.end()
        return(data)
    } catch(error) {
        console.log(error)
    }
}

