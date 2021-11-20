import { readFile } from "../filesystem";

describe("filesystem tests", () => {
  it("should read a file", async () => {
    let data = await readFile("data/webserver.log");

    expect(typeof data).toBe("string");
    expect(data).not.toBeNull();

    try {
      await readFile("file/that/does/not/exist");
    } catch (e) {
      expect(e.code).toBe("ENOENT");
    }
  });
});
