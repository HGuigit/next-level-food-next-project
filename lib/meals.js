import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify'
import xss from 'xss';

const db = sql('meals.db')

import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
      region: 'us-east-1'
});


export async function getMeals() {

   //throw new Error("Loading meals failed");
   return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').bind(slug).get();
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions); // Limpar possiveis links para cross site scripting attacks

    const extensionImg = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extensionImg}`

    const bufferedImage = await meal.image.arrayBuffer();

    db.prepare(`
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
        VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
      )
    `).run({
        ...meal,
        image: fileName
    });

    s3.putObject({
      Bucket: "bucket-next-app-test",
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: meal.image.type,
    });

}