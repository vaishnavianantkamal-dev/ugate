import { Link } from "react-router-dom";
import {
    footerPlatformLinks,
    footerCompanyLinks,
    socialLinks,
    companyAddress,
} from "../../data/mockData";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">

                    {/* Brand Column */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <Link to="/" className="logo">
                                <img
                                    src="/ugate-black.jpeg"
                                    alt="Urbangate Logo"
                                    className="w-36 h-9 cursor-pointer"
                                />
                            </Link>
                        </div>
                        <p className="footer-description">
                            Smart Society Management &amp; Security Platform for modern
                            residential buildings.
                        </p>
                        <div className="footer-tagline">Smart Security. Smart Living.</div>
                        <div className="footer-certification">
                            <img src="/DPIIT.jpeg" alt="DPIIT Certification" className="dpiit-logo" />
                        </div>
                        <div className="footer-connect">
                            <div className="footer-social">
                                {socialLinks.map((s) => (
                                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                                        <i className={s.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div className="footer-column">
                        <h4>Platform</h4>
                        <ul className="footer-links">
                            {footerPlatformLinks.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            {footerCompanyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="footer-column">
                        <h4>Address</h4>
                        <div className="footer-address">
                            <p><strong>{companyAddress.name}</strong></p>
                            <p>{companyAddress.registration}</p>
                            <p>{companyAddress.cin}</p>
                            <p><strong>{companyAddress.addressLabel}</strong></p>
                            <p>{companyAddress.address}</p>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom with Map */}
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    gap: "20px", 
                    marginTop: "10px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    flexWrap: "wrap"
                }}>
                    <div style={{ flex: "1 1 300px" }}>
                        <div className="footer-bottom" style={{ textAlign: "left", padding: 0, border: "none" }}>
                            <p style={{ color: "white", fontSize: "0.85rem", margin: 0 }}>™ 2026 urbangate. All rights reserved.</p>
                            <div className="footer-disclaimer" style={{ margin: "4px 0 0" }}>
                                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", margin: 0 }}>
                                    <strong>Disclaimer:</strong> Urbangate does not take security
                                    decisions or manage existing security services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map on the Right - Smaller */}
                    <div style={{ flex: "0 0 280px", height: "120px", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.124372584149!2d73.7661555759714!3d20.003314522197175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb002e1c940b%3A0xc3c5f49202302302!2sRoongta%20Futurex!5e0!3m2!1sen!2sin!4v1714492000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}