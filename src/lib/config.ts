
/**
 * Global Dev Library Configuration
 * 
 * This file contains configuration settings for the application.
 * Change dataSource to 'supabase' when integrating with Supabase.
 */

export const config = {
  // Data source: 'static' (uses data.ts) or 'supabase' (uses Supabase integration)
  dataSource: 'static',
  
  // Application metadata
  appName: 'Global Dev Library',
  appDescription: 'A comprehensive resource hub for web developers',
  
  // Supabase configuration (for when dataSource is set to 'supabase')
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
    
    // Table names
    tables: {
      resources: 'resources',
      categories: 'categories'
    }
  }
};
