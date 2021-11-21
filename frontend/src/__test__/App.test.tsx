/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App tests", () => {
  it("App should render and match snapshot", (done) => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
    done();
  });
});
