// Blog.jsx — Main page composer
import BlogHero from "../components/resources-components/BlogHero";
import BlogFilter from "../components/resources-components/BlogFilter";
import BlogLatestArticles from "../components/resources-components/BlogLatestArticles";
import BlogTrendingTopics from "../components/resources-components/BlogTrendingTopics";
import BlogPopularPosts from "../components/resources-components/BlogPopularPosts";
import BlogFeaturedArticles from "../components/resources-components/BlogFeaturedArticles";
import BlogNewsletter from "../components/resources-components/BlogNewsLetter";
import PageWrapper from "../components/common/PageWrapper";

const Blog = ({ data = {} }) => {
    const {
        hero = {},
        filters = [],
        latestArticles = {},
        trendingTopics = {},
        categories = {},
        popularPosts = {},
        popularPostsFeatured = {},
        featuredArticles = {},
        newsletter = {},
    } = data;

    return (
        <PageWrapper
            className="blog-page"
            style={{
                fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                background: "#ffffff",
                minHeight: "100vh",
                paddingTop: "60px",
            }}
        >
            <style>{`
                .blog-main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 60px;
                    margin-bottom: 60px;
                }
                @media (max-width: 1100px) {
                    .blog-main-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                }
            `}</style>

            <div className="container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "40px 24px" }}>
                {/* Hero: Blog title + Featured post banner */}
                <BlogHero data={hero} />

                {/* Category filter tabs */}
                <BlogFilter filters={filters} />

                {/* 3-column main content */}
                <div className="blog-main-grid">
                    {/* LEFT: Latest Articles */}
                    <BlogLatestArticles data={latestArticles} />

                    {/* CENTER: Trending Topics + Categories */}
                    <BlogTrendingTopics trending={trendingTopics} categories={categories} />

                    {/* RIGHT: Popular Posts (compact + featured) */}
                    <BlogPopularPosts compact={popularPosts} featured={popularPostsFeatured} />
                </div>

                {/* Featured Articles — full width 3-col grid */}
                <BlogFeaturedArticles data={featuredArticles} />

                {/* Newsletter strip */}
                <BlogNewsletter data={newsletter} />
            </div>
        </PageWrapper>
    );
};

export default Blog;