export enum Color {
  red = 'red',
  black = 'black',
  blue = 'blue',
  green = 'green',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}

export enum ColorMap {
  red = 0,
  black = 1,
  blue = 2,
  green = 3,
}
