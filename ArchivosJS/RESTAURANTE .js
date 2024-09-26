db.restaurante.insertMany([
  { nombrePlato: "ajiaco pastuso", descripcion: "sopa espesa con pollo papa criolla mazorca y guasca servida con arroz y aguacate", precio: 22000, categoria: "platos principales", tiempoPreparacion: 60, calorias: 650, ingredientesPrincipales: "pollo papa criolla mazorca guasca", nivelPicante: "suave", disponibilidad: 15, popularidad: 85 },
  { nombrePlato: "cuy asado", descripcion: "cuy entero asado con especias tradicionales acompañado de papas y ensalada", precio: 35000, categoria: "platos principales", tiempoPreparacion: 90, calorias: 700, ingredientesPrincipales: "cuy papas especias ensalada", nivelPicante: "medio", disponibilidad: 10, popularidad: 70 },
  { nombrePlato: "empanadas de viento", descripcion: "empanadas rellenas de carne o queso fritas hasta dorarse", precio: 15000, categoria: "entradas", tiempoPreparacion: 30, calorias: 300, ingredientesPrincipales: "carne queso masa de empanada", nivelPicante: "suave", disponibilidad: 25, popularidad: 90 },
  { nombrePlato: "papas rellenas", descripcion: "papas cocidas rellenas de carne molida y especias acompañadas de salsa de tomate", precio: 18000, categoria: "entradas", tiempoPreparacion: 45, calorias: 400, ingredientesPrincipales: "papas carne molida especias salsa de tomate", nivelPicante: "medio", disponibilidad: 20, popularidad: 75 },
  { nombrePlato: "arroz con pollo", descripcion: "arroz cocido con pollo verduras y condimentos servido con ensalada", precio: 20000, categoria: "platos principales", tiempoPreparacion: 50, calorias: 550, ingredientesPrincipales: "arroz pollo verduras condimentos", nivelPicante: "suave", disponibilidad: 18, popularidad: 80 },
  { nombrePlato: "pescado frito", descripcion: "pescado frito acompañado de patacones y ensalada", precio: 24000, categoria: "platos principales", tiempoPreparacion: 40, calorias: 600, ingredientesPrincipales: "pescado platanos ensalada", nivelPicante: "suave", disponibilidad: 12, popularidad: 75 },
  { nombrePlato: "sancocho", descripcion: "sopa de carne con yuca platanos y mazorca ideal para compartir", precio: 28000, categoria: "platos principales", tiempoPreparacion: 70, calorias: 700, ingredientesPrincipales: "carne yuca platanos mazorca", nivelPicante: "suave", disponibilidad: 10, popularidad: 80 },
  { nombrePlato: "bandeja paisa", descripcion: "plato típico con frijoles arroz carne chorizo arepas y aguacate", precio: 35000, categoria: "platos principales", tiempoPreparacion: 80, calorias: 900, ingredientesPrincipales: "frijoles arroz carne chorizo arepa aguacate", nivelPicante: "suave", disponibilidad: 8, popularidad: 90 },
  { nombrePlato: "arepas de choclo", descripcion: "arepas dulces de maíz asadas y servidas con queso", precio: 10000, categoria: "entradas", tiempoPreparacion: 20, calorias: 250, ingredientesPrincipales: "maiz queso", nivelPicante: "suave", disponibilidad: 30, popularidad: 85 },
  { nombrePlato: "lechona", descripcion: "cerdo asado relleno servido con arepas y ensalada", precio: 60000, categoria: "platos principales", tiempoPreparacion: 120, calorias: 1200, ingredientesPrincipales: "cerdo arroz especias ensalada", nivelPicante: "medio", disponibilidad: 5, popularidad: 95 },
  { nombrePlato: "patacones con hogao", descripcion: "platanos verdes fritos acompañados de salsa de tomate y cebolla", precio: 12000, categoria: "entradas", tiempoPreparacion: 25, calorias: 300, ingredientesPrincipales: "platanos tomate cebolla", nivelPicante: "suave", disponibilidad: 20, popularidad: 80 },
  { nombrePlato: "tamal", descripcion: "masa de maíz rellena de carne cocida en hojas de plátano", precio: 15000, categoria: "platos principales", tiempoPreparacion: 60, calorias: 500, ingredientesPrincipales: "maiz carne especias", nivelPicante: "medio", disponibilidad: 15, popularidad: 75 },
  { nombrePlato: "choclo con queso", descripcion: "mazorca de maíz cocida servida con queso fresco", precio: 8000, categoria: "entradas", tiempoPreparacion: 15, calorias: 200, ingredientesPrincipales: "maiz queso", nivelPicante: "suave", disponibilidad: 25, popularidad: 85 },
  { nombrePlato: "mote de queso", descripcion: "sopa de maíz con queso y especias típica de la región", precio: 22000, categoria: "platos principales", tiempoPreparacion: 50, calorias: 600, ingredientesPrincipales: "maiz queso especias", nivelPicante: "suave", disponibilidad: 12, popularidad: 70 },
  { nombrePlato: "sopa de mondongo", descripcion: "sopa espesa de tripas con yuca y platanos", precio: 25000, categoria: "platos principales", tiempoPreparacion: 80, calorias: 700, ingredientesPrincipales: "tripas yuca platanos especias", nivelPicante: "medio", disponibilidad: 10, popularidad: 60 },
  { nombrePlato: "chicharron", descripcion: "panceta de cerdo frita crujiente y jugosa servida con arepas", precio: 18000, categoria: "platos principales", tiempoPreparacion: 45, calorias: 800, ingredientesPrincipales: "cerdo especias", nivelPicante: "suave", disponibilidad: 15, popularidad: 85 },
  { nombrePlato: "flan de leche", descripcion: "postre suave de leche huevo y caramelo ideal para el cierre de la comida", precio: 12000, categoria: "postres", tiempoPreparacion: 40, calorias: 300, ingredientesPrincipales: "leche huevo azucar caramelo", nivelPicante: "suave", disponibilidad: 20, popularidad: 90 },
  { nombrePlato: "torta de tres leches", descripcion: "pastel empapado en tres tipos de leche esponjoso y dulce", precio: 15000, categoria: "postres", tiempoPreparacion: 60, calorias: 400, ingredientesPrincipales: "leche azucar harina huevo", nivelPicante: "suave", disponibilidad: 18, popularidad: 85 },
  { nombrePlato: "mora con helado", descripcion: "helado de mora servido con frutas frescas", precio: 10000, categoria: "postres", tiempoPreparacion: 20, calorias: 250, ingredientesPrincipales: "mora helado", nivelPicante: "suave", disponibilidad: 30, popularidad: 80 },
  { nombrePlato: "bocadillo veleno", descripcion: "dulce tradicional de guayaba ideal para acompañar el cafe", precio: 7000, categoria: "postres", tiempoPreparacion: 15, calorias: 150, ingredientesPrincipales: "guayaba azucar", nivelPicante: "suave", disponibilidad: 40, popularidad: 85 },
  { nombrePlato: "sopa de camarones", descripcion: "sopa ligera con camarones y especias servida caliente", precio: 24000, categoria: "platos principales", tiempoPreparacion: 30, calorias: 500, ingredientesPrincipales: "camarones cebolla ajo", nivelPicante: "medio", disponibilidad: 15, popularidad: 75 },
  { nombrePlato: "pescado a la plancha", descripcion: "pescado fresco a la plancha servido con ensalada y arroz", precio: 27000, categoria: "platos principales", tiempoPreparacion: 25, calorias: 400, ingredientesPrincipales: "pescado ensalada arroz", nivelPicante: "suave", disponibilidad: 10, popularidad: 80 },
  { nombrePlato: "salpicon de frutas", descripcion: "mezcla de frutas frescas ideal para refrescarse", precio: 10000, categoria: "postres", tiempoPreparacion: 15, calorias: 150, ingredientesPrincipales: "frutas azucar", nivelPicante: "suave", disponibilidad: 50, popularidad: 90 },
  { nombrePlato: "tinto", descripcion: "cafe colombiano servido caliente con azucar", precio: 3000, categoria: "bebidas", tiempoPreparacion: 10, calorias: 50, ingredientesPrincipales: "cafe azucar", nivelPicante: "suave", disponibilidad: 100, popularidad: 95 },
  { nombrePlato: "aguapanela", descripcion: "bebida tradicional de panela servida caliente o fría", precio: 4000, categoria: "bebidas", tiempoPreparacion: 5, calorias: 100, ingredientesPrincipales: "panela agua", nivelPicante: "suave", disponibilidad: 80, popularidad: 85 },
  { nombrePlato: "refajo", descripcion: "mezcla de cerveza con aguapanela ideal para compartir", precio: 12000, categoria: "bebidas", tiempoPreparacion: 15, calorias: 300, ingredientesPrincipales: "cerveza aguapanela", nivelPicante: "suave", disponibilidad: 50, popularidad: 70 },
  { nombrePlato: "chicha", descripcion: "bebida fermentada de maíz tradicional de la región", precio: 5000, categoria: "bebidas", tiempoPreparacion: 20, calorias: 150, ingredientesPrincipales: "maiz agua", nivelPicante: "suave", disponibilidad: 30, popularidad: 60 },
  { nombrePlato: "agua de panela con limonn", descripcion: "refrescante bebida de panela y limón ideal para el calor", precio: 6000, categoria: "bebidas", tiempoPreparacion: 5, calorias: 80, ingredientesPrincipales: "panela agua limon", nivelPicante: "suave", disponibilidad: 40, popularidad: 75 },
  { nombrePlato: "hormigas culonas", descripcion: "insectos comestibles fritos, un manjar tradicional", precio: 15000, categoria: "aperitivos", tiempoPreparacion: 20, calorias: 250, ingredientesPrincipales: "hormigas", nivelPicante: "suave", disponibilidad: 10, popularidad: 90 },
  { nombrePlato: "empanadas de pipian", descripcion: "empanadas rellenas de salsa de maní y carne", precio: 12000, categoria: "entradas", tiempoPreparacion: 30, calorias: 350, ingredientesPrincipales: "masa carne pipian", nivelPicante: "medio", disponibilidad: 15, popularidad: 85 },
  { nombrePlato: "trucha a la plancha", descripcion: "trucha fresca a la plancha con especias locales", precio: 20000, categoria: "platos principales", tiempoPreparacion: 25, calorias: 400, ingredientesPrincipales: "trucha especias", nivelPicante: "suave", disponibilidad: 12, popularidad: 80 },
  { nombrePlato: "aguardiente", descripcion: "bebida alcohólica tradicional de caña", precio: 10000, categoria: "bebidas", tiempoPreparacion: 5, calorias: 500, ingredientesPrincipales: "caña", nivelPicante: "ninguno", disponibilidad: 20, popularidad: 95 },
  { nombrePlato: "bandeja paisa nariñense", descripcion: "plato combinado con carne, arroz, plátano y aguacate", precio: 30000, categoria: "platos principales", tiempoPreparacion: 40, calorias: 700, ingredientesPrincipales: "carne arroz platano aguacate", nivelPicante: "suave", disponibilidad: 8, popularidad: 75 },
  { nombrePlato: "sancocho de gallina", descripcion: "sopa espesa con gallina, plátano y yuca", precio: 22000, categoria: "platos principales", tiempoPreparacion: 60, calorias: 500, ingredientesPrincipales: "gallina platanoyuca", nivelPicante: "suave", disponibilidad: 10, popularidad: 80 },
  { nombrePlato: "arepas de maiz", descripcion: "arepas crujientes de maíz, ideales para acompañar", precio: 5000, categoria: "entradas", tiempoPreparacion: 20, calorias: 150, ingredientesPrincipales: "maiz", nivelPicante: "ninguno", disponibilidad: 25, popularidad: 70 },
  { nombrePlato: "cuy al horno", descripcion: "cuy asado al horno, sazonado con hierbas", precio: 35000, categoria: "platos principales", tiempoPreparacion: 90, calorias: 600, ingredientesPrincipales: "cuy hierbas", nivelPicante: "suave", disponibilidad: 5, popularidad: 85 },
  { nombrePlato: "mazamorra", descripcion: "postre de maíz con canela y panela", precio: 8000, categoria: "postres", tiempoPreparacion: 15, calorias: 200, ingredientesPrincipales: "maiz canela panela", nivelPicante: "ninguno", disponibilidad: 20, popularidad: 75 },
  { nombrePlato: "bocadillo veleño", descripcion: "dulce de guayaba y azúcar", precio: 6000, categoria: "postres", tiempoPreparacion: 10, calorias: 150, ingredientesPrincipales: "guayaba azucar", nivelPicante: "ninguno", disponibilidad: 30, popularidad: 80 }
]);
db.restaurante.find({ nombrePlato: { $eq: "ajiaco pastuso" } });
db.restaurante.find({ categoria: { $gt: "platos principales" } });
db.restaurante.find({ tiempoPreparacion: { $gte: 60 } });
db.restaurante.find({ precio: { $lt: 20000 } });
db.restaurante.find({ disponibilidad: { $lte: 15 } });
db.restaurante.find({ nivelPicante: { $ne: "suave" } });
db.restaurante.find({ categoria: { $in: ["platos principales", "postres"] } });
db.restaurante.find({ nombrePlato: { $nin: ["cuy asado", "lechona"] } });
db.restaurante.find({ ingredientesPrincipales: { $exists: true } });
db.restaurante.updateOne(
  { nombrePlato: "ajiaco pastuso" },  
    {
    $set: { 
      precio: 25000,                
      disponibilidad: 20           
    }
  }
);




