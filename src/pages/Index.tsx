import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedHeader from "@/components/AnimatedHeader";
import CategoryCard from "@/components/CategoryCard";
import ResourceCard from "@/components/ResourceCard";
import { getFeaturedCategories, getNewestResources } from "@/lib/data";
import { ChevronRight } from "lucide-react";

const Index: React.FC = () => {
  const featuredCategories = getFeaturedCategories();
  const newestResources = getNewestResources();

  return (
    <Layout>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedHeader
            title="Global Developer Library"
            items={["Web Resources", "Tools", "Libraries", "Collections"]}
            className="mb-6"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive collection of the best web development resources,
            tools, and libraries to accelerate your projects.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/categories"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Featured Categories
          </h2>
          <Link
            to="/categories"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            See all categories
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mb-10 flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Newest Additions
          </h2>
          <Link
            to="/categories"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newestResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
