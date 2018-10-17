export interface CSSProp {
  [k: string]: string | number;
}

export type FlexTuple1<T> = [T];
export type FlexTuple2<T> = FlexTuple1<T> | [T, T];
export type FlexTuple3<T> = FlexTuple2<T> | [T, T, T];
export type FlexTuple4<T> = FlexTuple3<T> | [T, T, T, T];

export const prop2 = <V>(k: string, serializer: (x: V) => string | number) => (
  v: V
): CSSProp => ({ [k]: serializer(v) });

export const prop = <V extends string | number>(k: string) => (
  v: V
): CSSProp => ({
  [k]: v
});
