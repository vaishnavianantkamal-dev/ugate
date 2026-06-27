// ============================================================
// SERVICES PAGE DATA — src/data/servicesData.js
// ============================================================

export const servicesPageData = {
  badge: "Services",
  title: "Complete Service",
  titleGradient: "Ecosystem",
  subtitle: "Trusted partner services integrated with secure entry workflows",
  paidAddonNote:
    "All listed services are Paid Add-on Services and require additional charges.",

  // Partnership Banner
  partnership: {
    badge: "Hobit Partner",
    title: "Powered by",
    brand: "Hobit",
    addonNote: "(Optional Add-on Paid Services)",
    description:
      "These are Trusted & Verified Partners integrated into the Urbangate platform.",
    benefits: [
      { icon: "fa-user-shield", label: "Background Verified Staff" },
      { icon: "fa-graduation-cap", label: "Professionally Trained" },
      { icon: "fa-shield-alt", label: "Secure Entry via Gate Approval" },
      { icon: "fa-clipboard-list", label: "Fully Traceable Visits" },
    ],
  },

  // Home Services linear list
  homeServices: {
    badge: "Home Services",
    title: "Home & Domestic Services",
    subtitle: "Core Paid Add-on services in a clean linear list",
    items: [
      "Instant",
      "Standard",
      "Deep",
      "Commercial",
      "Babysitting",
      "Nanny Services",
      "Elder Care",
      "Cooking",
      "Car Washing",
      "Building Common Area Cleaning",
      "Facility Manager",
      "Property Management",
    ],
  },

  // Partner Service Groups
  partnerGroups: {
    badge: "Our Partner Services",
    title: "Trusted & Verified Partner Categories",
    subtitle: "All categories below are Paid Add-on Services",
    groups: [
      {
        title: "Our Partner Services",
        items: ["Electrical", "Pest Control", "Plumber", "Salon"],
      },
      {
        title: "Our Healthcare Partners",
        items: ["Ambulance", "Test Lab", "Hospital Links"],
      },
      {
        title: "Our Society Service Partners",
        items: [
          "Professional Security",
          "Elevator Maintenance",
          "Movers & Packers",
        ],
      },
    ],
  },

  // Care Services
  careServices: {
    badge: "Care & Assistance",
    title: "Personal Care Services",
    paidAddonNote:
      "All listed services are Paid Add-on Services and require additional charges.",
    subtitle: "Trusted professionals for your family's care needs",
    cards: [
      {
        icon: "fa-baby",
        title: "Babysitting",
        description: "Trained and verified babysitters for your little ones",
        features: [
          { icon: "fa-shield-alt", label: "Background verified" },
          { icon: "fa-certificate", label: "Trained professionals" },
          { icon: "fa-heart", label: "Child-friendly approach" },
        ],
      },
      {
        icon: "fa-user-nurse",
        title: "Nanny Services",
        description: "Full-time and part-time nanny services",
        features: [
          { icon: "fa-clock", label: "Flexible hours" },
          { icon: "fa-graduation-cap", label: "Experienced caregivers" },
          { icon: "fa-clipboard-check", label: "Regular training" },
        ],
      },
      {
        icon: "fa-hands-helping",
        title: "Elder Care",
        description: "Specialized caretakers for senior citizens",
        features: [
          { icon: "fa-heartbeat", label: "Health monitoring" },
          { icon: "fa-pills", label: "Medication management" },
          { icon: "fa-users", label: "Companionship" },
        ],
      },
    ],
  },

  // Healthcare Services
  healthcareServices: {
    badge: "Our Healthcare Partners",
    title: "Healthcare Partner Services",
    subtitle: "Paid Add-on healthcare support through verified partners",
    cards: [
      {
        icon: "fa-vial",
        title: "Test Lab",
        description: "Home collection and diagnostics",
        items: [
          "Blood tests",
          "Health checkups",
          "COVID testing",
          "Pathology services",
          "Same-day reports",
        ],
      },
      {
        icon: "fa-ambulance",
        title: "Ambulance Response",
        description: "Quick emergency medical transportation",
        items: [
          "24/7 availability",
          "Trained paramedics",
          "Life support equipment",
          "Hospital coordination",
          "Fast response time",
        ],
      },
      {
        icon: "fa-hospital",
        title: "Hospital Links",
        description: "Direct connections to medical facilities",
        items: [
          "Partner hospitals",
          "Priority appointments",
          "Emergency coordination",
          "Medical records",
          "Specialist access",
        ],
      },
    ],
  },

  // Society Services
  societyServices: {
    badge: "Our Society Service Partners",
    title: "Society Partner Services",
    subtitle: "Paid Add-on partner services for society operations",
    cards: [
      {
        icon: "fa-user-shield",
        title: "Professional Security",
        description: "Trained guarding and patrol support",
        details: ["Manned guarding", "Regular patrols", "CCTV monitoring"],
      },
      {
        icon: "fa-elevator",
        title: "Elevator Maintenance",
        description: "Lift servicing and AMC support",
        details: [
          "Regular servicing",
          "Annual maintenance",
          "Emergency repairs",
        ],
      },
      {
        icon: "fa-truck-moving",
        title: "Movers & Packers",
        description: "Verified relocation and shifting support",
        details: [
          "Packing support",
          "Transport coordination",
          "Loading and unloading",
        ],
      },
    ],
  },

  // Bill Management
  billManagement: {
    badge: "Bill Management",
    title: "Pay All Bills in One Place",
    gatewayNote: "Processed via third-party gateway. Service fees may apply",
    subtitle: "Integrated payment system for all utilities and society fees",
    categories: [
      {
        icon: "fa-file-invoice-dollar",
        title: "Utility Bills",
        items: [
          { icon: "fa-bolt", label: "Electricity (MSEB)" },
          { icon: "fa-tint", label: "Water bills" },
          { icon: "fa-fire", label: "Gas connection" },
          { icon: "fa-home", label: "House tax" },
        ],
      },
      {
        icon: "fa-building",
        title: "Society Fees",
        items: [
          { icon: "fa-coins", label: "Monthly maintenance" },
          { icon: "fa-car", label: "Parking fees" },
          { icon: "fa-swimmer", label: "Amenity charges" },
          { icon: "fa-wrench", label: "Special levies" },
        ],
      },
    ],
  },

  // Hobit Advantage
  hobitAdvantage: {
    badge: "Why Hobit Services?",
    title: "The Hobit Advantage",
    subtitle: "Trusted & Verified Partners for reliable service delivery",
    cards: [
      {
        icon: "fa-user-shield",
        title: "100% Verified",
        description:
          "All service personnel undergo thorough background verification and security checks",
      },
      {
        icon: "fa-graduation-cap",
        title: "Trained Professionals",
        description:
          "Regular training programs ensure high-quality service delivery",
      },
      {
        icon: "fa-lock",
        title: "Secure Entry",
        description:
          "All service visits require gate approval, maintaining your security standards",
      },
      {
        icon: "fa-clipboard-list",
        title: "Fully Traceable",
        description:
          "Complete entry/exit logs for every service visit ensure accountability",
      },
    ],
  },

  // CTA
  cta: {
    title: "Experience Integrated Services",
    subtitle: "Security + Services = Complete peace of mind",
    primaryLabel: "Get Started Free",
    secondaryLabel: "Learn More",
    secondaryIcon: "fa-phone",
  },
};
