'use client';
import React, { useState } from 'react';
import { PageId, NewsItem } from '../types';
import { NEWS_ARTICLES } from '../data/newsData';
import { Search, X, ArrowRight, Calendar, Clock, Newspaper, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'Press Release', 'Innovation', 'Sustainability', 'Global Event'];

  const filteredArticles = NEWS_ARTICLES.filter((item) => {
    const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-20 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="space-y-6 border-b border-[#1C1C24] pb-12">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-3 py-1 rounded inline-block">
          NEWS, PRESS & MEDIA INSIGHTS
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#E8E6E1] font-light max-w-4xl leading-tight">
          Editorial Insights & Corporate Publications
        </h1>

        <p className="text-sm sm:text-base text-[#A09D96] max-w-2xl font-light leading-relaxed">
          Stay informed on product launches, sustainability milestones, financial results, and global Tier-1 automotive partnerships.
        </p>
      </section>

      {/* Category & Search Filter Toolbar */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0E0E12] border border-[#22222A] p-4 rounded-sm">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-medium transition-colors shrink-0 ${
                categoryFilter === cat
                  ? 'bg-[#8B1E24] text-white'
                  : 'bg-[#16161C] text-[#A09D96] hover:text-[#E8E6E1] border border-[#22222E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#A09D96] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search publications..."
            className="w-full bg-[#16161C] border border-[#22222E] rounded py-2 pl-9 pr-4 text-xs text-[#E8E6E1] placeholder-[#716F68] focus:outline-none focus:border-[#8B1E24]"
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group bg-[#0E0E12] border border-[#22222A] hover:border-[#8B1E24]/60 rounded-sm overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between p-6 space-y-4 shadow-lg"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded overflow-hidden border border-[#2A2A38]">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-[#0A0A0E]/90 border border-white/20 px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider text-[#E8E6E1]">
                  {article.category}
                </div>
              </div>

              <div className="flex items-center gap-4 text-[10px] text-[#A09D96] font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#8B1E24]" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#8B1E24]" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#E8E6E1] group-hover:text-[#8B1E24] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs text-[#A09D96] leading-relaxed line-clamp-3">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C1C24] flex items-center justify-between text-xs text-[#E8E6E1] font-medium">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 text-[#8B1E24] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </section>

      {/* Article Detail Full Reading Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#101016] border border-[#2A2A38] rounded-sm max-w-3xl w-full p-8 relative space-y-6 my-8 max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 text-[#A09D96] hover:text-white bg-[#1A1A24] rounded"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8B1E24] bg-[#8B1E24]/20 border border-[#8B1E24]/40 px-2.5 py-0.5 rounded">
                  {activeArticle.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#E8E6E1] font-normal leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="text-xs text-[#A09D96] font-mono">
                  Published: {activeArticle.date} • {activeArticle.readTime}
                </div>
              </div>

              <div className="relative h-64 rounded overflow-hidden border border-[#2A2A38]">
                <img
                  src={activeArticle.heroImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#A09D96] leading-relaxed">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};