// Home Page
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages/index";
import { Post } from "../types";

const mockPosts: Post[] = [
  { id: 1, title: "Post 1", body: "This is the body of post 1" },
  { id: 2, title: "Post 2", body: "This is the body of post 2" },
];

describe("Home Component", () => {
  it("should render without crashing", async () => {
    render(<Home posts={mockPosts} />);

    // Use findBy to handle async updates
    expect(await screen.getByTestId("title-1")).toBeInTheDocument();
    expect(await screen.getByTestId("title-2")).toBeInTheDocument();
  });

  it("should truncate post titles and bodies correctly", async () => {
    render(<Home posts={mockPosts} />);

    // Use findBy to handle async updates
    expect(await screen.getByTestId("title-1")).toHaveTextContent("Post 1");
    expect(await screen.getByTestId("title-2")).toHaveTextContent("Post 2");

    expect(await screen.getByTestId("body-1")).toHaveTextContent(
      "This is the body of post 1"
    );
    expect(await screen.getByTestId("body-2")).toHaveTextContent(
      "This is the body of post 2"
    );
  });
});