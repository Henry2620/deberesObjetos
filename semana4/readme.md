space:

Este código implementa una función llamada age que calcula la edad de una persona en años terrestres o en años de un planeta específico, dada su edad en segundos y el planeta en cuestión. Aquí está la lógica del código:

Se definen constantes:

EARTH_YEAR_SECONDS: La cantidad de segundos en un año terrestre.
orbitalPeriods: Un objeto que mapea los nombres de los planetas a sus períodos orbitales relativos con respecto a la Tierra. Estos valores representan cuántos años terrestres dura un año en el planeta correspondiente.
Se formatea el nombre del planeta proporcionado como entrada. Se asegura de que la primera letra esté en mayúscula y el resto en minúscula.

Se verifica si el planeta proporcionado es válido. Si no es válido, se lanza un error.

Se calcula la edad de la persona en años del planeta especificado:

Se divide la cantidad de segundos proporcionada por EARTH_YEAR_SECONDS para obtener la edad en años terrestres.
Luego, esta cantidad se divide por el período orbital del planeta en cuestión, obteniendo así la edad en años del planeta específico.
Se redondea este valor a dos decimales utilizando Math.round.
Se devuelve el resultado.
En resumen, la función age toma un planeta y una cantidad de segundos como entrada, y devuelve la edad de la persona en años del planeta especificado, considerando los períodos orbitales relativos de los planetas con respecto a la Tierra.

d&d:

Este código define una clase llamada DnDCharacter que representa un personaje de Dungeons & Dragons (D&D). Aquí está la lógica del código:

La clase DnDCharacter tiene las siguientes propiedades públicas:

strength, dexterity, constitution, intelligence, wisdom, charisma: Representan los puntajes de habilidad del personaje en diferentes atributos.
hitpoints: Representa los puntos de golpe del personaje.
El constructor de la clase inicializa los puntajes de habilidad del personaje y calcula sus puntos de golpe:

Los puntajes de habilidad se generan utilizando el método generateAbilityScore, que simula tiradas de dados según las reglas de D&D.
Los puntos de golpe se calculan sumando 10 a un modificador basado en el puntaje de constitución del personaje. Este modificador se calcula utilizando el método getModifierFor.
La clase también contiene dos métodos estáticos:

generateAbilityScore(): Genera un puntaje de habilidad aleatorio según las reglas de D&D. Se tiran cuatro dados de seis caras y se eliminan el valor más bajo. Luego, se suman los tres valores restantes.
getModifierFor(abilityValue: number): Calcula el modificador correspondiente a un valor de habilidad dado, basado en la fórmula estándar de D&D.
En resumen, esta clase proporciona una manera de crear personajes de D&D con puntajes de habilidad generados aleatoriamente y puntos de golpe calculados según sus atributos.