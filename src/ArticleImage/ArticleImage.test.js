import React from "react";
import ArticleImage from './ArticleImage'

it("renders correctly", () => {
  const { container } = render(<ArticleImage url={"https://cdn.cnn.com/cnnnext/dam/assets/170124150859-beautiful-india-kerala-super"} title={"You can take a pie on a plane"} />);
  expect(container).toMatchSnapshot();
});