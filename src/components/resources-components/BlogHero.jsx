// BlogHero.jsx
import { motion } from "framer-motion";

const BlogHero = ({ data = {} }) => {
    const { title = "URBANGATE BLOG", subtitle = "Tech & Security Insights", featuredPost = {} } = data;

    return (
        <div style={{ padding: "40px 0 60px" }}>
            <style>{`
                .blog-hero-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 60px;
                    align-items: center;
                }
                @media (max-width: 1000px) {
                    .blog-hero-layout {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }
            `}</style>
            
            <div className="blog-hero-layout">
                {/* Left: Blog Title & Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div style={{ marginBottom: "16px" }}>
                        <span style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "12px",
                            letterSpacing: "2px",
                            color: "#111111",
                            textTransform: "uppercase",
                            fontWeight: 700
                        }}>
                            {title}
                        </span>
                    </div>
                    
                    <h1 style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                        fontWeight: 800,
                        color: "#111111",
                        letterSpacing: "-0.03em",
                        margin: "0 0 16px 0",
                        lineHeight: 1.1,
                    }}>
                        {subtitle}
                    </h1>
                    <p style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1.1rem", 
                        color: "#555555", 
                        lineHeight: 1.6,
                        margin: "0 0 32px 0",
                        maxWidth: "90%"
                    }}>
                        News, guides and expert perspectives to help you build safer, smarter communities.
                    </p>

                    <button style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 28px",
                        borderRadius: "50px",
                        background: "#000000",
                        color: "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}>
                        Explore Articles 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </motion.div>

                {/* Right: Featured Post Banner */}
                {featuredPost.image && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: "relative",
                            borderRadius: "16px",
                            overflow: "hidden",
                            minHeight: "440px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "flex-end",
                            boxShadow: "0 24px 48px rgba(0,0,0,0.08)"
                        }}
                    >
                        {/* Background image */}
                        <div style={{
                            position: "absolute", inset: 0,
                            backgroundImage: `url("${featuredPost.image}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "grayscale(1) brightness(0.6)",
                            transition: "all 0.5s ease"
                        }} className="featured-img-bg" />

                        {/* Dark gradient overlay for text readability */}
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)",
                            zIndex: 1
                        }} />

                        {/* Content overlay */}
                        <div style={{
                            position: "relative", zIndex: 2,
                            padding: "48px 40px",
                            maxWidth: "480px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            height: "100%"
                        }}>
                            <div>
                                <span style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "10px",
                                    letterSpacing: "2px",
                                    color: "#ffffff",
                                    textTransform: "uppercase",
                                    background: "rgba(255,255,255,0.15)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    padding: "6px 14px",
                                    borderRadius: "4px",
                                    marginBottom: "24px",
                                    display: "inline-block"
                                }}>
                                    FEATURED ARTICLE
                                </span>

                                <h2 style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    letterSpacing: "-0.02em",
                                    margin: "0 0 16px 0",
                                    lineHeight: 1.2,
                                }}>
                                    {featuredPost.title}
                                </h2>
                                <p style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "1rem",
                                    color: "rgba(255,255,255,0.8)",
                                    lineHeight: 1.6,
                                    margin: "0 0 32px 0",
                                }}>
                                    {featuredPost.excerpt}
                                </p>
                            </div>
                            
                            <div style={{ marginTop: "auto" }}>
                                <a href={featuredPost.href} style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    padding: "12px 24px",
                                    borderRadius: "50px",
                                    background: "#ffffff",
                                    color: "#000000",
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                }}>
                                    Read Full Article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BlogHero;