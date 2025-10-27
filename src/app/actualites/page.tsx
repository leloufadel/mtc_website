"use client";

import { useState, useEffect } from 'react';
import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
export default function ActualitesPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs?includeMedia=true');
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data);
      } else {
        setError(data.error || 'Erreur lors du chargement des actualités');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Chargement des actualités...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-orange-800/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Nos Actualités
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded-full" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les dernières nouvelles et réalisations de MTC
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Aucune actualité disponible pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/actualites/${blog.id}`}
                  className="group"
                >
                  <article className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Featured Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700">
                      {blog.media && blog.media.length > 0 && blog.media[0].media_type === 'image' ? (
                        <img
                          src={blog.media[0].url}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image 
                            src="/mtc-logo.webp" 
                            width={200} 
                            height={200} 
                            alt="MTC Logo"
                            className="opacity-50"
                          />
                        </div>
                      )}
                      {/* Media count badge */}
                      {blog.media && blog.media.length > 0 && (
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {blog.media.length}
                        </div>
                      )}
                    </div>
                    <div className="h-1 bg-orange-700 w-full"></div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <time>{formatDate(blog.created_at)}</time>
                        {blog.author && (
                          <>
                            <span>•</span>
                            <span>Par {blog.author}</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-orange-600 transition-colors line-clamp-2">
                        {blog.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground line-clamp-3">
                        {truncateContent(blog.content)}
                      </p>

                      {/* Read more link */}
                      <div className="mt-4 flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                        <span>Lire la suite</span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

