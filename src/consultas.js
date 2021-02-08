db.ventas.aggregate([
    {
        $match: { 
            $expr: { $gt: [{cantidad:"$detalle.cantidad"}, 3] },
        }
    },
    {
        $group:{
            _id: { 
                identificador:"$cod",
                dia: {$dayOfMonth: "$fecha" },
                obra: "$detalle.obra"
            },
            venta_total: { $sum: { $multiply: ["$detalle.precio", "$detalle.cantidad"] } },
        }
    },
    {
        $project: {
            _id: 0,
            IdCompra:"$_id.identificador",
            Obra_representada:"$_id.obra",
            Dia_compra: "$_id.dia",
            Obra_de_teatro: "$Obra_de_teatro",
            precio_total: "$venta_total",
            precio_IVA: { $multiply: ["$venta_total", 0.21] },
            precio_total_IVA: { $multiply: ["$venta_total", 1.21] },
            precio_total_IVA_redondeado: { $round: [{ $multiply: ["$venta_total", 1.21] }, 0] }
        }
    },
    {
        $sort: {
            precio_total:1, IdCompra:1
         }
    },
    {
        $match: {
           Dia_compra:{$eq:21}
        }
    }
]).pretty()