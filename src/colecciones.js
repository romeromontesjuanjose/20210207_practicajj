db.ventas.drop()
db.ventas.insertMany([
    {
    cod: 'abc001', 
    fecha: new Date("2020-02-20"), 
    cliente: "Pablo Rodriguez", 
    detalle: 
        {
        obra:"Historia de una escalera", 
        cantidad:3,
        precio:2.99
        }
    },
    {cod: 'abc002', fecha: new Date("2020-02-20"), cliente: "Ana Zambrano", detalle: {obra:"Historia de una escalera", cantidad:1, precio:2.99}},
    {cod: 'abc004', fecha: new Date("2020-02-20"), cliente: "María Fernandez", detalle: {obra:"Los miserables", cantidad:4, precio:3.49}},
    {cod: 'abc005', fecha: new Date("2020-02-21"), cliente: "Francisca Guijo", detalle: {obra:"La celestina", cantidad:5, precio:2.99}},
    {cod: 'abc006', fecha: new Date("2020-02-21"), cliente: "Javier Fernandez", detalle: {obra:"Historia de una escalera", cantidad:2, precio:2.99}},
    {cod: 'abc007', fecha: new Date("2020-02-21"), cliente: "Hugo Ruíz", detalle: {obra:"La celestina", cantidad:3, precio:2.99}},
    {cod: 'abc008', fecha: new Date("2020-02-22"), cliente: "Pablo Rodriguez", detalle: {obra:"La fundación", cantidad:2, precio:3.99}},
    {cod: 'abc009', fecha: new Date("2020-02-22"), cliente: "Ana Zambrano", detalle: {obra:"La fundación", cantidad:6, precio:3.99}},
])