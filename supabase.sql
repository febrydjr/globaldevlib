
-- Schema for Global Dev Library

-- Categories Table
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  gradient TEXT NOT NULL,
  icon TEXT NOT NULL
);

-- Resources Table
CREATE TABLE resources (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  website_link TEXT NOT NULL,
  description TEXT NOT NULL,
  github_link TEXT NOT NULL,
  logo TEXT NOT NULL,
  is_free BOOLEAN NOT NULL DEFAULT true,
  category TEXT NOT NULL REFERENCES categories(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  
  -- Add a text search index for efficient searching
  CONSTRAINT fk_category
    FOREIGN KEY (category)
    REFERENCES categories(id)
    ON DELETE CASCADE
);

-- Create a view with category name for easier queries
CREATE VIEW resources_with_category AS
SELECT 
  r.*,
  c.name as category_name
FROM 
  resources r
JOIN 
  categories c ON r.category = c.id;

-- Create a text search index for efficient searching
CREATE INDEX resources_search_idx ON resources 
USING gin(to_tsvector('english', name || ' ' || description));

-- Add sample data for categories
INSERT INTO categories (id, name, description, gradient, icon) VALUES
('frontend-libraries', 'Frontend Libraries', 'Libraries for building interactive user interfaces', 'gradient-frontend', 'code'),
('ui-libraries', 'UI Libraries', 'Pre-designed components and styling solutions', 'gradient-ui', 'palette'),
('package-managers', 'Package Managers', 'Tools for managing project dependencies', 'gradient-package', 'package'),
('tools', 'Tools', 'Development utilities and productivity enhancers', 'gradient-tools', 'tool'),
('backend-frameworks', 'Backend Frameworks', 'Frameworks for server-side application development', 'gradient-backend', 'server'),
('databases', 'Databases', 'Solutions for data storage and management', 'gradient-databases', 'database'),
('animation-libraries', 'Animation Libraries', 'Libraries for creating engaging web animations', 'gradient-animation', 'sparkles'),
('css-frameworks', 'CSS Frameworks', 'Styling frameworks for rapid UI development', 'gradient-css', 'palette'),
('testing-frameworks', 'Testing Frameworks', 'Tools for testing application functionality', 'gradient-testing', 'check-circle');

-- Sample resources data would be inserted here
-- For brevity, this is omitted as the data.ts file already contains the full dataset
-- In a real application, you'd generate INSERT statements for each resource
