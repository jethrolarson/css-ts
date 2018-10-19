import { serializeColor, CSSColor } from "./colors";
import { prop2, GlobalValue, FlexTuple2 } from "./common";
import { Unit } from "./units";
export const backgroundColor = prop2("backgroundColor", serializeColor);

export type BackgroundRepeatValue =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "no-repeat"
  | GlobalValue;

type PositionName = "top" | "right" | "bottom" | "left" | "center";

type BackgroundPositionPart = [PositionName, Unit] | [PositionName];

export type BackgroundPositionValue =
  | [BackgroundPositionPart, BackgroundPositionPart]
  | [BackgroundPositionPart]
  | GlobalValue;

export type BackgroundClipValue =
  | "border-box"
  | "padding-box"
  | "content-box"
  | GlobalValue;

export type BackgroundOriginValue =
  | "border-box"
  | "padding-box"
  | "content-box"
  | GlobalValue;

export type BackgroundAttachmentValue =
  | "scroll"
  | "fixed"
  | "local"
  | GlobalValue;

export interface BackgroundProps {
  image?: BackgroundPositionValue;
  color?: CSSColor;
  repeat?: BackgroundRepeatValue;
  size?: FlexTuple2<Unit>;
  position?: BackgroundPositionValue;
  clip?: BackgroundClipValue;
  origin?: BackgroundOriginValue;
  attachment?: BackgroundAttachmentValue;
}
