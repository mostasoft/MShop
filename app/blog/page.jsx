"use client";

import React, { useState, useMemo } from "react";
import MShopBlogHero from "./BlogHero";
import MShopBlogFilters from "./BlogFilter";
import BlogCard from "./BlogCard";

const blogPosts = [
  { id: 1, title: '5 E-commerce Trends Shaping 2024 Holiday Sales', excerpt: 'Explore the key digital shifts, from AI-driven personalization to sustainable packaging, that will define a successful holiday season for online retailers.', category: 'Trends', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=E-commerce+Trends', date: 'Oct 20, 2025', author: 'Alex J.', readingTime: '7 min read' },
  { id: 2, title: 'The Ultimate Guide to Product Photography for Small Businesses', excerpt: 'Learn how to capture high-quality images with minimal budget, using natural light and smart phone setups to boost conversion rates.', category: 'Marketing', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Photography+Tips', date: 'Sep 15, 2025', author: 'Maria K.', readingTime: '5 min read' },
  { id: 3, title: 'Mastering SEO: The Hidden Secrets of High-Ranking Product Pages', excerpt: 'Deep dive into technical SEO and content strategy to get your products discovered organically on search engines like Google and Bing.', category: 'SEO', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=SEO+Mastery', date: 'Aug 28, 2025', author: 'Jordan D.', readingTime: '10 min read' },
  { id: 4, title: 'Building Loyalty: Beyond Discounts and Coupon Codes', excerpt: 'Discover genuine strategies for fostering long-term customer relationships and increasing lifetime value without relying solely on price cuts.', category: 'Strategy', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Customer+Loyalty', date: 'Jul 10, 2025', author: 'Sarah L.', readingTime: '6 min read' },
  { id: 5, title: 'The Future of Mobile Commerce: What You Need to Know', excerpt: 'Mobile transactions are soaring. We examine the design and payment optimizations required to stay competitive in m-commerce.', category: 'Trends', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Mobile+Commerce', date: 'Jun 1, 2025', author: 'Alex J.', readingTime: '8 min read' },
  { id: 6, title: 'Content Marketing for E-commerce: Creating Engaging Product Stories', excerpt: 'Move beyond basic descriptions and craft stories that resonate with your target audience, driving both traffic and sales.', category: 'Marketing', imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Content+Stories', date: 'May 5, 2025', author: 'Jordan D.', readingTime: '7 min read' },
];

const MShopBlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <MShopBlogHero />
      <MShopBlogFilters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">
          {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`} ({filteredPosts.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => <BlogCard key={post.id} post={post} />)
          ) : (
            <p className="col-span-full text-center text-xl text-gray-600 py-10">
              No articles found matching your criteria.
            </p>
          )}
        </div>
      </main>
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} MShop. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MShopBlogPage;
