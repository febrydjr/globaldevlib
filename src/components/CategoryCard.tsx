
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  return (
    <Link 
      to={`/categories/${category.id}`} 
      className={`group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${category.gradient} ${className}`}
    >
      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="text-white mb-4 opacity-90">
          <span className="text-lg font-medium">{category.name}</span>
        </div>
        <p className="text-white/80 text-sm mb-4">{category.description}</p>
        <div className="mt-auto flex items-center text-white">
          <span className="text-sm font-medium">Explore</span>
          <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
