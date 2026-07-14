import { describe, expect, it } from "vitest";
import { HttpError, normalizeHttpError } from "./index";

describe("normalizeHttpError", () => {
  it("returns existing HttpError instances unchanged", () => {
    const error = new HttpError("Request failed", { status: 500 });

    expect(normalizeHttpError(error)).toBe(error);
  });

  it("wraps unknown errors in HttpError", () => {
    const cause = new Error("boom");
    const error = normalizeHttpError(cause);

    expect(error).toBeInstanceOf(HttpError);
    expect(error.message).toBe("Unexpected HTTP error");
    expect(error.cause).toBe(cause);
  });
});
