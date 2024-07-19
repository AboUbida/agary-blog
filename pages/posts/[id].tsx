import { GetServerSideProps } from "next";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PostDetailProps, Post, Comment } from "../../types";
import { fetchPostById, fetchCommentsByPostId } from "../api";

// Functional component for Post Detail page
const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  const theme = useTheme(); // Hook to access Material-UI theme

  return (
    <Container
      maxWidth="md"
      style={{
        backgroundColor: theme.palette.background.default, // Background color from theme
        padding: theme.spacing(4), // Padding from theme
      }}
    >
      <Typography variant="h1" component="h1" color="primary" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>
      <Typography variant="h2" component="h2" color="secondary" gutterBottom>
        Comments
      </Typography>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardContent>
            <Typography variant="h6" component="h3" color="primary">
              {comment.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {comment.email}
            </Typography>
            <Typography variant="body1">{comment.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

// Fetch post and comments data on the server side
export const getServerSideProps: GetServerSideProps<PostDetailProps> = async (
  context
) => {
  const { id } = context.params!; // Extract post id from context parameters
  const post: Post = await fetchPostById(id); // Fetch post by id from API
  const comments: Comment[] = await fetchCommentsByPostId(id); // Fetch comments by post id from API
  return { props: { post, comments } }; // Pass post and comments as props to the component
};

export default PostDetail;