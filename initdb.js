const sql = require("better-sqlite3");
const db = sql("meals.db");

const refeicoesFalsas = [
  {
    title: "Suculento Cheese Burger",
    slug: "suculento-cheese-burger",
    image: "burger.jpg",
    summary:
      "Um hambúrguer delicioso com um hambúrguer suculento e queijo derretido, servido em um pão macio.",
    instructions: `
      1. Prepare o hambúrguer:
         Misture 200g de carne moída com sal e pimenta. Forme um hambúrguer.

      2. Cozinhe o hambúrguer:
         Aqueça uma frigideira com um pouco de óleo. Cozinhe o hambúrguer por 2-3 minutos de cada lado, até dourar.

      3. Monte o hambúrguer:
         Torre metades do pão do hambúrguer. Coloque alface e tomate na metade de baixo. Adicione o hambúrguer cozido e cubra com uma fatia de queijo.

      4. Sirva:
         Complete a montagem com a parte superior do pão e sirva quente.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Curry Picante",
    slug: "curry-picante",
    image: "curry.jpg",
    summary:
      "Um curry rico e picante, infundido com especiarias exóticas e leite de coco cremoso.",
    instructions: `
      1. Pique os legumes:
         Corte sua escolha de legumes em pedaços pequenos.

      2. Refogue os legumes:
         Em uma frigideira com óleo, refogue os legumes até começarem a amolecer.

      3. Adicione a pasta de curry:
         Misture 2 colheres de sopa de pasta de curry e cozinhe por mais um minuto.

      4. Cozinhe com leite de coco:
         Despeje 500ml de leite de coco e deixe ferver. Deixe cozinhar por cerca de 15 minutos.

      5. Sirva:
         Aproveite este curry cremoso com arroz ou pão.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "Dumplings Caseiros",
    slug: "dumplings-caseiros",
    image: "dumplings.jpg",
    summary:
      "Dumplings macios recheados com carne e legumes salgados, cozidos no vapor até a perfeição.",
    instructions: `
      1. Prepare o recheio:
         Misture carne moída, legumes ralados e especiarias.

      2. Recheie os dumplings:
         Coloque uma colherada de recheio no centro de cada massa de dumpling. Molhe as bordas e dobre para selar.

      3. Cozinhe os dumplings no vapor:
         Arrume os dumplings em um vaporizador. Cozinhe no vapor por cerca de 10 minutos.

      4. Sirva:
         Aproveite esses dumplings quentes com um molho de sua escolha.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Macarrão com Queijo Clássico",
    slug: "macarrao-com-queijo-classico",
    image: "macncheese.jpg",
    summary:
      "Macarrão cremoso e queijo, um clássico reconfortante que sempre agrada a multidão.",
    instructions: `
      1. Cozinhe o macarrão:
         Cozinhe o macarrão de acordo com as instruções da embalagem até ficar al dente.

      2. Prepare o molho de queijo:
         Em uma panela, derreta a manteiga, adicione farinha e misture gradualmente o leite até engrossar. Adicione queijo ralado até derreter.

      3. Combine:
         Misture o molho de queijo com o macarrão escorrido.

      4. Asse:
         Transfira para um refratário, cubra com farinha de rosca e asse até dourar.

      5. Sirva:
         Sirva quente, decorado com salsinha se desejar.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "Pizza Autêntica",
    slug: "pizza-autentica",
    image: "pizza.jpg",
    summary:
      "Pizza artesanal com um molho de tomate azedo, coberturas frescas e queijo derretido.",
    instructions: `
      1. Prepare a massa:
         Amasse a massa de pizza e deixe crescer até dobrar de tamanho.

      2. Modele e adicione coberturas:
         Abra a massa, espalhe molho de tomate e adicione suas coberturas favoritas e queijo.

      3. Asse a pizza:
         Asse em um forno pré-aquecido a 220°C por cerca de 15-20 minutos.

      4. Sirva:
         Corte quente e aproveite com uma pitada de folhas de manjericão.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "schnitzel.jpg",
    summary:
      "Bife de vitela crocante e dourado, uma clássica iguaria austríaca.",
    instructions: `
      1. Prepare a vitela:
         Bata os bifes de vitela até ficarem com uma espessura uniforme.

      2. Empane a vitela:
         Cubra cada bife com farinha, mergulhe em ovos batidos e depois em migalhas de pão.

      3. Frite o schnitzel:
         Aqueça óleo em uma frigideira e frite cada schnitzel até dourar dos dois lados.

      4. Sirva:
         Sirva quente com uma fatia de limão e um acompanhamento de salada de batata ou vegetais verdes.
    `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
  {
    title: "Salada de Tomate Fresca",
    slug: "salada-de-tomate-fresca",
    image: "tomato-salad.jpg",
    summary:
      "Uma salada leve e refrescante com tomates maduros, manjericão fresco e um vinagrete tangy.",
    instructions: `
      1. Prepare os tomates:
         Corte os tomates frescos em fatias e arrume-os em um prato.
    
      2. Adicione ervas e temperos:
         Polvilhe manjericão picado, sal e pimenta sobre os tomates.
    
      3. Tempere a salada:
         Regue com azeite de oliva e vinagre balsâmico.
    
      4. Sirva:
         Aproveite esta salada simples e saborosa como acompanhamento ou refeição leve.
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of refeicoesFalsas) {
    stmt.run(meal);
  }
}

initData();