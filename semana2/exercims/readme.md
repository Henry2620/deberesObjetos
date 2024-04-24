EJERCICIO 4 EXPLICACION

Este código es una función llamada decodedValue que toma una matriz de cadenas de colores como entrada y devuelve un número
decodificado basado en los valores asociados a esos colores en el diccionario colorMap. La función toma los dos primeros
colores de la matriz, busca sus valores correspondientes en el diccionario colorMap, los combina y devuelve el resultado.
El diccionario colorMap asocia nombres de colores con valores numéricos, donde cada color tiene un valor específico.
La función toma los primeros dos colores de la matriz de entrada (colors) y busca sus valores numéricos correspondientes en
el diccionario colorMap. Luego, multiplica el valor del primer color por 10 y le suma el valor del segundo color.
Finalmente, devuelve este valor combinado como resultado.

EJERCICIO 5 EXPLICACION
Este código es una función llamada decodedResistorValue que toma una matriz de tres elementos representando colores de
bandas de una resistencia. Luego, calcula el valor de resistencia basado en esos colores y devuelve una cadena que
representa ese valor de resistencia en ohmios, kiloohmios, megaohmios o gigaohmios, según corresponda.
El código utiliza una matriz predefinida llamada COLORS que mapea nombres de colores a valores numéricos para las bandas de
una resistencia.
Luego, la función calcula el valor de la resistencia utilizando los índices de los colores en la matriz COLORS, aplicando la
fórmula para calcular el valor de resistencia basado en el código de colores de una resistencia de 4 bandas. Luego,
determina la unidad apropiada (ohmios, kiloohmios, megaohmios o gigaohmios) basándose en la cantidad de ceros en el valor
calculado y retorna una cadena con el valor de resistencia y su unidad correspondiente.
En resumen, esta función toma los colores de las bandas de una resistencia como entrada y devuelve el valor de resistencia
correspondiente en una cadena de texto.