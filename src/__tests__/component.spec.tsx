import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Skeleton from "../Skeleton";

Enzyme.configure({ adapter: new Adapter() });

describe("Default Skeleton", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe("Skeleton with defined width", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton width={200} />);
    expect(wrapper.prop("style").maxWidth).toBe(200);
  });
});

describe("Skeleton with defined height", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton height={25} />);
    expect(wrapper.prop("style").height).toBe(25);
  });
});

describe("Skeleton rendered square", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton square width={25} />);
    expect(wrapper.prop("style").maxWidth).toBe(25);
    expect(wrapper.prop("style").height).toBe(25);
  });
});

describe("Skeleton rendered rounded", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton round width={25} />);
    expect(wrapper.prop("className")).toMatch(/round/);
    expect(wrapper.prop("style").maxWidth).toBe(25);
    expect(wrapper.prop("style").height).toBe(25);
  });
});

describe("Skeleton rendered in dark", () => {
  test("Component should rendered without any error", () => {
    const wrapper = shallow(<Skeleton dark />);
    expect(wrapper.prop("className")).toMatch(/dark/);
  });
});
