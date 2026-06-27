import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Society Secretary",
        text: "This app has been a lifesaver! Managing maintenance bills and visitor logs used to take hours, but now it's completely automated.",
        avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
        id: 2,
        name: "Priya Patel",
        role: "Resident",
        text: "I love how user-friendly this app is! Approving visitors from my phone is so easy, and I feel much more secure.",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: 3,
        name: "Amit Kumar",
        role: "Security Head",
        text: "The gate pass management feature is brilliant. It makes our job at the main gate 10x faster and eliminates paperwork entirely.",
        avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
        id: 4,
        name: "Sneha Desai",
        role: "Treasurer",
        text: "Real-time accounting has brought so much transparency to our society's finances. Highly recommend this platform to all!",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Resident",
        text: "Raising complaints is finally simple. The committee actually responds now because everything is tracked digitally.",
        avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
        id: 6,
        name: "Neha Gupta",
        role: "Committee Member",
        text: "We tried other apps before, but this one is by far the best. Intuitive, fast, and covers every single society need.",
        avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
        id: 7,
        name: "Arjun Verma",
        role: "Resident",
        text: "It's made scheduling amenities and checking notices a breeze. Absolutely love it. Best app for societies.",
        avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
        id: 8,
        name: "Kavita Rao",
        role: "Society Chairman",
        text: "Simple yet so powerful! I love how I can easily oversee the entire society operations at a glance from anywhere.",
        avatar: "https://i.pravatar.cc/150?img=22",
    },
    {
        id: 9,
        name: "Suresh Raina",
        role: "Estate Manager",
        text: "Efficient and reliable. The automation features have cut our manual work by 70%. Best investment for our complex.",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 10,
        name: "Anjali Mehta",
        role: "Homeowner",
        text: "Paying maintenance bills used to be a hassle. Now it takes 2 minutes. The UI is very clean and easy to use.",
        avatar: "https://i.pravatar.cc/150?img=26",
    }
];

const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(5, 10);

const TestimonialCard = ({ t }) => (
    <div style={{
        minWidth: "clamp(260px, 75vw, 320px)",
        width: "clamp(260px, 75vw, 320px)",
        background: "#ffffff", 
        borderRadius: "16px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: "1.5px solid #000000",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        flexShrink: 0,
    }}>
        <div style={{ display: "flex", gap: "2px" }}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
        <p style={{ fontSize: "0.85rem", color: "#222", lineHeight: 1.4, flex: 1, fontStyle: "italic", whiteSpace: "normal" }}>
            "{t.text}"
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px" }}>
            <img 
                src={t.avatar} 
                alt={t.name}
                style={{ 
                    width: "32px", 
                    height: "32px", 
                    borderRadius: "50%", 
                    objectFit: "cover",
                    filter: "grayscale(100%)" 
                }} 
            />
            <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#000000" }}>{t.name}</div>
                <div style={{ fontSize: "0.7rem", color: "#666" }}>{t.role}</div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section style={{ padding: "80px 0", background: "#ffffff", overflow: "hidden" }}>
            <div className="container" style={{ textAlign: "center", marginBottom: "50px" }}>
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#000", letterSpacing: "-0.02em" }}
                >
                    See what our users say about us
                </motion.h2>
            </div>

            {/* Row 1: Moving Right to Left */}
            <div style={{ overflow: "hidden", display: "flex", marginBottom: "20px" }}>
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ display: "flex", gap: "40px", whiteSpace: "normal" }}
                >
                    {[...firstRow, ...firstRow].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} t={t} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Moving Left to Right */}
            <div style={{ overflow: "hidden", display: "flex" }}>
                <motion.div 
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ display: "flex", gap: "40px", whiteSpace: "normal" }}
                >
                    {[...secondRow, ...secondRow].map((t, i) => (
                        <TestimonialCard key={`${t.id}-${i}`} t={t} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
