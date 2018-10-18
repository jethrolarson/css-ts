import {
  prop,
  prop2,
  FlexTuple4,
  CSSNumeric,
  serializeNumericTuple,
  serializeNumeric
} from "./common";

export type DisplayValue =
  | "block"
  | "inline"
  | "run-in"
  | "flow"
  | "flow-root"
  | "table"
  | "flex"
  | "grid"
  | "ruby"
  | "block flow"
  | "inline table"
  | "flex run-in"
  | "list-item"
  | "list-item block"
  | "list-item inline"
  | "list-item flow"
  | "list-item flow-root"
  | "list-item block flow"
  | "list-item block flow-root"
  | "flow list-item block"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "ruby-text-container"
  | "contents"
  | "none"
  | "inline-block"
  | "inline-table"
  | "inline-flex"
  | "inline-grid"
  | "inherit"
  | "initial"
  | "unset";

export const display = prop<DisplayValue>("display");

export const margin = prop2<FlexTuple4<CSSNumeric>>(
  "margin",
  serializeNumericTuple
);

export const marginLeft = prop2("marginLeft", serializeNumeric);
export const marginTop = prop2("marginTop", serializeNumeric);
export const marginBottom = prop2("marginBottom", serializeNumeric);
export const marginRight = prop2("marginRight", serializeNumeric);

export const padding = prop2<FlexTuple4<CSSNumeric>>(
  "padding",
  serializeNumericTuple
);

export const paddingLeft = prop2("paddingLeft", serializeNumeric);
export const paddingTop = prop2("paddingTop", serializeNumeric);
export const paddingBottom = prop2("paddingBottom", serializeNumeric);
export const paddingRight = prop2("paddingRight", serializeNumeric);

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

export const width = prop2("width", serializeNumeric);
