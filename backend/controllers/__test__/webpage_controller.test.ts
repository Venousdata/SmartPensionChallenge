import { getWebsiteViews } from "../webpage_controller";

describe("webpage_controller tests", () => {
  it("should throw error if path or sortBy is falsy", async () => {
    try {
      await getWebsiteViews("./data/webserver.log", "");
    } catch (e) {
      expect(e.message).toBe("Path or sortBy is missing");
    }

    try {
      await getWebsiteViews("", "view");
    } catch (e) {
      expect(e.message).toBe("Path or sortBy is missing");
    }
  });

  it("should return correct data and NOT throw error if order is falsy", async () => {
    const websiteViews = await getWebsiteViews("./data/webserver.log", "path");

    expect(websiteViews).toBeInstanceOf(Array);
    expect(websiteViews.length).toBe(6);
    expect(websiteViews[0]).toBeInstanceOf(Object);
    expect(typeof websiteViews[0].path).toBe("string");
    expect(typeof websiteViews[0].view).toBe("number");
    expect(typeof websiteViews[0].uniqueView).toBe("number");
  });

  it("should return correctly ordered data if order is passed", async () => {
    let websiteViews = await getWebsiteViews(
      "./data/webserver.log",
      "view",
      "desc"
    );
    const sortedView = websiteViews.map((row) => row.view);

    for (let i = 0; i < sortedView.length; i++) {
      for (let j = i + 1; j < sortedView.length; j++) {
        expect(sortedView[i] >= sortedView[j]).toBe(true);
      }
    }

    websiteViews = await getWebsiteViews(
      "./data/webserver.log",
      "uniqueView",
      "asc"
    );
    const sortedUniqueView = websiteViews.map((row) => row.uniqueView);

    for (let i = 0; i < sortedView.length; i++) {
      for (let j = i + 1; j < sortedView.length; j++) {
        expect(sortedUniqueView[i] <= sortedUniqueView[j]).toBe(true);
      }
    }
  });
});
