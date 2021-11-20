import axios from "axios";
import sinon from "sinon";
import { post } from "../api";
import { postBodyData, postBodyResponseData } from "./data/api.test.data";

describe("api call tests", () => {
  let sandbox: sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Post request should work correctly", async () => {
    const aPost = sandbox
      .stub(axios, "post")
      .resolves({ status: 200, data: "" });
    const data = await post("/webpageviews", postBodyData);
    expect(aPost.getCall(0).args).toEqual(postBodyResponseData);
    expect(data).toEqual("");
  });
});
