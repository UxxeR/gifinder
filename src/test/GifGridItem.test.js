import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGridItem from "../components/GifGridItem";

describe("GifGridItem Tests", () => {
  const wrapper = shallow(
    <GifGridItem id="gif1" title="gifaboutthings" url="" />
  );

  test("component should display correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
