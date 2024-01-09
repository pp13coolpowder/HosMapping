const mariadb = require('mariadb');
require('dotenv').config();
const { HOSTNAME, USER, PASS, DATABASE} = process.env
const pool = mariadb.createPool({
    host: `${HOSTNAME}`,
    user: `${USER}`,
    password: `${PASS}`,
    database: `${DATABASE}`,
    connectionLimit:10,
});
exports.data = async () => {
    try {
        await pool.getConnection()
        console.log("database connected")
    }
    catch (err) {
        console.log(err)
    }
}
exports.queryMariadb = async (req, values) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query(req, values);
        conn.end()
        return rows
    } catch (err) {
        throw err;
    }
}
