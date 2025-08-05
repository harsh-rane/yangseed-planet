'use client';
import { colors } from '@/app/constants/design-style';

interface BlogSectionProps {
  className?: string;
}

interface BlogPost {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ className = '' }) => {
  const blogPosts: BlogPost[] = [
    {
      date: "Aug 17, 2026",
      title: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue",
      excerpt: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis...",
      image: "Nature/Wellness Image 1"
    },
    {
      date: "Aug 17, 2026", 
      title: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue",
      excerpt: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis...",
      image: "Yoga/Meditation Image"
    },
    {
      date: "Aug 17, 2026",
      title: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue",
      excerpt: "Praesent dapibus neque id cursus faucibus tortor neque egestas augue eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis...",
      image: "Healthy Food Image"
    }
  ];

  return (
    <section 
      className={`py-20 lg:py-32 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${colors.blue2} 0%, ${colors.blue3} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-[#52F5E5] to-[#00B1D5] p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 w-full bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 font-inter text-sm text-center px-4">
                    {post.image}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p 
                  className="text-[#BED1FF] font-inter text-sm"
                >
                  {post.date}
                </p>
                
                <h3 
                  className="text-white font-inter font-semibold group-hover:text-[#52F5E5] transition-colors duration-300"
                  style={{
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '1.4'
                  }}
                >
                  {post.title}
                </h3>
                
                <p 
                  className="text-[#BED1FF] font-inter"
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    lineHeight: '1.6'
                  }}
                >
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-[#52F5E5] font-inter font-medium text-sm hover:text-white transition-colors duration-300">
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="inline-flex items-center px-8 py-4 text-white font-inter font-semibold rounded-full border-2 border-white hover:bg-white hover:text-[#001122] transition-all duration-300"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)'
            }}
          >
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;