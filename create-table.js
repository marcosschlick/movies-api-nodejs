import sql from './db.js'

sql`DROP TABLE IF EXISTS videos;`.then(() => {
    console.log('Tabela excluída com sucesso!')
})

sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Tabela criada com sucesso')
})