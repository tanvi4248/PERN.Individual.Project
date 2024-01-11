const {client} =  require('pg');
const dbName = "tours";
const client = new Client(`postgres://localhost:5432/${dbName}`);

module.exports = client;