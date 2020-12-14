import { configure } from "@storybook/react";
import "./../src/styles/index.scss"
const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}
configure(loadStories, module);