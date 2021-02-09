db.empleado.aggregate([
    {$lookup:
        {
            from:"Departamento",
            localField:"departamento",
            foreignField:"id",
            as:"númeroDepartamento"
        }
    },
    {$project:
        {
            _id:0,
            nombre_empleado:"$nombre",
            nombre_departamento:{$arrayElemAt:["$númeroDepartamento.nombre",0]},
            horas_trabajadas:"$horas",
            sueldo_por_hora:{$arrayElemAt:["$númeroDepartamento.salarioPorHora",0]}
        }
    },
    {$set:
        {
            sueldo_total:{$multiply:["$horas_trabajadas","$sueldo_por_hora"]}
        }
    },
    {$sort:
        {
            nombre_departamento:1, nombre_empleado:1
        }
    }
]).pretty()

db.ventas.aggregate([
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
        }
    },
    {
        $match: { 
            $expr: { $gt: [{cantidad:"$detalle.cantidad"}, 3] },
        }
    },
    {$set:
        {
            precio_IVA: { $multiply: ["$precio_total", 0.21] },
            precio_total_IVA: { $multiply: ["$precio_total", 1.21] },
            precio_total_IVA_redondeado: { $round: [{ $multiply: ["$precio_total", 1.21] }, 0] }
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