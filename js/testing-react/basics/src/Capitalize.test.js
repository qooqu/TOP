import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Capitalize from "./Capitalize";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("capitalizes simple", () => {
    act(() => {
        render(<Capitalize str="yo" />, container);
    });
    expect(container.textContent).toBe("YO");
});

it("capitalizes complex", () => {
    act(() => {
        render(<Capitalize str="123 yo YO" />, container);
    });
    expect(container.textContent).toBe("123 YO YO");
});
