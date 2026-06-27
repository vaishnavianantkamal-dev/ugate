// BlogLatestArticles.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1100);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
};

const BlogLatestArticles = ({ data = {} }) => {
    const isMobile = useIsMobile();
    const { title = "Latest Articles", viewAllHref = "#", articles = [] } = data;

    return (
        <div>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>{title}</h3>
                <a href={viewAllHref} style={{ fontSize: "0.82rem", color: "#111", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>View All <span style={{ fontSize: "1.2rem" }}>→</span></a>
            </div>

            {/* Articles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        style={{
                            padding: "24px",
                            border: "1px solid #e0e0e0",
                            borderRadius: "12px",
                            background: "#ffffff",
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "24px",
                            alignItems: "center"
                        }}
                    >
                        {/* Thumbnail */}
                        <div style={{
                            width: "120px", height: "120px", borderRadius: "8px",
                            background: "#f5f5f5", flexShrink: 0, overflow: "hidden",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            border: "1px solid #eaeaea"
                        }}>
                            {article.image ? (
                                <img src={article.image} alt={article.title}
                                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "8px" }} />
                            ) : (
                                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#888", letterSpacing: "1px" }}>POST</span>
                            )}
                        </div>

                        {/* Title + meta + Excerpt */}
                        <div>
                            <a href={article.href} style={{ textDecoration: "none" }}>
                                <h4 style={{
                                    fontSize: "1.1rem", fontWeight: 700, color: "#111",
                                    margin: "0 0 12px 0", lineHeight: 1.4,
                                    transition: "color 0.15s",
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "#555"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "#111"}
                                >
                                    {article.title}
                                </h4>
                            </a>
                            <p style={{ fontSize: "0.75rem", color: "#666", margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                                {article.date} | by {article.author}
                            </p>
                            <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6, margin: 0 }}>
                                {article.excerpt}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogLatestArticles;