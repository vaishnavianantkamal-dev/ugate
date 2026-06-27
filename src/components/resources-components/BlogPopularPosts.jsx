// BlogPopularPosts.jsx — compact sidebar list + large featured post
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

const BlogPopularPosts = ({ compact = {}, featured = {} }) => {
    const isMobile = useIsMobile();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Compact list */}
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0, letterSpacing: "1px", textTransform: "uppercase" }}>
                        {compact.title || "Popular Posts"}
                    </h3>
                    <a href={compact.viewAllHref} style={{ fontSize: "0.82rem", color: "#111", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                        View All <span style={{ fontSize: "1.2rem" }}>→</span>
                    </a>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {(compact.posts || []).map((post) => (
                        <a key={post.id} href={post.href} style={{ 
                            display: "flex", gap: "16px", textDecoration: "none", alignItems: "center",
                            padding: "16px", borderRadius: "12px", border: "1px solid #e0e0e0", background: "#ffffff",
                            transition: "all 0.2s ease"
                        }}>
                            {/* Thumbnail */}
                            <div style={{
                                width: "64px", height: "64px", borderRadius: "8px",
                                background: "#f5f5f5", flexShrink: 0, overflow: "hidden",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                border: "1px solid #eaeaea"
                            }}>
                                {post.image ? (
                                    <img src={post.image} alt={post.title}
                                        style={{ width: "100%", height: "100%", objectFit: "contain", padding: "4px" }} />
                                ) : (
                                    <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#888", letterSpacing: "1px" }}>POST</span>
                                )}
                            </div>
                            {/* Text */}
                            <div>
                                <p style={{
                                    fontSize: "0.95rem", fontWeight: 700, color: "#111",
                                    margin: "0 0 8px 0", lineHeight: 1.3,
                                }}>
                                    {post.title}
                                </p>
                                <p style={{ fontSize: "0.7rem", color: "#666", margin: 0, textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                                    {post.date}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Large featured post */}
            {featured.post && (
                <div style={{
                    padding: "32px", borderRadius: "16px", border: "1px solid #e0e0e0", background: "#f9f9f9",
                    display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
                }}>
                    <a href={featured.post.href} style={{ textDecoration: "none", display: "block", width: "100%" }}>
                        {/* Large image */}
                        <div style={{
                            width: "100%", height: "180px", borderRadius: "12px",
                            background: "#eaeaea", overflow: "hidden", marginBottom: "24px",
                            display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            {featured.post.image ? (
                                <img src={featured.post.image} alt={featured.post.title}
                                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "16px" }} />
                            ) : (
                                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#888", letterSpacing: "2px" }}>POST</span>
                            )}
                        </div>
                        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: "0 0 12px 0", lineHeight: 1.4 }}>
                            {featured.post.title}
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "#666", margin: 0, textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                            {featured.post.date} | by {featured.post.author}
                        </p>
                    </a>
                </div>
            )}
        </div>
    );
};

export default BlogPopularPosts;