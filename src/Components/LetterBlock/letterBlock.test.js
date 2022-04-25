import React from "react";
import { render } from "@testing-library/react";
import { LetterBlock } from "./letterBlock";

const TEST_LETTER = "Z";

xdescribe("LetterBlock", () => {
  it("Should display a letter given as props", async () => {
    const { getByText } = render(<LetterBlock letter={TEST_LETTER} />);
    expect(await getByText(TEST_LETTER)).toBeTruthy();
  });
  it("Should adjust color to indicate close match", () => {
    // TODO
    expect().toBeTruthy();
  });
  it("Should adjust color to indicate exact match", () => {
    // TODO
    expect().toBeTruthy();
  });
});
