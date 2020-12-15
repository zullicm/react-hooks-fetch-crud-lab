import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/server";

import App from "../components/App";

describe("<App />", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("displays question prompts after fetching", async () => {
    render(<App />);

    fireEvent.click(screen.queryByText(/View Questions/));

    await screen.findByText(/lorem testum 1/g);

    expect(screen.queryByText(/lorem testum 1/g)).toBeInTheDocument();

    expect(screen.queryByText(/lorem testum 2/g)).toBeInTheDocument();
  });

  it("creates a new question when the form is submitted", async () => {
    render(<App />);

    fireEvent.click(screen.queryByText(/New Question/));

    fireEvent.change(screen.queryByLabelText(/Prompt/), {
      target: { value: "Test Prompt" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 1/), {
      target: { value: "Test Answer 1" },
    });
    fireEvent.change(screen.queryByLabelText(/Answer 2/), {
      target: { value: "Test Answer 2" },
    });
    fireEvent.change(screen.queryByLabelText(/Correct Answer/), {
      target: { value: "1" },
    });

    fireEvent.submit(screen.queryByText(/Add Question/));

    fireEvent.click(screen.queryByText(/View Questions/));

    expect(screen.queryByText(/Test Prompt/g)).toBeInTheDocument();
  });
});
