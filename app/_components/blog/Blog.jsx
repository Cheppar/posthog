"use client";

import Link from "next/link";
import { Send } from "lucide-react";

// Static content
const staticContent = {
  mainTitle: "Build Bout Blog",
  explanation: "Stay updated with the latest news, tips, and insights from our community. No blog posts yet, but check back soon for exciting content!",
};

// Placeholder for blog posts (empty for now)
const blogPosts = [];

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black pt-12 md:pt-10 md:pb-4 relative overflow-hidden">
        {/* Background (commented out as in original code) */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"></div>

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Centered text layout */}
          <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
            <h3 className="text-3xl txtBtn font-display font-semibold tracking-tight sm:text-5xl md:text-6xl mb-1">
              {staticContent.mainTitle}
            </h3>
            <p className="text-xl text-gray-200 pt-2 max-w-2xl">
              {staticContent.explanation}
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-6">
             
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl txtBtn font-semibold text-center mb-8">Latest Posts</h2>
          {blogPosts.length === 0 ? (
            <div className="flex flex-col items-center text-center">
              <p className="text-lg text-gray-200 mb-4">No blog posts available yet.</p>
              <p className="text-md text-gray-400 max-w-xl">
                Blogs are incoming! Stay tuned for exciting updates, tips, and insights. Contact us for more information on collaboration / AOB.
              </p>
              <Link
                href="/contact"
                className="yellowbg text-black px-4 py-3 mt-12 rounded-full text-base font-medium transition-colors duration-200 hover:bg-amber-600 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Get Featured
                
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-black border border-amber-500 text-center p-4 rounded-lg transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-xl text-amber-500 font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-200 mb-4">{post.excerpt}</p>
                  <Link
                    href={post.link}
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;