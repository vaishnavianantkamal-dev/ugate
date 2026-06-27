// BlogTrendingTopics.jsx
import { Hash, Folder } from "lucide-react";

const BlogTrendingTopics = ({ trending = {}, categories = {} }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Trending Topics */}
            <div>
                <h3 style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem", 
                    fontWeight: 700, 
                    color: "#111111", 
                    margin: "0 0 24px 0",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px"
                }}>
                    {trending.title || "Trending Topics"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "24px" }}>
                    {(trending.topics || []).map((topic) => (
                        <a
                            key={topic.label}
                            href={topic.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "16px",
                                padding: "12px 16px", borderRadius: "8px",
                                textDecoration: "none", color: "#444444",
                                fontSize: "0.95rem", fontWeight: 500,
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#f5f5f5";
                                e.currentTarget.style.color = "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#444444";
                            }}
                        >
                            <Hash size={16} color="#000000" />
                            {topic.label}
                        </a>
                    ))}
                </div>
                <a
                    href={trending.viewAllHref}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "8px", padding: "12px 20px", borderRadius: "8px",
                        background: "#ffffff", color: "#000000",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem", fontWeight: 600,
                        textDecoration: "none", width: "100%",
                        boxSizing: "border-box",
                        transition: "all 0.2s ease",
                        border: "1px solid #e0e0e0"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
                >
                    View All Topics
                </a>
            </div>

            {/* Categories */}
            <div>
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    marginBottom: "24px",
                }}>
                    <h3 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1rem", 
                        fontWeight: 700, 
                        color: "#111111", 
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "1.5px"
                    }}>
                        {categories.title || "Categories"}
                    </h3>
                    <a href={categories.viewAllHref} style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem", 
                        color: "#111111", 
                        textDecoration: "none",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                    }}>
                        View All <span style={{ fontSize: "1.2rem" }}>→</span>
                    </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {(categories.items || []).map((cat) => (
                        <a
                            key={cat.label}
                            href={cat.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "16px",
                                padding: "12px 16px", borderRadius: "8px",
                                textDecoration: "none", color: "#444444",
                                fontSize: "0.95rem", fontWeight: 500,
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#f5f5f5";
                                e.currentTarget.style.color = "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#444444";
                            }}
                        >
                            <Folder size={16} color="#000000" />
                            <span style={{ flexGrow: 1 }}>{cat.label}</span>
                            <span style={{
                                fontSize: "0.85rem",
                                color: "#888",
                                fontWeight: 600
                            }}>
                                ({cat.count})
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTrendingTopics;