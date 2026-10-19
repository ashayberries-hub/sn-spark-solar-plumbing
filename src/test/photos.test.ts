import { describe, expect, it } from "vitest";
import { PHOTOS } from "@/lib/photos";

describe("Photos on external hosting", () => {
  it.each(Object.entries(PHOTOS))("loads %s from its serving host, not Netlify", (_name, src) => {
    const url = new URL(src, "https://example.netlify.app");
    expect(url.origin).toBe("https://sn-spark-solar-plumbing.lovable.app");
    expect(url.pathname).toMatch(/^\/__l5e\/assets-v1\/[^/]+\/[^/]+\.jpg$/);
  });
});