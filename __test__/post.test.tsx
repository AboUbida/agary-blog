// PostDetail.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostDetail from "../pages/posts/[id]";
import { Post, Comment } from "../types";

const mockPost: Post = {
  id: 1,
  title: "Sample Post Title",
  body: "This is the body of the sample post.",
};

const mockComments: Comment[] = [
  {
    postId: 1,
    id: 1,
    name: "Commenter 1",
    email: "commenter1@example.com",
    body: "This is a comment.",
  },
  {
    postId: 1,
    id: 2,
    name: "Commenter 2",
    email: "commenter2@example.com",
    body: "This is another comment.",
  },
];

describe("PostDetail Component", () => {
  it("should render post details and comments correctly", async () => {
    render(<PostDetail post={mockPost} comments={mockComments} />);

    // Verify post title and body
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();

    // Verify comments
    for (const comment of mockComments) {
      expect(screen.getByText(comment.name)).toBeInTheDocument();
      expect(screen.getByText(comment.email)).toBeInTheDocument();
      expect(screen.getByText(comment.body)).toBeInTheDocument();
    }
  });

  it("should handle empty comments", () => {
    render(<PostDetail post={mockPost} comments={[]} />);

    // Verify post title and body
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.body)).toBeInTheDocument();
  });
});