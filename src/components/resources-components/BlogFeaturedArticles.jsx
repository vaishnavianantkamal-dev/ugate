// BlogFeaturedArticles.jsx
import { motion } from "framer-motion";

const BlogFeaturedArticles = ({ data = {} }) => {
    const { title = "Featured Articles", articles = [] } = data;

    return (
        <div style={{ padding: "40px 0" }}>
            <h3 style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2rem", 
                fontWeight: 700, 
                color: "#111111", 
                margin: "0 0 32px 0",
                textTransform: "uppercase",
                letterSpacing: "1px"
            }}>
                {title}
            </h3>

            <div className="featured-articles-grid" style={{
                display: "grid",
                gap: "24px",
            }}>
                <style>{`
                    .featured-articles-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    @media (max-width: 1000px) {
                        .featured-articles-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 768px) {
                        .featured-articles-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        style={{
                            background: "#ffffff",
                            borderRadius: "16px",
                            border: "1px solid #e0e0e0",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        {/* Image */}
                        <div style={{ width: "100%", height: "200px", background: "#f5f5f5", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {article.image ? (
                                <img src={article.image} alt={article.title}
                                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px" }} />
                            ) : (
                                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#888", letterSpacing: "1px" }}>POST</span>
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                            <h4 style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "1.1rem", fontWeight: 700, color: "#111111",
                                margin: "0 0 12px 0", lineHeight: 1.4,
                            }}>
                                {article.title}
                            </h4>
                            <p style={{ 
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.75rem", color: "#666", 
                                margin: "0 0 24px 0",
                                textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600
                            }}>
                                {article.date} | by {article.author}
                            </p>
                            <a
                                href={article.href}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    padding: "12px 24px",
                                    borderRadius: "8px",
                                    background: "#000000",
                                    color: "#ffffff",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                    marginTop: "auto"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "#333333"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "#000000"; }}
                            >
                                Read Article
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogFeaturedArticles;