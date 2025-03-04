
# Global Dev Library

A comprehensive resource hub for web developers to discover, search, and explore curated development tools, libraries, and frameworks.

## Features

### Resource Discovery
- **Categorized Resources**: Browse web development resources organized by categories (Frontend Libraries, UI Libraries, Package Managers, etc.)
- **Featured Categories**: Quick access to popular resource categories on the homepage
- **Newest Additions**: Showcase of recently added resources

### Search and Filter
- **Global Search**: Search across all resources from the navigation bar
- **Category Search**: Filter resources within specific categories
- **Resource Sorting**: Sort resources by name (A-Z, Z-A) or date added (newest/oldest)

### UI/UX
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Gradient Category Cards**: Visual distinction between categories with custom gradient backgrounds
- **Resource Cards**: Clean, informative display of resource details including name, description, and links
- **Free/Paid Indicators**: Visual labels showing whether resources are free or paid

### Navigation
- **Simple Navigation**: Easy access to home and categories pages
- **Breadcrumb Navigation**: Return to categories from resource listing pages

## Technology Stack

### Frontend
- **React**: Component-based UI library for building the interface
- **TypeScript**: Typed JavaScript for enhanced developer experience and code quality
- **React Router**: Client-side routing between different views
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for UI elements

### Build Tools
- **Vite**: Next-generation frontend tooling with fast HMR

### Data Management
- **Static Data**: Currently using static data with option to integrate with Supabase
- **Configuration-based**: Easily switch between static and API-based data sources

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn package manager

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Customization

### Adding New Resources
Edit the `resources` array in `/src/lib/data.ts` to add new resources with the following structure:

```typescript
{
  id: "unique-id",
  name: "Resource Name",
  websiteLink: "https://example.com",
  description: "Description of the resource",
  githubLink: "https://github.com/example/repo",
  logo: "/logos/logo.svg",
  isFree: true,
  category: "Category Name",
  createdAt: "YYYY-MM-DD"
}
```

### Adding New Categories
Edit the `categories` array in `/src/lib/data.ts` to add new categories:

```typescript
{
  id: "category-id",
  name: "Category Name",
  description: "Category description",
  gradient: "gradient-class-name",
  icon: "icon-name"
}
```

### Switching to Supabase
1. Create Supabase project and set up tables for resources and categories
2. Update environment variables with Supabase credentials
3. Change `dataSource` to `'supabase'` in `/src/lib/config.ts`

## Future Enhancements
- User authentication for personalized resource collections
- Resource ratings and reviews
- Community contribution features
- Resource submission form
- Advanced filtering options

## License
This project is licensed under the MIT License - see the LICENSE file for details.
