// helpCenterData.js

export const helpCenterMeta = {
  title: "Help Center",
  subtitle: "Society Management me madad chahiye? Hum yahan hai!",
  searchPlaceholder: "Search issues like visitor entry, guard app, maintenance...",
};

export const helpCategories = [
  {
    id: "society",
    icon: "building",
    title: "Society & Resident Management",
    articles: [
      { label: "Add / Edit Residents" },
      { label: "Flat Allocation" },
      { label: "Tenant Management" },
    ],
  },
  {
    id: "visitor",
    icon: "visitor",
    title: "Visitor & Entry System",
    articles: [
      { label: "Visitor Entry kaise kare" },
      { label: "Pre-Approved Visitors" },
      { label: "QR Code Entry" },
    ],
  },
  {
    id: "guard",
    icon: "shield",
    title: "Guard & Security Panel",
    articles: [
      { label: "Guard App ka use" },
      { label: "Visitor Approval Flow" },
      { label: "Incident Reporting" },
    ],
  },
  {
    id: "billing",
    icon: "billing",
    title: "Billing & Maintenance",
    articles: [
      { label: "Maintenance Billing" },
      { label: "Payment Tracking" },
      { label: "Receipts & Reports" },
    ],
  },
];

export const popularArticles = [
  { label: "How to Reset your password?" },
  { label: "Track your order status" },
  { label: "How to Request a refund?" },
  { label: "Shipping Rate & Delivery Time" },
];

export const supportChannels = [
  { icon: "email", label: "Email Support", href: "mailto:support@example.com" },
  { icon: "chat", label: "Live Chat", href: "#" },
  { icon: "phone", label: "Call Support", href: "tel:+911234567890" },
];

export const systemStatus = {
  label: "Sab systems working properly",
  operational: true,
};