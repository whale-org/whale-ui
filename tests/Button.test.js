"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var React = require("react");
var Adapter = require("enzyme-adapter-react-16");
enzyme_1.configure({ adapter: new Adapter() });
var index_1 = require("../lib/index");
describe("<Button>Hello</Button>", function () {
    it("renders a button with text hello", function () {
        var wrapper = enzyme_1.shallow(React.createElement(index_1.Button, null, "Hello"));
        chai_1.expect(wrapper.find("button")).to.have.length(1);
        chai_1.expect(wrapper.find("button").text()).to.equal("Hello");
    });
});
