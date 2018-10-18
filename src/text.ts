import {
  prop,
  FlexTuple3,
  CSSProp,
  prop2,
  serializeNumeric,
  GlobalValue
} from "./common";
import { CSSColor, serializeColor } from "./colors";
import { Unit } from "./units";

type TextDecorationLine =
  | "underline"
  | "none"
  | "overline"
  | "line-through"
  | "blink";

type TextDecorationStyle = "solid" | "wavy" | "dashed" | "dotted" | "double";

interface TextDecorationOpts {
  line?: TextDecorationLine | FlexTuple3<TextDecorationLine>;
  color?: CSSColor;
  style?: TextDecorationStyle;
}

export const textDecoration = (opts: TextDecorationOpts): CSSProp => {
  const p: CSSProp = {};
  if (opts.line) {
    p.textDecorationLine = Array.isArray(opts.line)
      ? opts.line.join(" ")
      : opts.line;
  }
  if (opts.color) {
    p.textDecorationColor = serializeColor(opts.color);
  }
  if (opts.style) {
    p.textDecorationStyle = opts.style;
  }
  return p;
};

type TextTransform = "uppercase" | "lowercase";
export const textTransform = prop<TextTransform>("textTransform");

type TextAlign = "center" | "left" | "right";
export const textAlign = prop<TextAlign>("textAlign");

export const fontFamily = prop<string>("fontFamily");

type FontStyle = "normal" | "italic";

export const fontStyle = prop<FontStyle>("fontStyle");

type FontWeight = "normal" | "bold";
export const fontWeight = prop<FontWeight>("fontWeight");

export const fontSize = prop2("fontSize", serializeNumeric);

export type LineHeightValue = number | Unit | "normal" | GlobalValue;
export const lineHeight = prop2(
  "lineHeight",
  (x: LineHeightValue) => (typeof x === "string" ? x : serializeNumeric(x))
);

export const color = (c: CSSColor) => ({ color: serializeColor(c) });
