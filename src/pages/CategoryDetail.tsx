
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import ResourceCard from '@/components/ResourceCard';
import { 
  getCategoryById, 
  getResourcesByCategory, 
  Resource, 
  searchResources, 
  sortResources 
} from '@/lib/data';
import { ChevronLeft } from 'lucide-react';

const CategoryDetail: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('nameAsc');
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  
  useEffect(() => {
    if (category) {
      let resources = getResourcesByCategory(category.name);
      
      if (searchQuery) {
        resources = searchResources(searchQuery).filter(
          resource => resource.category === category.name
        );
      }
      
      setFilteredResources(sortResources(resources, sortOption));
    }
  }, [category, searchQuery, sortOption]);
  
  if (!category) {
    return (
      <Layout>
        <div className="py-12 text-center">
          <p className="text-xl text-muted-foreground">Category not found.</p>
          <Link 
            to="/categories" 
            className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Categories
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="mb-8">
        <Link 
          to="/categories" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Categories
        </Link>
      </div>
      
      <div className={`py-12 px-8 rounded-lg ${category.gradient} mb-8`}>
        <h1 className="text-3xl font-bold text-white mb-2">{category.name}</h1>
        <p className="text-white/80">{category.description}</p>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="w-full md:w-2/3">
          <SearchBar 
            initialQuery={searchQuery}
            onSearch={setSearchQuery}
            placeholder={`Search in ${category.name}...`}
          />
        </div>
        
        <div className="w-full md:w-1/3 flex justify-end">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="block w-full md:w-auto rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 bg-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary/40"
          >
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No resources found {searchQuery ? `matching "${searchQuery}"` : ''}.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryDetail;
