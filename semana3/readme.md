leap:
La función isLeap se encarga de determinar si un año es bisiesto o no, siguiendo las reglas del calendario gregoriano.

La lógica detrás de la función se basa en las siguientes consideraciones:

Un año es bisiesto si es divisible por 4.
Sin embargo, hay una excepción a esta regla: si un año es divisible por 100 pero no por 400, entonces no es bisiesto.
Pero, si un año es divisible por 400, entonces es bisiesto.
Entonces, la función isLeap implementa estas condiciones de la siguiente manera:

Primero, verifica si el año es divisible por 4 (year % 4 === 0).
Luego, comprueba si el año no es divisible por 100 (year % 100 !== 0), para excluir aquellos años que son divisibles por 100 pero no por 400.
Si alguna de estas dos condiciones se cumple, entonces el año es bisiesto.
De lo contrario, si ninguna de las condiciones anteriores se cumple, el año no es bisiesto.
En resumen, la función isLeap proporciona una implementación eficiente y precisa para determinar si un año es bisiesto o no, siguiendo las reglas establecidas por el calendario gregoriano.

rna:
Este código implementa una función llamada toRna que convierte una cadena de ADN en su correspondiente secuencia de ARN. Aquí está la lógica del código:

Se define un objeto mapping que contiene las correspondencias entre los nucleótidos del ADN y del ARN. Por ejemplo, 'G' en ADN se convierte en 'C' en ARN.
Se inicializa una cadena vacía rna que contendrá la secuencia de ARN resultante.
Se itera sobre cada carácter en la cadena de ADN.
Para cada nucleótido en la cadena de ADN, se verifica si existe una correspondencia en el objeto mapping.
Si existe, se agrega el nucleótido correspondiente del ARN a la cadena rna.
Si no existe una correspondencia para el nucleótido, se lanza un error indicando que la entrada de ADN es inválida.
Una vez que se han recorrido todos los nucleótidos de la cadena de ADN, se devuelve la cadena rna que contiene la secuencia de ARN correspondiente.
En resumen, la función toRna toma una cadena de ADN como entrada y devuelve su secuencia de ARN correspondiente, reemplazando cada nucleótido según las reglas definidas en el objeto mapping.