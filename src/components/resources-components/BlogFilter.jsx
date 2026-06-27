// BlogFilter.jsx
import { useState } from "react";
import { Grid } from "lucide-react";

const BlogFilter = ({ filters = [], onFilter }) => {
    const [active, setActive] = useState("All");

    const handleClick = (filter) => {
        setActive(filter);
        onFilter && onFilter(filter);
    };

    return (
        <div className="blog-categories" style={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            margin: "40px 0",
            flexWrap: "wrap",
            gap: "8px",
        }}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => handleClick(filter)}
                    style={{
                        padding: "10px 24px",
                        borderRadius: "6px",
                        border: "none",
                        background: active === filter ? "#000000" : "transparent",
                        color: active === filter ? "#ffffff" : "#444444",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                    }}
                >
                    {filter}
                </button>
            ))}
            <button style={{
                marginLeft: "auto",
                padding: "8px",
                background: "transparent",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                color: "#111111",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                <Grid size={18} />
            </button>
        </div>
    );
};

export default BlogFilter;