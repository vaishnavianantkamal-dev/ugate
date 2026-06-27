import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is society management software?",
        answer: "Society management software is a digital platform designed to automate and simplify the administrative, financial, and security operations of housing societies and gated communities. It helps managing committees handle day-to-day tasks like billing, visitor tracking, and resident communication efficiently."
    },
    {
        question: "What is society accounting software?",
        answer: "It is a specialized tool within the society management system that handles all financial aspects, including automated maintenance billing, income and expense tracking, balance sheets, bank reconciliation, and generating comprehensive financial reports for the RWA."
    },
    {
        question: "Why do housing societies need a society management system?",
        answer: "Housing societies need it to eliminate manual paperwork, reduce human errors in accounting, enhance security through digital visitor management, improve communication between residents and the committee, and bring complete transparency to society operations."
    },
    {
        question: "What makes Urbangate a complete all-in-one society management platform?",
        answer: "Urbangate offers an integrated suite of tools covering visitor management, complex accounting, facility booking, helpdesk and complaint management, communication tools, and guard tracking, all accessible through a single, easy-to-use mobile app and web dashboard."
    },
    {
        question: "Can Urbangate replace multiple software tools used by housing societies?",
        answer: "Yes, Urbangate is designed to consolidate your tech stack. It replaces separate tools for accounting (like Tally), communication (like WhatsApp groups), and manual visitor registers, bringing everything onto one secure platform."
    },
    {
        question: "Is Urbangate only a visitor management app?",
        answer: "No, while we offer industry-leading visitor management, Urbangate is a comprehensive ERP solution. It includes powerful accounting, facility management, communication boards, polling, and asset management modules."
    },
    {
        question: "How does Urbangate's apartment accounting software help RWAs?",
        answer: "It saves the management committee hours of manual work by automating recurring maintenance bills, sending payment reminders, providing instant receipts, and offering real-time visibility into the society's financial health and defaulters list."
    },
    {
        question: "Can RWA accounting software automate maintenance billing?",
        answer: "Absolutely. You can set up recurring billing schedules based on flat area, fixed rates, or custom formulas. The system automatically generates invoices, sends them to residents, and tracks payments and penalties without manual intervention."
    },
    {
        question: "Does Urbangate support GST and TDS compliance for housing societies?",
        answer: "Yes, Urbangate is fully compliant with GST and TDS regulations. It automatically calculates applicable taxes on maintenance bills and vendor payments, and generates ready-to-file reports to simplify tax filing for your society."
    },
    {
        question: "What features should a complete housing society management software include?",
        answer: "A complete software should include visitor management, automated accounting and billing, a resident helpdesk/ticketing system, facility booking, communication tools (notices/polls), staff attendance tracking, and vendor management."
    }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
    return (
        <div style={{ borderBottom: '1px solid #e0e0e0' }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#111',
                }}
            >
                <span style={{ fontSize: '1.05rem', fontWeight: 600, paddingRight: '24px' }}>
                    {faq.question}
                </span>
                <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 300, 
                    color: '#666',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                }}>
                    +
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingBottom: '24px', color: '#555', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section style={{ padding: '80px 20px', background: '#fafafa' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ 
                    fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                    fontWeight: 800, 
                    color: '#000', 
                    textAlign: 'center',
                    marginBottom: '40px' 
                }}>
                    Frequently Asked Questions
                </h2>
                <div style={{ borderTop: '1px solid #e0e0e0' }}>
                    {faqs.map((faq, index) => (
                        <FaqItem 
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
