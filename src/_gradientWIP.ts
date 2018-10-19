import { CSSColor } from ".";

import { Unit } from "./units";
import { Url, GlobalValue } from "./common";

export type GradientPart = [CSSColor, Unit];

export interface LinearGradient {
  kind: "LinearGradient";
  deg: number;
  parts: GradientPart[];
}

export type RepeatingLinearGradient = LinearGradient & {
  kind: "RepeatingLinearGradient";
};

export type Gradient = LinearGradient | RepeatingLinearGradient;
//   | RadialGradient;

export type BackgroundImageValue = Url | Gradient | "none" | GlobalValue;
