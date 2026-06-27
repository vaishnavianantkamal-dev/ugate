import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  helpCenterMeta,
  helpCategories,
  popularArticles,
  supportChannels,
} from "../data/helpCenterData";
import PageWrapper from "../components/common/PageWrapper";

// ── Responsive hook ────────────────────────────────────────────────────────────

const useIsMobile = (breakpoint = 600) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
};

// ── Icons ─────────────────────────────────────────────────────────────────────

const CategoryIcon = ({ type, size = 36 }) => {
  const iconStyle = { width: size, height: size, color: "inherit", flexShrink: 0 };
  if (type === "building")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    );
  if (type === "visitor")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  if (type === "billing")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    );
  return null;
};

const SupportIcon = ({ type }) => {
  const s = { width: 20, height: 20 };
  if (type === "email")
    return (
      <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    );
  if (type === "chat")
    return (
      <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    );
  return null;
};

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSearch?.(query); }}
      style={{ display: "flex", alignItems: "center", width: "100%", position: "relative" }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "18px 24px",
          paddingRight: "100px",
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.05)",
          color: "#ffffff",
          fontSize: "1rem",
          outline: "none",
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.3s ease",
        }}
      />
      <button
        type="submit"
        style={{
          position: "absolute",
          right: "8px",
          top: "8px",
          bottom: "8px",
          padding: "0 24px",
          background: "#ffffff",
          color: "#000000",
          border: "none",
          borderRadius: "100px",
          fontSize: "0.85rem",
          fontWeight: 700,
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          textTransform: "uppercase"
        }}
      >
        Search
      </button>
    </form>
  );
};

const CategoryCard = ({ category, index, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        padding: isMobile ? "24px" : "32px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "none",
        borderColor: hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "24px" }}>
        <div style={{ 
            background: "rgba(255,255,255,0.05)", 
            padding: "12px", 
            borderRadius: "12px",
            color: "#ffffff"
        }}>
            <CategoryIcon type={category.icon} size={24} />
        </div>
        <h3 style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "1.2rem" : "1.4rem", 
            fontWeight: 700, 
            color: "#ffffff", 
            margin: 0 
        }}>
          {category.title}
        </h3>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
        {category.articles.map((article) => (
          <li key={article.label}>
            <a
              href={article.href}
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem", 
                color: "#888", 
                textDecoration: "none",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#888"; }}
            >
              {article.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const PopularArticles = ({ articles, isMobile }) => (
  <div>
    <h2 style={{ 
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "2.5rem", 
        fontWeight: 400, 
        color: "#ffffff", 
        marginBottom: "32px",
        letterSpacing: "1px",
        textTransform: "uppercase"
    }}>
      Popular Articles
    </h2>
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
      {articles.map((article) => (
        <li key={article.label} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{ 
              width: "6px", 
              height: "6px", 
              borderRadius: "50%", 
              background: "#ffffff", 
              marginTop: "10px",
              flexShrink: 0 
          }} />
          <a
            href={article.href || "#"}
            style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.1rem", 
                color: "#ffffff", 
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            {article.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SupportButton = ({ ch }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={ch.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 24px",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "100px",
        fontSize: "0.9rem",
        fontWeight: 600,
        textDecoration: "none",
        background: hovered ? "#ffffff" : "transparent",
        color: hovered ? "#000000" : "#ffffff",
        transition: "all 0.3s ease",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <SupportIcon type={ch.icon} />
      {ch.label}
    </a>
  );
};

const SupportSection = ({ channels }) => (
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", margin: "0 0 8px" }}>
      Still Need Help?
    </h2>
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#888", marginBottom: "24px" }}>
      Our support team is here to guide you.
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
      {channels.map((ch) => (
        <SupportButton key={ch.label} ch={ch} />
      ))}
    </div>
  </div>
);

const HelpActions = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ background: "#ffffff", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
          Direct Support
        </h3>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#666", marginBottom: "20px" }}>
          Get in touch with us directly.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <a href="mailto:support@ugate.in" style={{ textDecoration: "none", color: "#000000" }}>
            <div style={{ background: "#000000", color: "#ffffff", padding: "12px", borderRadius: "12px" }}>
              <SupportIcon type="email" />
            </div>
            <p style={{ fontSize: "0.75rem", marginTop: "8px", fontWeight: 700, textTransform: "uppercase" }}>Email</p>
          </a>
          <div style={{ cursor: "pointer", color: "#000000" }} onClick={() => alert("Live Chat is initializing...")}>
            <div style={{ background: "#000000", color: "#ffffff", padding: "12px", borderRadius: "12px" }}>
              <SupportIcon type="chat" />
            </div>
            <p style={{ fontSize: "0.75rem", marginTop: "8px", fontWeight: 700, textTransform: "uppercase" }}>Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpCenter = ({
  meta = helpCenterMeta,
  categories = helpCategories,
  articles = popularArticles,
  channels = supportChannels,
  onSearch,
}) => {
  const isMobile = useIsMobile(640);

  return (
    <PageWrapper className="help-center-page" style={{ minHeight: "100vh", background: "#000000", fontFamily: "'DM Sans', sans-serif", color: "#ffffff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: isMobile ? "120px 20px" : "140px 40px" }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: isMobile ? "60px" : "80px" }}
        >
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: isMobile ? "3.5rem" : "6rem",
            fontWeight: 400,
            color: "#ffffff",
            letterSpacing: "2px",
            lineHeight: 0.9,
            marginBottom: "24px",
            textTransform: "uppercase"
          }}>
            {meta.title}
          </h1>
          <p style={{ 
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "1rem" : "1.2rem", 
            color: "#888", 
            margin: "0 auto 40px", 
            maxWidth: "600px",
            lineHeight: 1.6
          }}>
            {meta.subtitle}
          </p>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <SearchBar placeholder={meta.searchPlaceholder} onSearch={onSearch} />
          </div>
        </motion.div>

        <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "20px" : "32px",
            marginBottom: "80px"
        }}>
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} isMobile={isMobile} />
          ))}
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
          gap: isMobile ? "60px" : "80px",
          alignItems: "start"
        }}>
            <div>
                <PopularArticles articles={articles} isMobile={isMobile} />
            </div>
            <div style={{ 
                background: "rgba(255,255,255,0.03)", 
                padding: "40px", 
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.06)"
            }}>
                <SupportSection channels={channels} />
                <HelpActions />
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HelpCenter;