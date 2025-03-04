
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/data';

const Categories: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('search') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredCategories, setFilteredCategories] = useState(categories);
  
  useEffect(() => {
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      setFilteredCategories(
        categories.filter(
          category => 
            category.name.toLowerCase().includes(lowercaseQuery) || 
            category.description.toLowerCase().includes(lowercaseQuery)
        )
      );
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery]);
  
  return (
    <Layout>
      <section className="py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Categories</h1>
          <p className="text-muted-foreground mb-8">
            Browse our comprehensive collection of web development resources by category.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              initialQuery={searchQuery}
              onSearch={setSearchQuery}
              placeholder="Search categories..."
              className="mb-8"
            />
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No categories found matching "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
