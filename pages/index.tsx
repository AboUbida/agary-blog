import { GetServerSideProps } from "next";
import Link from "next/link";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import { fetchPosts } from "./api";
import { useTheme } from "@mui/material/styles";
import { HomeProps, Post } from "../types";

// Functional component for Home page
const Home: React.FC<HomeProps> = ({ posts }) => {
  const theme = useTheme(); // Hook to access Material-UI theme

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: theme.palette.background.default, // Background color from theme
        padding: theme.spacing(4), // Padding from theme
      }}
    >
      <Typography variant="h1" component="h1" color="primary" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <Link
                  href={`/posts/${post.id}`}
                  style={{ textDecoration: "none" }}
                  passHref
                >
                  <CardContent sx={{ height: "170px", textDecoration: "none" }}>
                    <Typography
                      variant="h5"
                      component="h2"
                      color="secondary"
                      paddingBlock={1}
                      data-testid={`title-${post.id}`}
                    >
                      {post.title.slice(0, 25)}... {/* Shortened title */}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      data-testid={`body-${post.id}`}
                    >
                      {post.body.slice(0, 200)}... {/* Shortened body */}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// Fetch posts data on the server side
export const getServerSideProps: GetServerSideProps = async () => {
  const posts: Post[] = await fetchPosts(); // Fetch posts from API
  return { props: { posts } }; // Pass posts as props to the component
};

export default Home;