// blogData.js — All content for the Blog page

export const blogData = {
    hero: {
        title: "UGATE BLOG",
        subtitle: "Tech & Security Insights",
        featuredPost: {
            id: "future-cybersecurity",
            title: "The Future of Cybersecurity: Trends and Innovations",
            excerpt: "Explore the latest trends and innovations in cybersecurity to protect your data.",
            image: "/blog-hero-section.png",
            href: "/blog/future-cybersecurity",
        },
    },

    filters: ["All", "Technology", "Cybersecurity", "Privacy"],

    latestArticles: {
        title: "Latest Articles",
        viewAllHref: "/blog/all",
        articles: [
            {
                id: "ai-everyday-life",
                title: "AI in Everyday Life: Benefits and Challenges",
                excerpt: "Discover how AI is transforming daily life and understand the challenges it brings.",
                image: "/post.png",
                date: "April 24, 2024",
                author: "Admin",
                category: "Technology",
                href: "/blog/ai-everyday-life",
            },
            {
                id: "secure-online-banking",
                title: "Top 5 Tips for Secure Online Banking",
                excerpt: "Learn essential tips to protect your online banking transactions from cyber threats.",
                image: "/post.png",
                date: "April 20, 2024",
                author: "Admin",
                category: "Cybersecurity",
                href: "/blog/secure-online-banking",
            },
            {
                id: "protect-pc-malware",
                title: "How to Protect Your PC from Malware",
                excerpt: "Essential steps to safeguard your computer from dangerous malware attacks.",
                image: "/post.png",
                date: "April 15, 2024",
                author: "Admin",
                category: "Cybersecurity",
                href: "/blog/protect-pc-malware",
            },
        ],
    },

    trendingTopics: {
        title: "Trending Topics",
        topics: [
            { label: "Cybersecurity", href: "/blog/tag/cybersecurity" },
            { label: "AI", href: "/blog/tag/ai" },
            { label: "DataPrivacy", href: "/blog/tag/data-privacy" },
        ],
        viewAllHref: "/blog/tags",
    },

    categories: {
        title: "Categories",
        viewAllHref: "/blog/categories",
        items: [
            { label: "Cybersecurity", count: 12, href: "/blog/category/cybersecurity" },
            { label: "Technology", count: 8, href: "/blog/category/technology" },
            { label: "Privacy", count: 6, href: "/blog/category/privacy" },
        ],
    },

    popularPosts: {
        title: "Popular Posts",
        posts: [
            {
                id: "password-management",
                title: "Effective Password Management Tips",
                image: "/post.png",
                date: "April 10, 2024",
                author: "Admin",
                href: "/blog/password-management",
            },
            {
                id: "smartphone-security",
                title: "Ensuring Your Smartphone's Security",
                image: "/post.png",
                date: "April 1, 2024",
                author: "Admin",
                href: "/blog/smartphone-security",
            },
        ],
    },

    popularPostsFeatured: {
        title: "Popular Posts",
        viewAllHref: "/blog/popular",
        post: {
            id: "password-management-featured",
            title: "Effective Password Management Tips",
            image: "/post.png",
            date: "April 10, 2024",
            author: "Admin",
            href: "/blog/password-management",
        },
    },

    featuredArticles: {
        title: "Featured Articles",
        articles: [
            {
                id: "best-vpns",
                title: "Best VPNs for Privacy and Security",
                image: "/post.png",
                date: "April 5, 2024",
                author: "Admin",
                href: "/blog/best-vpns",
            },
            {
                id: "two-factor-auth",
                title: "Understanding Two-Factor Authentication",
                image: "/post.png",
                date: "March 25, 2024",
                author: "Admin",
                href: "/blog/two-factor-auth",
            },
            {
                id: "ai-cybersecurity",
                title: "How AI is Transforming Cybersecurity",
                image: "/post.png",
                date: "March 20, 2024",
                author: "Admin",
                href: "/blog/ai-cybersecurity",
            },
        ],
    },

    newsletter: {
        title: "Subscribe to our Newsletter",
        subtitle: "Get the latest updates delivered to your inbox.",
        placeholder: "Enter your email...",
        buttonLabel: "Subscribe",
    },
};