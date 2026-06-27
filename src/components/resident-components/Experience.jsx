// // Experience.jsx
// import { motion } from "framer-motion";
// import { Megaphone, Wallet } from "lucide-react";

// const iconMap = {
//     megaphone: Megaphone,
//     wallet: Wallet,
// };

// const Experience = ({ data = {} }) => {
//     const {
//         bannerImage = "",
//         title = "",
//         subtitle = "",
//         items = [],
//     } = data;

//     return (
//         <section
//             style={{
//                 position: "relative",
//                 width: "100%",
//                 overflow: "hidden",
//                 background: "#f0f2f8",
//             }}
//         >
//             <style>{`
//                 .experience-banner {
//                     position: absolute;
//                     inset: 0;
//                     background-size: cover;
//                     background-position: center right;
//                     background-repeat: no-repeat;
//                     z-index: 0;
//                 }

//                 /* On mobile: crop from left, show only right side (phones) */
//                 @media (max-width: 900px) {
//                     .experience-banner {
//                         background-position: right center;
//                         background-size: 130%;
//                     }
//                     .experience-layout {
//                         grid-template-columns: 1fr !important;
//                     }
//                     .experience-right { display: none !important; }
//                 .experience-left {
//                         padding: 48px 24px !important;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .experience-banner {
//                         background-position: right top;
//                         background-size: 160%;
//                     }
//                 }
//             `}</style>

//             {/* Full-width background banner */}
//             {bannerImage && (
//                 <div
//                     className="experience-banner"
//                     style={{ backgroundImage: `url("${bannerImage}")` }}
//                 />
//             )}

//             {/* Overlay — stronger on mobile so text stays readable */}
//             <div
//                 style={{
//                     position: "absolute",
//                     inset: 0,
//                     zIndex: 1,
//                 }}
//             />

//             {/* Two-column layout */}
//             <div
//                 className="experience-layout"
//                 style={{
//                     position: "relative",
//                     zIndex: 2,
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     minHeight: "520px",
//                 }}
//             >
//                 {/* LEFT: Text + Feature Cards */}
//                 <div
//                     className="experience-left"
//                     style={{ padding: "64px 48px 64px 56px" }}
//                 >
//                     {/* Title */}
//                     <motion.h2
//                         initial={{ opacity: 0, y: 16 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//                         style={{
//                             fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
//                             fontWeight: 800,
//                             color: "#111",
//                             letterSpacing: "-0.03em",
//                             marginBottom: "8px",
//                             lineHeight: 1.2,
//                         }}
//                     >
//                         {title}
//                     </motion.h2>

//                     {/* Subtitle */}
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: 0.1 }}
//                         style={{
//                             fontSize: "0.9rem",
//                             color: "#666",
//                             marginBottom: "36px",
//                             lineHeight: 1.5,
//                         }}
//                     >
//                         {subtitle}
//                     </motion.p>

//                     {/* Feature Items */}
//                     <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//                         {items.map((item, i) => {
//                             const Icon = iconMap[item.icon] || Megaphone;
//                             return (
//                                 <motion.div
//                                     key={item.id}
//                                     initial={{ opacity: 0, x: -16 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
//                                     style={{
//                                         display: "flex",
//                                         gap: "20px",
//                                         alignItems: "flex-start",
//                                         background: "rgba(255,255,255,0.85)",
//                                         padding: "24px",
//                                         borderRadius: "16px",
//                                         backdropFilter: "blur(8px)",
//                                     }}
//                                 >
//                                     {/* Icon */}
//                                     <div
//                                         style={{
//                                             width: "52px",
//                                             height: "52px",
//                                             borderRadius: "12px",
//                                             background: "#e8eaf0",
//                                             display: "flex",
//                                             alignItems: "center",
//                                             justifyContent: "center",
//                                             flexShrink: 0,
//                                         }}
//                                     >
//                                         <Icon size={26} color="#1e2235" strokeWidth={2} />
//                                     </div>

//                                     {/* Text */}
//                                     <div>
//                                         <p
//                                             style={{
//                                                 fontSize: "1.1rem",
//                                                 fontWeight: 700,
//                                                 color: "#111",
//                                                 margin: "0 0 8px 0",
//                                                 lineHeight: 1.3,
//                                             }}
//                                         >
//                                             {item.title}
//                                         </p>
//                                         <p
//                                             style={{
//                                                 fontSize: "0.88rem",
//                                                 color: "#555",
//                                                 margin: 0,
//                                                 lineHeight: 1.65,
//                                             }}
//                                         >
//                                             {item.description}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* RIGHT: empty — phones show through bannerImage */}
//                 <div className="experience-right" style={{ position: "relative", minHeight: "520px" }} />
//             </div>
//         </section>
//     );
// };

// export default Experience;


// Experience.jsx
import { motion } from "framer-motion";
import { Megaphone, Wallet } from "lucide-react";

const iconMap = {
  megaphone: Megaphone,
  wallet: Wallet,
};

const Experience = ({ data = {} }) => {
  const {
    bannerImage = "",
    title = "",
    subtitle = "",
    items = [],
  } = data;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      <style>{`
        .experience-banner {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: right center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        /* Gradient overlay for readability */
        .experience-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.85) 35%,
            rgba(0,0,0,0.3) 60%,
            rgba(0,0,0,0) 100%
          );
        }

        @media (max-width: 900px) {
          .experience-layout {
            grid-template-columns: 1fr !important;
          }

          .experience-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0,0,0,1),
              rgba(0,0,0,0.8)
            );
          }

          .experience-banner {
            background-position: center;
            background-size: cover;
            opacity: 0.25; /* soften image */
          }

          .experience-left {
            padding: 48px 20px !important;
          }
        }
      `}</style>

      {/* Background Image */}
      {bannerImage && (
        <div
          className="experience-banner"
          style={{ backgroundImage: `url("${bannerImage}")` }}
        />
      )}

      {/* Overlay */}
      <div className="experience-overlay" />

      {/* Layout */}
      <div
        className="experience-layout"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "520px",
        }}
      >
        {/* LEFT */}
        <div
          className="experience-left"
          style={{
            padding: "64px 48px",
            maxWidth: "600px",
          }}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              marginBottom: "10px",
            }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#a0a0a0",
              marginBottom: "32px",
              maxWidth: "420px",
            }}
          >
            {subtitle}
          </motion.p>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {items.map((item, i) => {
              const Icon = iconMap[item.icon] || Megaphone;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    background: "#111111",
                    padding: "20px",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "#1a1a1a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color="#ffffff" />
                  </div>

                  {/* Text */}
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        marginBottom: 6,
                        color: "#ffffff",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "#a0a0a0",
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT (empty) */}
        <div />
      </div>
    </section>
  );
};

export default Experience;