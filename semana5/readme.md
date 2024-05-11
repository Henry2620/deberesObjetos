darts:
Este código define una función llamada score que calcula la puntuación de un punto en un plano cartesiano, dados sus coordenadas (x, y). Aquí está la lógica del código:

Se calcula la distancia del punto al origen (0,0) utilizando el teorema de Pitágoras: Math.sqrt(x ** 2 + y ** 2). Esto determina la distancia euclidiana desde el punto hasta el origen.

Se utilizan múltiples declaraciones if-else para asignar una puntuación en función de la distancia calculada:

Si la distancia es mayor que 10, la puntuación es 0.
Si la distancia es mayor que 5 pero menor o igual que 10, la puntuación es 1.
Si la distancia es mayor que 1 pero menor o igual que 5, la puntuación es 5.
Si la distancia es menor o igual que 1, la puntuación es 10.
La función devuelve la puntuación calculada según las condiciones anteriores.

En resumen, la función score asigna una puntuación a un punto en función de su distancia al origen en un plano cartesiano, siguiendo las reglas especificadas en el código.

pangram:

Este código define una función llamada isPangram que verifica si una oración dada es un pangrama o no. Un pangrama es una oración que contiene todas las letras del alfabeto al menos una vez. Aquí está la lógica del código:

Se crea un nuevo conjunto (Set) llamado lettersSet para almacenar las letras únicas presentes en la oración.

Se convierte la oración a minúsculas utilizando el método toLowerCase() para garantizar que todas las letras se consideren de la misma manera.

Se itera sobre cada carácter de la oración después de haberla convertido a minúsculas.

Dentro del bucle, se verifica si el carácter es una letra minúscula del alfabeto (entre 'a' y 'z'). Si es así, se agrega al conjunto lettersSet.

Una vez que se han iterado todos los caracteres de la oración, se verifica si el tamaño del conjunto lettersSet es igual a 26. Esto se hace porque hay 26 letras en el alfabeto inglés. Si el tamaño del conjunto es 26, significa que la oración contiene todas las letras del alfabeto al menos una vez, y la función devuelve true. De lo contrario, devuelve false.

En resumen, la función isPangram verifica si una oración contiene todas las letras del alfabeto al menos una vez, devolviendo true si es un pangrama y false si no lo es.