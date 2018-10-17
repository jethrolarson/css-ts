export const map = <A, B>(f: (x: A) => B) => (xs: A[]): B[] =>
  xs.map(a => f(a));

export const B = <A, B, C>(f: (y: B) => C, g: (x: A) => B) => (w: A) => f(g(w));

export const pipe = <A, B, C>(f: (y: A) => B, g: (x: B) => C) => (w: A): C =>
  g(f(w));

export const I = <A>(x: A): A => x;

export const join = (str: string) => (xs: Array<unknown>) => xs.join(str);

/**
 * logically invert a predicate
 * @param f predicate
 * @returns flipped predicate
 */
export const complement = <T>(f: (x: T) => boolean) => (y: T) => !f(y);
