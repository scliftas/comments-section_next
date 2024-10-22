import { render } from "@testing-library/react";
import MinusIcon from ".";

describe("Minus Icon component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <MinusIcon className="fill-black" title="Minus icon test title" />
    );

    expect(container).toMatchSnapshot();
  });
});
