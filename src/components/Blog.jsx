import React, { useState, useEffect } from 'react';
import blogData from '../data/blogs.json';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogData);
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto max-w-300 px-4">
                
                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-primary-dark">Latest Fashion News</h2>
                    <div className="h-1 w-16 bg-primary-light mt-2 mx-auto md:mx-0"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((post) => (
                        <article key={post.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl mb-5 aspect-16/10">
                                <img 
                                    src={post.imageUrl} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-primary-light">
                                    <span>{post.subtitle}</span>
                                    <span className="text-gray-400">{post.date}</span>
                                </div>
                                
                                <h3 className="font-poppins  text-base font-semibold text-primary-dark leading-tight group-hover:text-primary-light transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                
                                <p className="font-poppins text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <button className="pt-2 text-xs font-bold uppercase tracking-tighter border-b-2 border-primary-dark hover:border-primary-light transition-all">
                                    Read Article
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
