// import { motion } from "framer-motion";
// import { Bell, CreditCard, AlertCircle } from "lucide-react";

// const iconMap = {
//   bell: Bell,
//   "credit-card": CreditCard,
//   "alert-circle": AlertCircle,
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.08,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const ResidentFeature = ({ data = {} }) => {
//   const { heading = {}, subtitle = "", items = [] } = data;

//   return (
//     <section
//       style={{
//         padding: "64px 48px",
//         background: "#ffffff",
//       }}
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.45 }}
//         style={{ marginBottom: "10px" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
//             fontWeight: 700,
//             color: "#1a1a1a",
//             letterSpacing: "-0.02em",
//             lineHeight: 1.25,
//             margin: 0,
//           }}
//         >
//           {heading.line1}
//           <br />
//           {heading.line2 && (
//             <span style={{ fontWeight: 400 }}>
//               {heading.line2.replace(heading.highlightWord, "")}{" "}
//               <span style={{ fontWeight: 800 }}>
//                 {heading.highlightWord}
//               </span>
//             </span>
//           )}
//         </h2>
//       </motion.div>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.4, delay: 0.1 }}
//         style={{
//           fontSize: "0.95rem",
//           color: "#6b7280",
//           marginBottom: "36px",
//           lineHeight: 1.6,
//           maxWidth: "520px",
//         }}
//       >
//         {subtitle}
//       </motion.p>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//           gap: "18px",
//           display: "flex",
//           justifyContent: "center",
//           maxWidth: "90%",
//         }}
//       >
//         {items.map((item) => {
//           const Icon = iconMap[item.icon] || Bell;

//           return (
//             <div
//                 style={{ padding: "20px" }}
//                 className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 bg-gray-50 rounded-xl"
//                 >
//                 <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
//                     <Icon size={24} className="text-gray-900" />
//                 </div>

//                 <p className="text-[25px] font-bold text-gray-900">
//                     {item.title}
//                 </p>

//                 <p className="text-[12px] text-gray-500 col-start-2">
//                     {item.description}
//                 </p>
//             </div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// export default ResidentFeature;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Bell, CreditCard, AlertCircle, Shield, Wallet, Megaphone, Package, Calendar } from "lucide-react";

const iconMap = {
  bell: Bell,
  "credit-card": CreditCard,
  "alert-circle": AlertCircle,
  shield: Shield,
  wallet: Wallet,
  megaphone: Megaphone,
  package: Package,
  calendar: Calendar,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ResidentFeature = ({ data = {} }) => {
  const { heading = {}, subtitle = "", items = [] } = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFeature = items[activeIndex] || items[0];

  return (
    <section
      style={{
        padding: "80px 24px",
        background: "#000000",
      }}
    >
      {/* Header Container - Centered */}
      <div style={{ textAlign: "center", marginBottom: "32px", maxWidth: "800px", margin: "0 auto 32px" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: "16px" }}
        >
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "1px",
              lineHeight: 1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {heading.line1} {heading.line2}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "#a0a0a0",
            lineHeight: 1.6,
            margin: "0 auto",
          }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Cards grid — responsive via CSS */}
      <style>{`
        .resident-feature-layout {
          display: grid;
          grid-template-columns: 450px 1fr;
          gap: 40px;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
        }

        .resident-feature-cards-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .resident-feature-content-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          min-height: 320px;
          position: relative;
          overflow: hidden;
        }

        .resident-feature-content-col::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .resident-feature-card {
          padding: 12px 20px;
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 14px;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .resident-feature-card:hover {
          background: #111111;
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateX(8px);
        }

        .resident-feature-card.active {
          background: #ffffff;
          border-color: #ffffff;
          transform: translateX(12px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
        }

        .resident-feature-card.active p {
          color: #000000;
          font-weight: 700;
        }

        .resident-feature-card.active .icon-box {
          background: rgba(0,0,0,0.08) !important;
        }

        .resident-feature-card.active .icon-box svg {
          color: #000000 !important;
        }

        .feature-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .feature-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          color: #a0a0a0;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        .bullet-icon {
          width: 18px;
          height: 18px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bullet-icon svg {
          width: 10px;
          height: 10px;
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .resident-feature-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature-bullet-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="resident-feature-layout">
        {/* Left Side: Cards */}
        <motion.div
          className="resident-feature-cards-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Bell;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`resident-feature-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="icon-box" style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Icon size={24} color={isActive ? "#000000" : "#ffffff"} strokeWidth={1.5} />
                </div>

                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: isActive ? "#000000" : "#ffffff",
                    margin: 0,
                    transition: "color 0.3s ease"
                  }}>
                    {item.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side: Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="resident-feature-content-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "4px"
            }}>
              <div style={{
                width: "32px",
                height: "2px",
                background: "#ffffff"
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600
              }}>
                Feature Focus
              </span>
            </div>
            
            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#ffffff",
              lineHeight: 1,
              margin: "0 0 6px 0",
              letterSpacing: "1px"
            }}>
              {activeFeature?.title}
            </h3>
            
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#ffffff",
              lineHeight: 1.5,
              margin: "0 0 20px 0",
              fontWeight: 400,
              opacity: 0.8
            }}>
              {activeFeature?.description}
            </p>

            <div style={{
              height: "1px",
              background: "rgba(255, 255, 255, 0.1)",
              margin: "4px 0 20px 0"
            }} />

            <div className="feature-bullet-list">
              {activeFeature?.bullets?.map((bullet, i) => (
                <div key={i} className="feature-bullet-item">
                  <div className="bullet-icon">
                    <svg viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResidentFeature;