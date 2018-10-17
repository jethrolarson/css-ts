export type Units = "px" | "%";
export type Unit = [number, Units];
export type PX = [number, "px"];
export type Percent = [number, "%"];
export const px = (x: number): PX => [x, "px"];
export const pc = (x: number): Percent => [x, "%"];
