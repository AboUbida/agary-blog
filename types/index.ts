export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface HomeProps {
    posts: Post[];
  }
  
  export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  
  export interface PostDetailProps {
    post: Post;
    comments: Comment[];
  }