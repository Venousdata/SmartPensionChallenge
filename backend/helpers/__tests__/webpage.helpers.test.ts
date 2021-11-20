import { dummyViewData } from "./data/webpage.helpers.data";
import {
  generateAllPathsAndIps,
  findUniqueIpsForPath,
  generateUniquePaths,
  generateViews,
  generateUniqueViews,
  formatViewsForTable,
} from "../webpage.helpers";

describe("webpage helpers test", () => {
  it("generateAllPathsAndIps should return array of objects containing path and ip", () => {
    const data = generateAllPathsAndIps(dummyViewData);

    expect(data.length).toBe(11);
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].path).toBe("/help_page/1");
    expect(data[0].ip).toBe("126.318.035.038");
  });

  it("findUniqueIpsForPath should return array of unique strings (ips)", () => {
    const data = findUniqueIpsForPath(
      "/help_page/1",
      generateAllPathsAndIps(dummyViewData)
    );

    expect(data.length).toBe(4);
    expect(data).toBeInstanceOf(Array);
    expect(typeof data[0]).toBe("string");
    expect(data[0]).toBe("126.318.035.038");
  });

  it("generateUniquePaths should return array of unique strings (paths)", () => {
    const data = generateUniquePaths(dummyViewData);
    
    expect(data.length).toBe(6);
    expect(data).toBeInstanceOf(Array);
    expect(typeof data[0]).toBe("string");
    expect(data[0]).toBe("/help_page/1");
  });

  it("generateViews should return a Map<string, number> with string being paths, and number being views", () => {
    const data = generateViews(dummyViewData);

    expect(data.size).toBe(6);
    expect(data).toBeInstanceOf(Map);
    expect(data.has("/help_page/1")).toBe(true);
    expect(data.get("/help_page/1")).toBe(5);
  });

  it("generateUniqueViews should return a Map<string, number> with string being paths, and number being UNIQUE views", () => {
    const data = generateUniqueViews(dummyViewData);

    expect(data.size).toBe(6);
    expect(data).toBeInstanceOf(Map);
    expect(data.has("/help_page/1")).toBe(true);
    expect(data.get("/help_page/1")).toBe(4);
  });

  it("formatViewsForTable should return array of objects containing path, views, and uniqueViews", () => {
    const data = formatViewsForTable(
      generateUniquePaths(dummyViewData),
      Object.fromEntries(generateViews(dummyViewData)),
      Object.fromEntries(generateUniqueViews(dummyViewData))
    );

    expect(data.length).toBe(6);
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[1].path).toBe("/contact");
    expect(data[1].view).toBe(1);
    expect(data[1].uniqueView).toBe(1);
  });
});
