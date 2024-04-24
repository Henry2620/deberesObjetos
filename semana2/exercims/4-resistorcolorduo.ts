export function decodedValue(colors: string[]): number {
    // Diccionario de colores a valores numéricos
    const colorMap: Record<string, number> = {
      "black": 0,
      "brown": 1,
      "red": 2,
      "orange": 3,
      "yellow": 4,
      "green": 5,
      "blue": 6,
      "violet": 7,
      "grey": 8,
      "white": 9
    };
  
    const firstValue = colorMap[colors[0]];
    const secondValue = colorMap[colors[1]];
  
    const combinedValue = firstValue * 10 + secondValue;
  
    return combinedValue;
  }
