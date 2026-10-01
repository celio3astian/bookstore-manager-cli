import { connection } from "./database/connection";
import { MenuPrincipal } from "./menus/MenuPrincipal";

async function main(): Promise<void> {
    try {
        await connection.query("SELECT 1");

        console.log("Conexão com o banco de dados realizada com sucesso.");

        const menu = new MenuPrincipal();
        menu.exibir();
    } catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error);
        await connection.end();
    }
}

main();