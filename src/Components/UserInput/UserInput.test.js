import React from "react";
import { render } from "@testing-library/react";
import { UserInput } from "./UserInput";

describe("UserInput", () => {
  it("Should have a guess input", async () => {
    const { container } = render(<UserInput />);
    expect(await container.querySelector("#guess-input")).toBeTruthy();
  });
  it("Should have a submit button", () => {
    // TODO
    expect().toBeTruthy();
  });
});
