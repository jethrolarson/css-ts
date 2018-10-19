import { Unit } from "./units";
import { pipe, join, map } from "./util";

export type GlobalValue = "unset" | "initial" | "inherit";

export type CSSNumeric = number | Unit;

export interface CSSProp {
  [k: string]: string | number;
}

export type FlexTuple1<T> = [T];
export type FlexTuple2<T> = FlexTuple1<T> | [T, T];
export type FlexTuple3<T> = FlexTuple2<T> | [T, T, T];
export type FlexTuple4<T> = FlexTuple3<T> | [T, T, T, T];

export interface Url {
  kind: "Url";
  href: string;
}

export const url = (href: string): Url => ({ kind: "Url", href: href });

export const prop2 = <V>(k: string, serializer: (x: V) => string | number) => (
  v: V
): CSSProp => ({ [k]: serializer(v) });

export const prop = <V extends string | number>(k: string) => (
  v: V
): CSSProp => ({
  [k]: v
});

export const serializeUnit = (x: Unit) => x[0].toString() + x[1];

export const serializeNumeric = (x: CSSNumeric) =>
  Array.isArray(x) ? x[0].toString() + x[1] : x;

export const serializeNumericTuple = pipe(
  map(serializeNumeric),
  join(" ")
);
