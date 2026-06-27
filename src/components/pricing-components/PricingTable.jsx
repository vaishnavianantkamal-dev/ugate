// PricingTable.jsx
import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.5 9l4 4L14.5 5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CrossIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5 5l8 8M13 5l-8 8" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const CellValue = ({ value }) => {
    if (value === true) return <CheckIcon />;
    if (value === false) return <CrossIcon />;
    return (
        <span style={{ fontSize: "0.9rem", color: "#111", fontWeight: 400 }}>
            {value}
        </span>
    );
};

const PricingTable = ({ data = {} }) => {
    const { columns = [], rows = [] } = data;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
                maxWidth: "860px",
                margin: "0 auto 60px",
                padding: "0 24px",
                overflowX: "auto",
            }}
        >
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    background: "transparent",
                    fontSize: "0.9rem",
                }}
            >
                {/* Header */}
                <thead>
                    <tr style={{ borderBottom: "1.5px solid #e0e0e0" }}>
                        {columns.map((col, i) => (
                            <th
                                key={i}
                                style={{
                                    padding: "14px 16px",
                                    textAlign: i === 0 ? "left" : "center",
                                    fontWeight: i === 0 ? 400 : 700,
                                    fontSize: i === 0 ? "0.9rem" : "0.95rem",
                                    color: "#111",
                                    background: "transparent",
                                    letterSpacing: 0,
                                    textTransform: "none",
                                }}
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Rows */}
                <tbody>
                    {rows.map((row, ri) => (
                        <tr
                            key={ri}
                            style={{
                                borderBottom: "1px solid #e0e0e0",
                                background: "transparent",
                            }}
                        >
                            {/* Feature name */}
                            <td
                                style={{
                                    padding: "18px 16px",
                                    color: "#111",
                                    fontWeight: 400,
                                    fontSize: "0.9rem",
                                }}
                            >
                                {row.feature}
                            </td>

                            {/* Plan cells */}
                            {["basic", "standard", "premium"].map((plan) => (
                                <td
                                    key={plan}
                                    style={{
                                        padding: "18px 16px",
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                    }}
                                >
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <CellValue value={row[plan]} />
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default PricingTable;