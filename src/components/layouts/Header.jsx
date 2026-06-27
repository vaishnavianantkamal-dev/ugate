import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/mockData";
import { ChevronDown } from "lucide-react";

const featuresDropdownItems = [
    { label: "For Residents", href: "/resident" },
    { label: "For Management", href: "/features" },
    { label: "For Security", href: "/security" },
];

const resourcesDropdownItems = [
    { label: "Blog", href: "/blog" },
    { label: "FAQ's", href: "/faq" },
    { label: "Help Center", href: "/help" },
];

const NavDropdown = ({ label, items, isOpen, onToggle, currentPath }) => {
    const ref = useRef(null);
    const activeHrefs = items.map((i) => i.href);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 968);
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) onToggle(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} style={{ position: "relative" }}>
            <button
                onClick={() => onToggle((p) => !p)}
                className={`nav-link${activeHrefs.includes(currentPath) ? " active" : ""}`}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                }}
            >
                {label}
                <ChevronDown
                    size={14}
                    style={{
                        transition: "transform 0.2s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>

            {isOpen && (
                <div
                    style={isMobile ? {
                        padding: "10px 0 10px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        width: "100%",
                        borderLeft: "2px solid #eee",
                        marginTop: "10px"
                    } : {
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                        padding: "6px",
                        minWidth: "180px",
                        zIndex: 1000,
                        animation: "dropdownFadeIn 0.18s ease forwards",
                    }}
                >
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => onToggle(false)}
                            style={{
                                display: "block",
                                padding: "10px 16px",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                color: currentPath === item.href ? "#111" : "#444",
                                background: currentPath === item.href ? "#f5f5f5" : "transparent",
                                transition: "background 0.15s ease",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#f5f5f5"}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                    currentPath === item.href ? "#f5f5f5" : "transparent";
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 968);
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setFeaturesOpen(false);
        setResourcesOpen(false);
    }, [location]);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle')) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [menuOpen]);

    return (
        <>
            <style>{`
                @keyframes dropdownFadeIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
                    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
            `}</style>

            {menuOpen && (
                <div
                    className="nav-overlay"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)', zIndex: 998,
                    }}
                />
            )}

            <nav
                className="navbar"
                style={{
                    background: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.95)",
                    boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                    transition: "all 0.3s ease",
                }}
            >
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="logo">
                            <img
                                src="/ugate-black.jpeg"
                                alt="Urbangate Logo"
                                className="w-36 h-9 cursor-pointer"
                            />
                        </Link>

                        <div className={`nav-menu${menuOpen ? " active" : ""}`} id="navMenu">
                            <button
                                className="nav-close-btn"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close navigation"
                            >
                                <i className="fas fa-times"></i>
                            </button>

                            {navLinks.map((link) => {
                                const label = link.label.trim();

                                if (label === "Features") {
                                    return (
                                        <NavDropdown
                                            key="features"
                                            label="Features"
                                            items={featuresDropdownItems}
                                            isOpen={featuresOpen}
                                            onToggle={setFeaturesOpen}
                                            currentPath={location.pathname}
                                        />
                                    );
                                }

                                if (label === "Resources") {
                                    return (
                                        <NavDropdown
                                            key="resources"
                                            label="Resources"
                                            items={resourcesDropdownItems}
                                            isOpen={resourcesOpen}
                                            onToggle={setResourcesOpen}
                                            currentPath={location.pathname}
                                        />
                                    );
                                }

                                return (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={`nav-link${location.pathname === link.href ? " active" : ""}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <Link 
                                to="/contact" 
                                className="nav-btn header-cta-btn"
                                style={{
                                    padding: "12px 28px",
                                    background: "#111111",
                                    color: "#ffffff",
                                    borderRadius: "50px",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                    border: "1px solid #111111"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                    e.currentTarget.style.color = "#000000";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#000000";
                                    e.currentTarget.style.color = "#ffffff";
                                }}
                            >
                                Get Started
                            </Link>
                            
                            <button
                                className="nav-toggle"
                                id="navToggle"
                                onClick={() => setMenuOpen((prev) => !prev)}
                                aria-label="Toggle navigation"
                                style={{ border: "none", background: "none", cursor: "pointer", fontSize: "1.2rem" }}
                            >
                                <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}