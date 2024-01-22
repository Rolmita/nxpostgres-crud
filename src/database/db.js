import { sql } from '@vercel/postgres';

async function crearTabla() {
    try {
        const art = await sql`
        CREATE TABLE IF NOT EXISTS articulos (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio DECIMAL(10,2),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;
        const pro = await sql`
        CREATE TABLE IF NOT EXISTS proveedores (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            telefono CHAR(9) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;
        console.log(art, pro);
    } catch (error) {
        console.log(error);
    }
}

crearTabla();
