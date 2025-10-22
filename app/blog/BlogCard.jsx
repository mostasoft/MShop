import React from "react";

const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
    <div className="relative overflow-hidden">
        <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/f59e0b/ffffff?text=MShop+Blog"; }}
        />
        <span className="absolute top-3 right-3 bg-amber-500 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full shadow-md">
            {post.category}
        </span>
    </div>

    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition duration-300 cursor-pointer">
        {post.title}
      </h2>
      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-sm text-gray-500">
        <div className="flex items-center space-x-3">
            <UserIcon className="w-4 h-4 text-amber-500" />
            <span>{post.author}</span>
        </div>
        <div className="flex items-center space-x-3">
            <ClockIcon className="w-4 h-4 text-amber-500" />
            <span>{post.readingTime}</span>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
