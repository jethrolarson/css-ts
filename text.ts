import { prop, FlexTuple3, CSSProp } from "./common";
import { CSSColor, serializeColor } from "./colors";

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
