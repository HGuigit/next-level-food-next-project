import sql from 'better-sqlite3';


const db = sql('meals.db')

export async function getMeals() {

   //throw new Error("Loading meals failed");
   return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').bind(slug).get();
}