db.productos.insertMany([
  { nombreProducto: "leche alpina", descripcion: "leche de vaca entera alpina", precio: 2500, categoria: "lacteos", disponibilidadInventario: 20, marca: "alpina", numeroModelo: 1, peso: "1 litro", unidadesVendidas: 10, valoracionPromedio: 4.5 },
  { nombreProducto: "queso campesino", descripcion: "queso fresco colombiano", precio: 3000, categoria: "lacteos", disponibilidadInventario: 8, marca: "colanta", numeroModelo: 2, peso: "500g", unidadesVendidas: 4, valoracionPromedio: 4.7 },
  { nombreProducto: "yogur alpina", descripcion: "yogur de fresa alpina", precio: 1500, categoria: "lacteos", disponibilidadInventario: 15, marca: "alpina", numeroModelo: 3, peso: "150g", unidadesVendidas: 10, valoracionPromedio: 4.3 },
  { nombreProducto: "arepas de maiz", descripcion: "arepas de maiz pre-cocidas", precio: 1000, categoria: "panaderia", disponibilidadInventario: 30, marca: "arepas de antioquia", numeroModelo: 4, peso: "400g", unidadesVendidas: 20, valoracionPromedio: 4.2 },
  { nombreProducto: "pan de yuca", descripcion: "pan artesanal de yuca", precio: 1200, categoria: "panaderia", disponibilidadInventario: 25, marca: "pan nariñense", numeroModelo: 5, peso: "500g", unidadesVendidas: 12, valoracionPromedio: 4.4 },
  { nombreProducto: "mantequilla colanta", descripcion: "mantequilla con sal colanta", precio: 1800, categoria: "lacteos", disponibilidadInventario: 20, marca: "colanta", numeroModelo: 6, peso: "250g", unidadesVendidas: 9, valoracionPromedio: 4.6 },
  { nombreProducto: "jugo de maracuya", descripcion: "jugo natural de maracuya", precio: 2000, categoria: "bebidas", disponibilidadInventario: 12, marca: "frutal", numeroModelo: 7, peso: "1 litro", unidadesVendidas: 6, valoracionPromedio: 4.0 },
  { nombreProducto: "cafe juan valdez", descripcion: "cafe tostado molido", precio: 3500, categoria: "bebidas", disponibilidadInventario: 10, marca: "juan valdez", numeroModelo: 8, peso: "500g", unidadesVendidas: 8, valoracionPromedio: 4.8 },
  { nombreProducto: "galletas de bocadillo", descripcion: "galletas rellenas de bocadillo", precio: 800, categoria: "dulces", disponibilidadInventario: 50, marca: "ricuras", numeroModelo: 9, peso: "250g", unidadesVendidas: 30, valoracionPromedio: 4.1 },
  { nombreProducto: "avena alpina", descripcion: "avena lista para beber", precio: 2200, categoria: "cereales", disponibilidadInventario: 18, marca: "alpina", numeroModelo: 10, peso: "1 litro", unidadesVendidas: 11, valoracionPromedio: 4.7 },
  { nombreProducto: "arroz roa", descripcion: "arroz blanco roa", precio: 2800, categoria: "granos", disponibilidadInventario: 14, marca: "roa", numeroModelo: 11, peso: "1kg", unidadesVendidas: 5, valoracionPromedio: 4.5 },
  { nombreProducto: "frijoles", descripcion: "frijoles bola roja", precio: 3000, categoria: "granos", disponibilidadInventario: 22, marca: "el paisa", numeroModelo: 12, peso: "1kg", unidadesVendidas: 13, valoracionPromedio: 4.4 },
  { nombreProducto: "aceite vegetal", descripcion: "aceite de cocina vegetal", precio: 3500, categoria: "aceites", disponibilidadInventario: 16, marca: "premier", numeroModelo: 13, peso: "1 litro", unidadesVendidas: 9, valoracionPromedio: 4.2 },
  { nombreProducto: "azucar diana", descripcion: "azucar blanca refinada", precio: 1800, categoria: "azucares", disponibilidadInventario: 28, marca: "diana", numeroModelo: 14, peso: "1kg", unidadesVendidas: 14, valoracionPromedio: 4.6 },
  { nombreProducto: "pasta doria", descripcion: "pasta de trigo larga", precio: 2500, categoria: "pasta", disponibilidadInventario: 12, marca: "doria", numeroModelo: 15, peso: "500g", unidadesVendidas: 7, valoracionPromedio: 4.3 },
  { nombreProducto: "cereal zucaritas", descripcion: "cereal de maiz azucarado", precio: 2800, categoria: "cereales", disponibilidadInventario: 22, marca: "kellogg's", numeroModelo: 16, peso: "500g", unidadesVendidas: 18, valoracionPromedio: 4.7 },
  { nombreProducto: "gaseosa postobon", descripcion: "gaseosa sabor manzana", precio: 1800, categoria: "bebidas", disponibilidadInventario: 22, marca: "postobon", numeroModelo: 17, peso: "1.5 litros", unidadesVendidas: 18, valoracionPromedio: 4.0 },
  { nombreProducto: "queso ahumado", descripcion: "queso ahumado artesanal", precio: 3500, categoria: "lacteos", disponibilidadInventario: 8, marca: "colanta", numeroModelo: 18, peso: "500g", unidadesVendidas: 4, valoracionPromedio: 4.8 },
  { nombreProducto: "leche en polvo", descripcion: "leche en polvo entera", precio: 5000, categoria: "lacteos", disponibilidadInventario: 15, marca: "alpina", numeroModelo: 19, peso: "400g", unidadesVendidas: 10, valoracionPromedio: 4.9 },
  { nombreProducto: "cafe del valle", descripcion: "cafe tostado suave", precio: 3000, categoria: "bebidas", disponibilidadInventario: 25, marca: "del valle", numeroModelo: 20, peso: "250g", unidadesVendidas: 20, valoracionPromedio: 4.4 },
  { nombreProducto: "mermelada de guayaba", descripcion: "mermelada de guayaba", precio: 2200, categoria: "dulces", disponibilidadInventario: 12, marca: "san jorge", numeroModelo: 21, peso: "500g", unidadesVendidas: 5, valoracionPromedio: 4.3 },
  { nombreProducto: "harina de trigo", descripcion: "harina para reposteria", precio: 1800, categoria: "panaderia", disponibilidadInventario: 30, marca: "doña arepa", numeroModelo: 22, peso: "1kg", unidadesVendidas: 15, valoracionPromedio: 4.5 },
  { nombreProducto: "galletas saltin noel", descripcion: "galletas saladas", precio: 1500, categoria: "dulces", disponibilidadInventario: 40, marca: "saltin noel", numeroModelo: 23, peso: "300g", unidadesVendidas: 25, valoracionPromedio: 4.6 },
  { nombreProducto: "salsa de tomate", descripcion: "salsa de tomate tradicional", precio: 1700, categoria: "salsas", disponibilidadInventario: 20, marca: "la constancia", numeroModelo: 24, peso: "400g", unidadesVendidas: 12, valoracionPromedio: 4.7 },
  { nombreProducto: "vinagre blanco", descripcion: "vinagre destilado", precio: 1300, categoria: "salsas", disponibilidadInventario: 25, marca: "casa lucia", numeroModelo: 25, peso: "500ml", unidadesVendidas: 15, valoracionPromedio: 4.5 },
  { nombreProducto: "jugo de lulo", descripcion: "jugo natural de lulo", precio: 2200, categoria: "bebidas", disponibilidadInventario: 18, marca: "frutal", numeroModelo: 26, peso: "1 litro", unidadesVendidas: 7, valoracionPromedio: 4.6 },
  { nombreProducto: "panela", descripcion: "panela organica en pastilla", precio: 3200, categoria: "endulzantes", disponibilidadInventario: 40, marca: "la molienda", numeroModelo: 27, peso: "500g", unidadesVendidas: 22, valoracionPromedio: 4.5 },
  { nombreProducto: "aguardiente antioqueno", descripcion: "licor tradicional colombiano", precio: 25000, categoria: "licores", disponibilidadInventario: 15, marca: "fabrica de licores de antioquia", numeroModelo: 28, peso: "750ml", unidadesVendidas: 8, valoracionPromedio: 4.7 },
  { nombreProducto: "chocolate corona", descripcion: "chocolate de mesa tradicional", precio: 4500, categoria: "bebidas", disponibilidadInventario: 30, marca: "corona", numeroModelo: 29, peso: "500g", unidadesVendidas: 18, valoracionPromedio: 4.6 },
  { nombreProducto: "bocadillo veleño", descripcion: "dulce de guayaba tradicional", precio: 3800, categoria: "dulces", disponibilidadInventario: 25, marca: "el veleño", numeroModelo: 30, peso: "300g", unidadesVendidas: 14, valoracionPromedio: 4.8 },
  { nombreProducto: "arequipe alpina", descripcion: "dulce de leche cremoso", precio: 4200, categoria: "lacteos", disponibilidadInventario: 20, marca: "alpina", numeroModelo: 31, peso: "250g", unidadesVendidas: 12, valoracionPromedio: 4.9 },
  { nombreProducto: "achiras", descripcion: "snack crocante de maiz", precio: 2800, categoria: "snacks", disponibilidadInventario: 35, marca: "achiras del huila", numeroModelo: 32, peso: "150g", unidadesVendidas: 20, valoracionPromedio: 4.4 },
  { nombreProducto: "arepa de choclo", descripcion: "arepa de maiz tierno congelada", precio: 3500, categoria: "panaderia", disponibilidadInventario: 18, marca: "la antioquena", numeroModelo: 33, peso: "400g", unidadesVendidas: 9, valoracionPromedio: 4.3 },
  { nombreProducto: "aji", descripcion: "salsa picante colombiana", precio: 1800, categoria: "salsas", disponibilidadInventario: 40, marca: "fruco", numeroModelo: 34, peso: "200ml", unidadesVendidas: 25, valoracionPromedio: 4.5 },
  { nombreProducto: "obleas", descripcion: "obleas para rellenar", precio: 1500, categoria: "dulces", disponibilidadInventario: 50, marca: "obleas de antano", numeroModelo: 35, peso: "100g", unidadesVendidas: 30, valoracionPromedio: 4.2 },
  { nombreProducto: "gelatina boggy", descripcion: "gelatina de pata saborizada", precio: 1200, categoria: "postres", disponibilidadInventario: 45, marca: "boggy", numeroModelo: 36, peso: "120g", unidadesVendidas: 28, valoracionPromedio: 4.0 },
  { nombreProducto: "chocoramo", descripcion: "ponque cubierto de chocolate", precio: 2000, categoria: "dulces", disponibilidadInventario: 60, marca: "ramo", numeroModelo: 37, peso: "70g", unidadesVendidas: 40, valoracionPromedio: 4.8 },
  { nombreProducto: "mani moto", descripcion: "mani salado", precio: 1000, categoria: "snacks", disponibilidadInventario: 70, marca: "moto", numeroModelo: 38, peso: "50g", unidadesVendidas: 45, valoracionPromedio: 4.3 },
  { nombreProducto: "crema de whisky", descripcion: "licor cremoso de whisky", precio: 28000, categoria: "licores", disponibilidadInventario: 12, marca: "antano", numeroModelo: 39, peso: "750ml", unidadesVendidas: 6, valoracionPromedio: 4.6 },
  { nombreProducto: "natilla", descripcion: "mezcla para natilla navidena", precio: 3800, categoria: "postres", disponibilidadInventario: 30, marca: "la abuela", numeroModelo: 40, peso: "300g", unidadesVendidas: 15, valoracionPromedio: 4.4 },
  { nombreProducto: "buñuelos", descripcion: "mezcla para bunuelos", precio: 4000, categoria: "panaderia", disponibilidadInventario: 25, marca: "el trigal", numeroModelo: 41, peso: "300g", unidadesVendidas: 18, valoracionPromedio: 4.5 },
  { nombreProducto: "mazamorra", descripcion: "mazamorra antioquena en polvo", precio: 3500, categoria: "postres", disponibilidadInventario: 20, marca: "la finca", numeroModelo: 42, peso: "250g", unidadesVendidas: 10, valoracionPromedio: 4.2 },
  { nombreProducto: "condimentos el rey", descripcion: "mezcla de especias colombianas", precio: 2800, categoria: "condimentos", disponibilidadInventario: 40, marca: "el rey", numeroModelo: 43, peso: "100g", unidadesVendidas: 22, valoracionPromedio: 4.7 },
  { nombreProducto: "alpinito", descripcion: "postre lacteo para ninos", precio: 1800, categoria: "lacteos", disponibilidadInventario: 50, marca: "alpina", numeroModelo: 44, peso: "45g", unidadesVendidas: 35, valoracionPromedio: 4.6 },
  { nombreProducto: "chorizo santarrosano", descripcion: "chorizo tradicional colombiano", precio: 6500, categoria: "carnes", disponibilidadInventario: 15, marca: "la finca", numeroModelo: 45, peso: "500g", unidadesVendidas: 8, valoracionPromedio: 4.8 },
  { nombreProducto: "agua cristal", descripcion: "agua mineral sin gas", precio: 1500, categoria: "bebidas", disponibilidadInventario: 100, marca: "postobon", numeroModelo: 46, peso: "1.5 litros", unidadesVendidas: 60, valoracionPromedio: 4.5 },
  { nombreProducto: "kumis alpina", descripcion: "bebida lactea fermentada", precio: 2200, categoria: "lacteos", disponibilidadInventario: 30, marca: "alpina", numeroModelo: 47, peso: "200ml", unidadesVendidas: 18, valoracionPromedio: 4.4 },
  { nombreProducto: "papas margarita", descripcion: "papas fritas sabor natural", precio: 1800, categoria: "snacks", disponibilidadInventario: 80, marca: "margarita", numeroModelo: 48, peso: "115g", unidadesVendidas: 50, valoracionPromedio: 4.6 },
  { nombreProducto: "colombiana", descripcion: "gaseosa sabor cola rosada", precio: 2000, categoria: "bebidas", disponibilidadInventario: 70, marca: "postobon", numeroModelo: 49, peso: "2 litros", unidadesVendidas: 40, valoracionPromedio: 4.3 },
  { nombreProducto: "cocada", descripcion: "dulce de coco tradicional", precio: 1500, categoria: "dulces", disponibilidadInventario: 40, marca: "delicias del pacifico", numeroModelo: 50, peso: "100g", unidadesVendidas: 25, valoracionPromedio: 4.7 }
])

db.productos.find({ nombreProducto: { $eq: "Yogurt de Fresa" } });
db.productos.find({ precio: { $gt: 3000 } });
db.productos.find({ disponibilidadInventario: { $gte: 20 } });
db.productos.find({ numeroModelo: { $lt: 500 } });
db.productos.find({ peso: { $lte: 1 } });
db.productos.find({ unidadesVendidas: { $ne: 20 } });
db.productos.find({ valoracionPromedio: { $in: [4.0, 4.5, 5.0] } });
db.productos.find({ valoracionPromedio: { $nin: [1.0, 2.0] } });
db.productos.find();
db.productos.updateOne(
   { nombreProducto: "cocada" },
   { $set: { precio: 3500 } }
);



