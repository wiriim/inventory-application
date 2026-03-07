const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS items(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    image VARCHAR (255),
    category VARCHAR (255) REFERENCES categories(id)
);
`;

async function main(){
    console.log('Seeding...');
    const client = new Client({
        connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
    });
}