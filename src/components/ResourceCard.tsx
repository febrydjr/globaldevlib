
import React from 'react';
import { ExternalLink, Github, Check, X } from 'lucide-react';
import { Resource } from '@/lib/data';

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, className = '' }) => {
  return (
    <div className={`group glass-panel rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <div className="mr-3 h-8 w-8 flex items-center justify-center rounded-full bg-secondary">
              <img 
                src={resource.logo} 
                alt={`${resource.name} logo`} 
                className="h-5 w-5 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{resource.name}</h3>
              <div className="flex items-center mt-1">
                {resource.isFree ? (
                  <span className="inline-flex items-center text-xs font-medium text-green-700 bg-green-100 rounded-full px-2 py-0.5">
                    <Check className="mr-1 h-3 w-3" />
                    Free
                  </span>
                ) : (
                  <span className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                    <X className="mr-1 h-3 w-3" />
                    Paid
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {resource.description}
        </p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <a 
              href={resource.websiteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="mr-1 h-3 w-3" />
              Website
            </a>
            <a 
              href={resource.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="mr-1 h-3 w-3" />
              GitHub
            </a>
          </div>
          <span className="text-xs text-muted-foreground">
            {resource.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
