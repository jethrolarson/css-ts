export const map = <A, B>(f: (x: A) => B) => (xs: A[]): B[] =>
  xs.map(a => f(a));

export const pipe = <A, B, C>(f: (y: A) => B, g: (x: B) => C) => (w: A): C =>
  g(f(w));

export const I = <A>(x: A): A => x;

export const join = (str: string) => (xs: Array<unknown>) => xs.join(str);
