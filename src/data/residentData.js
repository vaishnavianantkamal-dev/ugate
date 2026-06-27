// residentData.js — All content for the Resident page

export const residentData = {
    hero: {
        bannerImage: "/society-heco-section-1.png", // full-width background image
        title: "For Residents",
        subtitle: "Manage society living from the comfort of your mobile.",
        description:
            "UGATE empowers residents with a powerful mobile ecosystem to handle maintenance payments, visitor approvals, facility bookings, and community engagement with a single tap. Experience a smarter way to live in your society.",
        buttons: [
            { label: "Request Demo →", variant: "outline", href: "/contact" },
            { label: "Explore Features ↓", variant: "filled", href: "/features" },
        ],
    },

    features: {
        heading: {
            line1: "Features",
            line2: "For Residents",
            highlightWord: "Residents", // bold/highlighted word on line2
        },
        subtitle: "Manage society living with your resident app.",
        items: [
            {
                id: "security",
                icon: "shield",
                title: "Smart Security & Visitor Management",
                description: "No more surprise visitors. Full control in your hands.",
                bullets: [
                    "Approve or reject visitors instantly",
                    "Get real-time alerts for every entry",
                    "OTP / QR-based secure access",
                    "Track delivery agents & guests"
                ]
            },
            {
                id: "maintenance",
                icon: "wallet",
                title: "Easy Online Maintenance Payments",
                description: "Say goodbye to cash & manual tracking.",
                bullets: [
                    "Pay society dues via UPI, cards, net banking",
                    "Auto reminders for pending payments",
                    "Download receipts anytime",
                    "Transparent billing system"
                ]
            },
            {
                id: "notices",
                icon: "megaphone",
                title: "Instant Communication & Notices",
                description: "Stay informed, always.",
                bullets: [
                    "Get instant updates from society admin",
                    "Important notices directly on your phone",
                    "Emergency alerts in real-time",
                    "No more missed announcements"
                ]
            },
            {
                id: "complaints",
                icon: "alert-circle",
                title: "Complaint & Service Requests",
                description: "No chasing. Everything tracked digitally.",
                bullets: [
                    "Raise complaints in seconds",
                    "Track status live",
                    "Faster resolution by society staff",
                    "Complete service history"
                ]
            },
            {
                id: "delivery",
                icon: "package",
                title: "Parcel & Delivery Management",
                description: "Your deliveries, always safe.",
                bullets: [
                    "Get notified when parcels arrive",
                    "Secure delivery handling at gate",
                    "Avoid lost/missed deliveries",
                    "Track all packages easily"
                ]
            },
            {
                id: "amenities",
                icon: "calendar",
                title: "Book Amenities Easily",
                description: "Enjoy your society amenities without hassle.",
                bullets: [
                    "Book clubhouse, gym, hall, etc.",
                    "Check availability instantly",
                    "Avoid conflicts & double booking",
                    "Seamless scheduling"
                ]
            },
        ],
    },

    download: {
        text: "Download our app for seamless society management",
        buttons: [
            {
                id: "google",
                label: "GET IT ON\nGoogle Play",
                icon: "google-play",
                href: "#google-play",
                badgeImage: "/play.png",
            },
            {
                id: "apple",
                label: "Download on the\nApp Store",
                icon: "apple",
                href: "#app-store",
                badgeImage: "/apple.png",
            },
        ],
    },

    experience: {
        bannerImage: "/society-middle-section.png", // full-width background image
        title: "Seamless Living Experience",
        subtitle: "Transform your society living with these easy-to-use features.",
        items: [
            {
                id: "notices",
                icon: "megaphone",
                title: "Society Notices & Announcements",
                description:
                    "Never miss an important update or announcement! Stay informed with all your society notices and annies directly on your phone.",
            },
            {
                id: "payments",
                icon: "wallet",
                title: "Online Maintenance Payments",
                description:
                    "Make living easier by paying your maintenance bills online. Quick, secure, and hassle-free payment directly from the app.",
            },
        ],
    },
};