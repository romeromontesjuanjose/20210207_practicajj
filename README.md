* Esta actividad consiste en usar un metodo aggregate para reflejar las ventas de las actuaciones de obras de teatro disponibles en la cartelera de esta semana (colección ventas). En este aggregate agruparemos las consultas por dos campos.

* Para realizar esto aplicaremos el metodo aggregate a la colección  que contenga un match (en el que usaremos el operador $expr), un group (donde agruparemos dos campos), un project (donde realizaremos los cálculos), un sort (para ordenar las salidas) y un match final para filtar lo que nos de el resultado.