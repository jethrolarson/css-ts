import { NamedColors } from "./namedColors";

// Colors are limited to hsl, hsla, rgb, and the named colors
export type CSSColor = HSL | HSLA | RGB | NamedColors;

export interface HSL {
  kind: "hsl";
  hue: number;
  saturation: number;
  luminosity: number;
}

export interface HSLA {
  kind: "hsla";
  hue: number;
  saturation: number;
  luminosity: number;
  alpha: number;
}

export const hsl = (
  hue: number,
  saturation: number,
  luminosity: number
): HSL => {
  if (saturation > 100 || saturation < 0) {
    throw TypeError(`Invalid saturation value passed: ${saturation}`);
  }
  if (luminosity > 100 || luminosity < 0) {
    throw TypeError(`Invalid luminosity value passed: ${luminosity}`);
  }
  return {
    kind: "hsl",
    hue,
    saturation,
    luminosity
  };
};

export interface HSLA {
  kind: "hsla";
  hue: number;
  saturation: number;
  luminosity: number;
  alpha: number;
}

export const hsla = (
  hue: number,
  saturation: number,
  luminosity: number,
  alpha: number
): HSLA => {
  if (saturation > 100 || saturation < 0) {
    throw TypeError(`Invalid saturation value passed: ${saturation}`);
  }
  if (luminosity > 100 || luminosity < 0) {
    throw TypeError(`Invalid luminosity value passed: ${luminosity}`);
  }
  if (luminosity > 1 || luminosity < 0) {
    throw TypeError(`Invalid alpha value passed: ${alpha}`);
  }
  return {
    kind: "hsla",
    hue,
    saturation,
    luminosity,
    alpha
  };
};

export interface RGB {
  kind: "rgb";
  red: number;
  green: number;
  blue: number;
}

export const rgb = (red: number, green: number, blue: number): RGB => {
  if (red > 255 || red < 0) {
    throw TypeError(`Invalid red value passed: ${red}`);
  }
  if (green > 255 || green < 0) {
    throw TypeError(`Invalid green value passed: ${green}`);
  }
  if (blue > 255 || blue < 0) {
    throw TypeError(`Invalid blue value passed: ${blue}`);
  }
  return {
    kind: "rgb",
    red,
    green,
    blue
  };
};

export const serializeColor = (c: CSSColor): string => {
  if (typeof c === "string") return c;
  switch (c.kind) {
    case "hsl":
      return `hsl(${c.hue}, ${c.saturation}%, ${c.luminosity}%)`;
    case "rgb":
      return `rgb(${c.red}, ${c.green}%, ${c.blue}%)`;
    case "hsla":
      return `hsla(${c.hue}, ${c.saturation}%, ${c.luminosity}%, ${c.alpha})`;
    default:
      throw new TypeError(`invalid color passed ${c}`);
  }
};
