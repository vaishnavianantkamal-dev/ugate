export const contactPageData = {
  badge: "Contact Us",
  title: "Let's Get",
  titleGradient: "Started",
  subtitle:
    "Ready to transform your society's security? Get in touch with us today",

  // Contact Methods
  contactMethods: [
    {
      icon: "fa-phone",
      title: "Phone",
      lines: ["+91 85509 69697"],
      hours: "Mon-Sat: 9 AM - 6 PM",
    },
    {
      icon: "fa-envelope",
      title: "Email",
      lines: ["urbangate.homes@gmail.com", "info@urbangate.in"],
      hours: "We'll respond within 24 hours",
    },
    {
      icon: "fa-map-marker-alt",
      title: "Office",
      lines: [
        "Shop No. 236, Second Floor, Roongta Fururex, Near R.D Circle, Govind Nagar, Nashik-422008",
      ],
      hours: "Schedule an appointment",
    },
  ],

  // What Happens Next
  nextSteps: [
    "We'll respond within 24 hours",
    "Schedule a personalized demo",
    "Discuss your specific requirements",
    "Get a customized implementation plan",
  ],

  // Form config
  form: {
    title: "Send us a Message",
    subtitle: "Fill out the form and we'll get back to you shortly",
    subject: "New Contact Enquiry - Urbangate Website",
    fromName: "Urbangate Contact Form",
    privacyNote:
      "Your information is secure and will never be shared with third parties",

    inquiryTypes: [
      { value: "society-management", label: "Society Management Committee" },
      { value: "resident", label: "Resident" },
      { value: "builder", label: "Builder/Developer" },
      { value: "security-vendor", label: "Security Vendor" },
      { value: "other", label: "Other" },
    ],

    unitOptions: [
      { value: "1-50", label: "1-50 units" },
      { value: "51-100", label: "51-100 units" },
      { value: "101-200", label: "101-200 units" },
      { value: "201-500", label: "201-500 units" },
      { value: "500+", label: "500+ units" },
    ],

    interests: [
      { value: "gate-approval", label: "Smart Gate Approval" },
      { value: "visitor-management", label: "Visitor Management" },
      { value: "delivery-security", label: "Delivery Security" },
      { value: "payments", label: "Financial Management" },
      { value: "services", label: "Service Ecosystem" },
      { value: "all", label: "Complete Platform" },
    ],

    demoPreferences: [
      { value: "morning", label: "Morning (9 AM - 12 PM)" },
      { value: "afternoon", label: "Afternoon (12 PM - 3 PM)" },
      { value: "evening", label: "Evening (3 PM - 6 PM)" },
    ],
  },

  // Quick Links
  quickLinks: [
    {
      href: "/features",
      icon: "fa-star",
      title: "View Features",
      description: "Explore all platform capabilities",
    },
    {
      href: "/security",
      icon: "fa-shield-alt",
      title: "Security Details",
      description: "Learn about our security measures",
    },
    {
      href: "/services",
      icon: "fa-tools",
      title: "Service Ecosystem",
      description: "Discover integrated services",
    },
    {
      href: "/pricing",
      icon: "fa-gift",
      title: "Zero Cost Offer",
      description: "See pricing and special offers",
    },
  ],

  // Bottom CTA
  cta: {
    title: "Start Your Security Transformation",
    subtitle: "Zero cost for 2 years. Complete platform. Full support.",
    stats: [
      { icon: "fa-clock", label: "Setup in 1-2 weeks" },
      { icon: "fa-gift", label: "₹0 for first 2 years" },
      { icon: "fa-headset", label: "24/7 support" },
    ],
  },
};
