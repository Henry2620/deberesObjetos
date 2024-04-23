export const colorCode = (color: string): number => {
    switch (color) {
      case 'black':
        return 0;
      case 'marrón':
        return 1;
      case 'rojo':
        return 2;
      case 'orange':
        return 3;
      case 'amarillo':
        return 4;
      case 'verde':
        return 5;
      case 'azul':
        return 6;
      case 'violeta':
        return 7;
      case 'gris':
        return 8;
      case 'white':
        return 9;
      default:
        throw new Error('Color no válido');
    }
  }
  
  export const COLORS: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];