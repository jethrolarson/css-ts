import { Unit } from "./units";
import { CSSColor, serializeColor } from "./colors";
import {
  serializeUnit,
  prop2,
  FlexTuple4,
  CSSNumeric,
  serializeNumericTuple,
  FlexTuple2
} from "./common";
import { pipe, join, map } from "./util";

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
export const borderRight = prop2("borderRight", serializeBorderOpts);
export const borderBottom = prop2("borderBottom", serializeBorderOpts);
export const borderLeft = prop2("borderLeft", serializeBorderOpts);

export const borderWidth = prop2<FlexTuple4<CSSNumeric>>(
  "borderWidth",
  serializeNumericTuple
);

const serializeColorTuple = pipe(
  map(serializeColor),
  join(" ")
);

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
