// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";

configure({ testIdAttribute: "data-qa" });

global["environment-config"] = {
  Environment: "local",
};

window.open = jest.fn();

window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollBy = jest.fn();
window.HTMLElement.prototype.scrollTo = jest.fn();

global.structuredClone = (val) => {
  return JSON.parse(JSON.stringify(val));
};

global.URL.createObjectURL = jest.fn(() => "output");

// mock login
// NOTE: this must be done both outside and inside the beforeEach()

beforeEach(() => {
  // mock login
  localStorage.clear();
});
