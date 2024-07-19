import { Post, Comment } from "../../types";

const API_URL = "https://jsonplaceholder.typicode.com";

// Fetch all posts
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

// Fetch a single post by ID
export const fetchPostById = async (id: any): Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${id}`);
  }
  return response.json();
};

// Fetch all comments by post id
export const fetchCommentsByPostId = async (
  postId: any
): Promise<Comment[]> => {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`);

  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${postId}`);
  }

  return response.json();
};