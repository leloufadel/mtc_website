"use client";

import { useState, useEffect } from 'react';
import { Blog } from '@/types/blog';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchBlog(params.id as string);
    }
  }, [params.id]);

  const fetchBlog = async (id: string) => {
    try {
      const response = await fetch(`/api/blogs/${id}?includeMedia=true`);
      const data = await response.json();
      
      if (data.success) {
        setBlog(data.data);
      } else {
        setError(data.error || 'Article non trouvé');
      }
    } catch (err) {
      setError('Erreur de connexion au serveur');
      console.error('Error fetching blog:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Chargement de l'article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {error || 'Article non trouvé'}
            </h1>
            <Link
              href="/actualites"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour aux actualités
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/actualites"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour aux actualités
        </Link>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {blog.title}
            </h1>
            {/* test Image: */}
            {/* <div>
              <p>ImageOrigin:</p>
            <Image src={`https://website.focus.sfo3.digitaloceanspaces.com/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg`} alt="Blog Image" width={100} height={100} />
            </div>
            <p>Imagecdn:</p>
            <Image src={`https://website.focus.sfo3.cdn.digitaloceanspaces.com/blog-media/1761043468604-nuic2p4ipy-dg-mtc-aghdhefna-eyih.jpeg`} alt="Blog Image" width={100} height={100} /> */}
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <time className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(blog.created_at)}
              </time>
              
              {blog.author && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Par {blog.author}
                  </div>
                </>
              )}
              
              {blog.updated_at && blog.updated_at !== blog.created_at && (
                <>
                  <span>•</span>
                  <span className="text-sm italic">
                    Mis à jour le {formatDate(blog.updated_at)}
                  </span>
                </>
              )}
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-700 mt-8 rounded-full" />
          </header>

          {/* Media Gallery */}
          {blog.media && blog.media.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Galerie</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blog.media.map((media, index) => (
                  <div 
                    key={media.id} 
                    className={`${
                      index === 0 && blog.media!.length % 2 !== 0 ? 'md:col-span-2' : ''
                    } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow`}
                  >
                    {media.media_type === 'image' ? (
                      <img
                        src={media.url}
                        alt={media.file_name}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={media.url}
                        controls
                        className="w-full h-auto"
                        preload="metadata"
                      >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground whitespace-pre-wrap leading-relaxed">
              {blog.content}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link
                href="/actualites"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Voir toutes les actualités
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contactez-Nous
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

