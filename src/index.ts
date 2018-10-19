import { CSSProp } from "./common";

export { hsl, rgb, CSSColor } from "./colors";
export { px, pc } from "./units";
export { CSSProp } from "./common";
export {
  textDecoration,
  textAlign,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  LineHeightValue,
  color
} from "./text";
export {
  border,
  borderWidth,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderSpacing,
  borderStyle
} from "./border";
export {
  display,
  width,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  verticalAlign,
  padding
} from "./layout";
export { cursor } from "./cursor";

export const props: (...xs: CSSProp[]) => CSSProp = Object.assign;
