/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  render(() => <App />, rootElement);
} else {
  //   console.error("Could not find root element");
  throw new Error("Could not find root element");
}
