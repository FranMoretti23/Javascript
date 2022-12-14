let pizzas = [
    {
        id: 1,
        nombre: 'Muzzarella' ,
        ingredientes: ['Salsa de tomate','muzzarella',],
        precio:'500'

    },
    {
        id: 2,
        nombre: 'Cantimpalo' ,
        ingredientes: ['Salsa de tomate','muzzarella','cantimpalo','aceitunas',],
        precio:'800'

    },
    {
        id: 3,
        nombre: 'Panceta' ,
        ingredientes: ['Salsa de tomate','muzzarella','panceta','aceitunas',],
        precio:'900'

    },
    {
        id: 4,
        nombre: 'Especial' ,
        ingredientes: ['Salsa de tomate','muzzarella','panceta','aceitunas','aceitunas',],
        precio:'700'

    },
    {
        id: 5,
        nombre: 'Fugazzetta' ,
        ingredientes: ['Salsa de tomate','muzzarella','cebolla','fugazzetta',],
        precio:'590'

    },
    {
        id: 6,
        nombre: 'Napolitana' ,
        ingredientes: ['Salsa de tomate','muzzarella','rodajas de tomate','ajo',],
        precio:'650'

    },
]
/* A) Imprimir en consola todos las pizzas con id impar*/

let idimpares = pizzas.filter(pizzas => pizzas.id % 2-1 == 0)
 idimpares.forEach((pizzas) => {
   console.log(`La pizza de ${pizzas.nombre} tiene id impar`)
 });


 /* C) El nombre de cada pizza con su respectivo precio. */

 const pizzasconprecio = pizzas.filter(
  (pizzas) => pizzas.nombre + pizzas.precio
)
pizzasconprecio.forEach((pizzas) => {
  console.log(`La pizza de ${pizzas.nombre} cuesta $${pizzas.precio} `)
});

/* D) Todos los ingredientes de cada pizza*/

const pizzasconingredientes = pizzas.filter(
  (pizzas) => pizzas.nombre + pizzas.ingredientes
)
pizzasconingredientes.forEach((pizzas) => {
  console.log(`La pizza de ${pizzas.nombre} contiene los siguientes ingredientes ${pizzas.ingredientes} `)
});

/* B) ¿Hay alguna pizza que valga menos de $600?*/

const elpreciomenorA = (pizzas, cantidad) => pizzas.precio > cantidad;

 const haypizzasconmenorprecioa = (precio) => {
   pizzas.some( pizzas => elpreciomenorA(pizzas, precio))
   ? console.log(`Hay pizzas con precio menor a $${precio}`)
   : console.log(`No hay pizzas con precio menor a $${precio}`)
 }
 haypizzasconmenorprecioa(600);