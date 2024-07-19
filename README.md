# Next.js Blog Application

This is a simple blog application built with Next.js and Material-UI. The application fetches blog posts from the JSONPlaceholder API and displays them in a responsive grid layout with Material-UI components.

## Features

- Server-side rendering with Next.js
- Responsive design using Material-UI
- Dynamic routing for individual blog posts

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AboUbida/my-blog-app.git
   cd my-blog-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Configuration

You can customize the theme and fonts used in the application by modifying the following files:

- **\_app.tsx**: For theme customization and global styles.

### File Structure

- `pages/`
  - `_app.tsx` - Custom App component for Next.js
  - `index.tsx` - Home page displaying the list of blog posts
  - `posts/[id].tsx` - Dynamic route for individual blog posts (not included in the example)
- `components/` - Folder for reusable components (if any)
- `public/` - Folder for static assets
- `api/` - Folder for API request functions
- `styles/` - Folder for global CSS files (if any)

### Example Components

- **Home Page**: Displays a grid of blog posts.

### Deployment

To deploy your application, you can use Vercel or other cloud providers that support Next.js. For Vercel:

1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Follow the deployment instructions provided by Vercel.

### Testing

To ensure the application is working as expected, you can run the tests using the following command:

Run unit tests:

```bash
  npm run test
```

### Contributing

Feel free to open issues or submit pull requests if you have suggestions or improvements.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.