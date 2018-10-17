import { CSSColor, serializeColor, hsl } from "./colors";
import { map, join, B } from "./util";
import { Unit, px, pc } from "./units";
import {
  prop,
  prop2,
  CSSProp,
  FlexTuple4,
  FlexTuple2,
  CSSNumeric,
  serializeNumericTuple,
  serializeNumeric,
  serializeUnit
} from "./common";
export { textDecoration, textAlign } from "./text";
export { display } from "./display";

export const props: (...xs: CSSProp[]) => CSSProp = Object.assign;

export const padding = prop2<FlexTuple4<CSSNumeric>>(
  "padding",
  serializeNumericTuple
);

export const margin = prop2<FlexTuple4<CSSNumeric>>(
  "margin",
  serializeNumericTuple
);

export const marginLeft = prop2("marginLeft", serializeNumeric);
export const marginTop = prop2("marginTop", serializeNumeric);
export const marginBottom = prop2("marginBottom", serializeNumeric);
export const marginRight = prop2("marginRight", serializeNumeric);

type VerticalAlign =
  | "baseline"
  | "sub"
  | "super"
  | "text-top"
  | "text-bottom"
  | "middle"
  | "top"
  | "bottom";
export const verticalAlign = prop<VerticalAlign>("verticalAlign");

type BorderStyle = "solid" | "dotted" | "dashed" | "none" | "outset" | "inset";

interface BorderOpts {
  width?: Unit;
  style?: BorderStyle;
  color?: CSSColor;
}

const serializeBorderOpts = (opts: BorderOpts) =>
  `${opts.width ? serializeUnit(opts.width) : ""} ${opts.style || ""} ${
    opts.color ? serializeColor(opts.color) : ""
  }`;

export const border = (opts: BorderOpts) => ({
  border: serializeBorderOpts(opts)
});

export const borderTop = prop2("borderTop", serializeBorderOpts);

export const borderWidth = prop2<FlexTuple4<CSSNumeric>>(
  "borderWidth",
  serializeNumericTuple
);

const serializeColorTuple = B(join(" "), map(serializeColor));

export const borderColor = prop2<FlexTuple4<CSSColor>>(
  "borderWidth",
  serializeColorTuple
);

export const borderStyle = prop2<FlexTuple4<BorderStyle>>(
  "borderWidth",
  join(" ")
);

export const borderSpacing = prop2<FlexTuple2<CSSNumeric>>(
  "borderSpacing",
  serializeNumericTuple
);

export const width = prop2("width", serializeNumeric);

export const fontFamily = prop<string>("fontFamily");

type FontStyle = "normal" | "italic";

export const fontStyle = prop<FontStyle>("fontStyle");

type FontWeight = "normal" | "bold";
export const fontWeight = prop<FontWeight>("fontWeight");

export const fontSize = prop2("fontSize", serializeNumeric);

export const color = (c: CSSColor) => ({ color: serializeColor(c) });
export const backgroundColor = prop2("backgroundColor", serializeColor);

type Cursor =
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "e-resize"
  | "n-resize"
  | "ne-resize"
  | "nw-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "w-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "col-resize"
  | "row-resize"
  | "all-scroll"
  | "zoom-in"
  | "zoom-out"
  | "grab"
  | "grabbing";
export const cursor = prop<Cursor>("cursor");

export type GlobalValue = "unset" | "initial" | "inherit";

export type LineHeightValue = number | Unit | "normal" | GlobalValue;
export const lineHeight = prop2(
  "lineHeight",
  (x: LineHeightValue) => (typeof x === "string" ? x : serializeNumeric(x))
);

// Should pass
// border({ width: px(1), style: "solid", color: hsl(220, 80, 90) });
// padding([px(4)]);
// padding([1, 2]);
// padding([pc(10), px(10)]);
// borderWidth([1]);
// borderWidth([px(1), pc(10)]);

// Should compile error:
// padding(pc(10));
// padding();
// padding([1, 2, 3, 4, 5]);
// padding(1);
// hsl(0, "10%", 90);

// Should runtime error:
// hsl(0, 200, 399);

export { pc, px, hsl };
