const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type VARCHAR (255)
);

CREATE TABLE IF NOT EXISTS items(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    category INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories(type) VALUES('Fire'), ('Water');

INSERT INTO items(name, category) VALUES('Charizard', 1);
`;

async function main(){
    console.log('Seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/inventoryapplication`
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Seeding Done.');
}

main();