import { render } from "@testing-library/react";
import PlusIcon from "./";

describe("Plus Icon component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <PlusIcon className="fill-white" title="Plus icon test title" />
    );

    expect(container).toMatchSnapshot();
  });
});
