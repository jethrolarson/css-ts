/* env: node */
import { _serializeBackgroundPositionPart } from "./background";
import { px } from "./units";
describe("background.ts", () => {
  describe("_serializeBackgroundPositionPart", () => {
    it("parses BackgroundPositionPart into valid string", () => {
      expect(_serializeBackgroundPositionPart(["top", px(10)])).toBe(
        "top 10px"
      );
    });
  });
});
