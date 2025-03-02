
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { config } from '@/lib/config';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-semibold text-foreground flex items-center space-x-2"
            >
              <span>📚</span>
              <span className="tracking-tight">{config.appName}</span>
            </Link>
          </div>
          
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources..."
                  className="block w-full rounded-md border-0 py-2 pl-10 pr-4 text-sm text-foreground bg-secondary/50 ring-1 ring-inset ring-border/30 placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all duration-200"
                />
              </div>
            </form>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.includes('/categories') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
