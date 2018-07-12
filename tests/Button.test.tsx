import { expect } from "chai";
import { configure, mount, render, shallow } from "enzyme";
import * as React from "react";
import { spy } from "sinon";

import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { Button } from "../lib/index";

describe("<Button>Hello</Button>", () => {
  it("renders a button with text hello", () => {
    const wrapper = shallow(<Button>Hello</Button>);
    expect(wrapper.find("button")).to.have.length(1);
    expect(wrapper.find("button").text()).to.equal("Hello");
  });
});
