import { serializeColor, CSSColor } from "./colors";
import { prop2, GlobalValue, FlexTuple2, serializeUnit } from "./common";
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

export const _serializeBackgroundPositionPart = (
  part: BackgroundPositionPart
): string =>
  part.length === 1 ? part[0] : part[0] + " " + serializeUnit(part[1]);

export type BackgroundPositionValue =
  | [BackgroundPositionPart, BackgroundPositionPart]
  | [BackgroundPositionPart]
  | GlobalValue;

const serializeBackgroundPosition = (position: BackgroundPositionValue) =>
  typeof position === "string"
    ? position
    : position.map(_serializeBackgroundPositionPart).join(" ");

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
  attachment?: BackgroundAttachmentValue;
  clip?: BackgroundClipValue;
  color?: CSSColor;
  image?: string; // TODO add url and gradient interfaces
  origin?: BackgroundOriginValue;
  position?: BackgroundPositionValue;
  repeat?: BackgroundRepeatValue;
  size?: FlexTuple2<Unit>;
}

const serializeBackgroundOpts = (opts: BackgroundProps) => {
  const out: { [k: string]: string } = {};
  if (typeof opts.attachment !== "undefined") {
    out.backgroundAttachment = opts.attachment;
  }
  if (typeof opts.clip !== "undefined") {
    out.backgroundClip = opts.clip;
  }
  if (typeof opts.color !== "undefined") {
    out.backgroundColor = serializeColor(opts.color);
  }
  if (typeof opts.image !== "undefined") {
    out.backgroundImage = opts.image;
  }
  if (typeof opts.origin !== "undefined") {
    out.backgroundOrigin = opts.origin;
  }
  if (typeof opts.position !== "undefined") {
    out.backgroundPosition = serializeBackgroundPosition(opts.position);
  }
  if (typeof opts.repeat !== "undefined") {
    out.backgroundRepeat = opts.repeat;
  }
  // if (typeof opts.size !== "undefined") {
  //   out.backgroundSize = opts.size;
  // }
  return out;
};

export const background = (opts: BackgroundProps) => ({
  border: serializeBackgroundOpts(opts)
});
