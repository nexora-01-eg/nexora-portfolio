/* ============================================================
   NEXORA — Embedded Fallback Data
   Presentation-phase resilience layer. Browsers block fetch()
   of local files under file:// (script/link/img tags are NOT
   blocked — only the Fetch API is), so opening this platform by
   double-clicking index.html previously left every data-driven
   page blank. This file is a straight, generated mirror of
   /data/*.json and every projects/<industry>/<slug>/project.json
   — manifest.js falls back to it ONLY when a real fetch() fails.
   When served over a local server (or any real host), this file
   is loaded but never used — every fetch succeeds normally and
   this data is simply ignored.

   GENERATED — do not hand-edit. Regenerate whenever any
   /data/*.json or project.json changes, so this never drifts
   from the real data it mirrors.
   ============================================================ */
window.NEXORA_FALLBACK = {
  "projectIndex": {
    "projects": [
      {
        "industry": "finance",
        "slug": "aurora-crm"
      },
      {
        "industry": "hotel",
        "slug": "meridian-booking"
      },
      {
        "industry": "corporate",
        "slug": "vantage-erp"
      },
      {
        "industry": "medical",
        "slug": "pulseline-ehr"
      },
      {
        "industry": "construction",
        "slug": "siteflow-tracker"
      },
      {
        "industry": "restaurant",
        "slug": "tablehost-pos"
      },
      {
        "industry": "education",
        "slug": "classline-lms"
      },
      {
        "industry": "real-estate",
        "slug": "brightlot-realty"
      },
      {
        "industry": "technology",
        "slug": "nova-dashboard"
      },
      {
        "industry": "corporate",
        "slug": "lumen-landing"
      },
      {
        "industry": "ai",
        "slug": "sentinel-ai"
      },
      {
        "industry": "automation",
        "slug": "flowbot-automation"
      }
    ]
  },
  "projectsRaw": [
    {
      "industry": "finance",
      "slug": "aurora-crm",
      "data": {
        "id": "aurora-crm",
        "slug": "aurora-crm",
        "industry": "finance",
        "designSystem": "finance",
        "title": "Aurora CRM",
        "tagline": "Customer relationship platform for boutique investment firms.",
        "description": "A full-featured CRM built for boutique investment firms — pipeline tracking, client communications, and reporting in one workspace.",
        "version": "2.4.0",
        "status": "live",
        "tier": "enterprise",
        "difficulty": "advanced",
        "service": "CRM Systems",
        "tags": [
          "crm",
          "finance",
          "dashboard"
        ],
        "technologies": [
          "React",
          "Supabase",
          "Tailwind CSS"
        ],
        "componentsUsed": [
          "button",
          "card",
          "data-table",
          "modal"
        ],
        "features": [
          "Deal pipeline with drag-and-drop stages",
          "Client communication timeline",
          "Custom report builder",
          "Role-based team permissions"
        ],
        "timeline": [
          {
            "date": "2026-03-02",
            "label": "Project started",
            "description": "Initial architecture and data model."
          },
          {
            "date": "2026-05-14",
            "label": "v2.0 released",
            "description": "Pipeline and reporting modules shipped."
          },
          {
            "date": "2026-07-10",
            "label": "v2.4.0 released",
            "description": "Performance improvements and bug fixes."
          }
        ],
        "relatedProjects": [
          "vantage-erp"
        ],
        "views": 1204,
        "featured": true,
        "popular": true,
        "createdAt": "2026-03-02",
        "updatedAt": "2026-07-10"
      }
    },
    {
      "industry": "hotel",
      "slug": "meridian-booking",
      "data": {
        "id": "meridian-booking",
        "slug": "meridian-booking",
        "industry": "hotel",
        "designSystem": "hotel",
        "title": "Meridian Booking",
        "tagline": "Reservation and guest management for boutique hotels.",
        "description": "An end-to-end booking engine and guest management system for independent and boutique hotels.",
        "version": "1.1.0",
        "status": "draft",
        "tier": "growth",
        "difficulty": "intermediate",
        "service": "Booking Systems",
        "tags": [
          "hotel",
          "booking",
          "calendar"
        ],
        "technologies": [
          "Next.js",
          "PostgreSQL"
        ],
        "componentsUsed": [
          "calendar",
          "card",
          "form"
        ],
        "features": [
          "Real-time room availability calendar",
          "Guest profile history",
          "Automated confirmation emails (placeholder)"
        ],
        "timeline": [
          {
            "date": "2026-06-20",
            "label": "Project started",
            "description": "Booking engine scaffolding."
          },
          {
            "date": "2026-07-08",
            "label": "v1.1.0 released",
            "description": "Calendar UI refinements."
          }
        ],
        "relatedProjects": [
          "aurora-crm"
        ],
        "views": 86,
        "featured": false,
        "popular": false,
        "createdAt": "2026-06-20",
        "updatedAt": "2026-07-08"
      }
    },
    {
      "industry": "corporate",
      "slug": "vantage-erp",
      "data": {
        "id": "vantage-erp",
        "slug": "vantage-erp",
        "industry": "corporate",
        "designSystem": "corporate",
        "title": "Vantage ERP",
        "tagline": "Resource planning for mid-market manufacturers.",
        "description": "A modular ERP covering inventory, procurement, and production scheduling for mid-market manufacturers.",
        "version": "3.0.1",
        "status": "archived",
        "tier": "enterprise",
        "difficulty": "advanced",
        "service": "ERP Systems",
        "tags": [
          "erp",
          "inventory",
          "corporate",
          "dashboard"
        ],
        "technologies": [
          "Vue",
          "FastAPI",
          "MongoDB"
        ],
        "componentsUsed": [
          "data-table",
          "dropdown",
          "badge"
        ],
        "features": [
          "Multi-warehouse inventory tracking",
          "Procurement approval workflows",
          "Production scheduling board"
        ],
        "timeline": [
          {
            "date": "2025-11-14",
            "label": "Project started",
            "description": "ERP core modules planned."
          },
          {
            "date": "2026-03-01",
            "label": "v3.0.0 released",
            "description": "Full production scheduling module."
          },
          {
            "date": "2026-05-30",
            "label": "Archived",
            "description": "Superseded by a newer internal system."
          }
        ],
        "relatedProjects": [
          "aurora-crm"
        ],
        "views": 512,
        "featured": false,
        "popular": true,
        "createdAt": "2025-11-14",
        "updatedAt": "2026-05-30"
      }
    },
    {
      "industry": "medical",
      "slug": "pulseline-ehr",
      "data": {
        "id": "pulseline-ehr",
        "slug": "pulseline-ehr",
        "industry": "medical",
        "designSystem": "medical",
        "title": "Pulseline EHR",
        "tagline": "Electronic health records for outpatient clinics.",
        "description": "A streamlined electronic health records system for outpatient clinics, with scheduling and secure messaging.",
        "version": "1.6.2",
        "status": "live",
        "tier": "enterprise",
        "difficulty": "advanced",
        "service": "Internal Company Systems",
        "tags": [
          "medical",
          "records",
          "compliance"
        ],
        "technologies": [
          "React",
          "Node.js",
          "PostgreSQL"
        ],
        "componentsUsed": [
          "table",
          "form",
          "modal"
        ],
        "features": [
          "Patient records with visit history",
          "Secure clinician messaging",
          "Appointment scheduling"
        ],
        "timeline": [
          {
            "date": "2026-01-18",
            "label": "Project started",
            "description": "Compliance requirements gathered."
          },
          {
            "date": "2026-04-22",
            "label": "v1.5.0 released",
            "description": "Secure messaging module added."
          },
          {
            "date": "2026-07-01",
            "label": "v1.6.2 released",
            "description": "Scheduling improvements."
          }
        ],
        "relatedProjects": [],
        "views": 940,
        "featured": true,
        "popular": true,
        "createdAt": "2026-01-18",
        "updatedAt": "2026-07-01"
      }
    },
    {
      "industry": "construction",
      "slug": "siteflow-tracker",
      "data": {
        "id": "siteflow-tracker",
        "slug": "siteflow-tracker",
        "industry": "construction",
        "designSystem": "construction",
        "title": "SiteFlow Tracker",
        "tagline": "Project tracking for construction site teams.",
        "description": "A field-friendly progress tracker for construction crews — daily logs, punch lists, and photo documentation.",
        "version": "1.0.0",
        "status": "draft",
        "tier": "starter",
        "difficulty": "beginner",
        "service": "Workflow Automation",
        "tags": [
          "construction",
          "tracking",
          "mobile",
          "automation"
        ],
        "technologies": [
          "React",
          "Firebase"
        ],
        "componentsUsed": [
          "timeline",
          "card",
          "badge"
        ],
        "features": [
          "Daily site log entries",
          "Photo-documented punch lists",
          "Crew assignment board"
        ],
        "timeline": [
          {
            "date": "2026-07-02",
            "label": "Project started",
            "description": "Field requirements gathered from crews."
          },
          {
            "date": "2026-07-12",
            "label": "v1.0.0 released",
            "description": "First usable build."
          }
        ],
        "relatedProjects": [],
        "views": 54,
        "featured": false,
        "popular": false,
        "createdAt": "2026-07-02",
        "updatedAt": "2026-07-12"
      }
    },
    {
      "industry": "restaurant",
      "slug": "tablehost-pos",
      "data": {
        "id": "tablehost-pos",
        "slug": "tablehost-pos",
        "industry": "restaurant",
        "designSystem": "restaurant",
        "title": "TableHost POS",
        "tagline": "Point of sale and table management for restaurants.",
        "description": "A modern point-of-sale and table management system built for full-service restaurants.",
        "version": "2.1.0",
        "status": "live",
        "tier": "growth",
        "difficulty": "intermediate",
        "service": "SaaS Development",
        "tags": [
          "restaurant",
          "pos",
          "realtime"
        ],
        "technologies": [
          "React",
          "Supabase"
        ],
        "componentsUsed": [
          "data-table",
          "toast",
          "modal"
        ],
        "features": [
          "Live table status board",
          "Split-check billing",
          "Kitchen order tickets"
        ],
        "timeline": [
          {
            "date": "2026-04-11",
            "label": "Project started",
            "description": "POS core flow designed."
          },
          {
            "date": "2026-06-25",
            "label": "v2.1.0 released",
            "description": "Split-check billing added."
          }
        ],
        "relatedProjects": [],
        "views": 331,
        "featured": true,
        "popular": false,
        "createdAt": "2026-04-11",
        "updatedAt": "2026-06-25"
      }
    },
    {
      "industry": "education",
      "slug": "classline-lms",
      "data": {
        "id": "classline-lms",
        "slug": "classline-lms",
        "industry": "education",
        "designSystem": "education",
        "title": "ClassLine LMS",
        "tagline": "Course delivery and grading for online academies.",
        "description": "A learning management system for online academies — course delivery, assignments, and grading in one place.",
        "version": "1.3.0",
        "status": "live",
        "tier": "growth",
        "difficulty": "intermediate",
        "service": "SaaS Development",
        "tags": [
          "education",
          "lms",
          "courses",
          "dashboard"
        ],
        "technologies": [
          "Next.js",
          "Supabase"
        ],
        "componentsUsed": [
          "progress",
          "card",
          "tabs"
        ],
        "features": [
          "Course progress tracking",
          "Assignment submission and grading",
          "Student performance dashboard"
        ],
        "timeline": [
          {
            "date": "2026-02-27",
            "label": "Project started",
            "description": "Course delivery flow scoped."
          },
          {
            "date": "2026-06-18",
            "label": "v1.3.0 released",
            "description": "Grading dashboard added."
          }
        ],
        "relatedProjects": [],
        "views": 278,
        "featured": false,
        "popular": true,
        "createdAt": "2026-02-27",
        "updatedAt": "2026-06-18"
      }
    },
    {
      "industry": "real-estate",
      "slug": "brightlot-realty",
      "data": {
        "id": "brightlot-realty",
        "slug": "brightlot-realty",
        "industry": "real-estate",
        "designSystem": "real-estate",
        "title": "Brightlot Realty",
        "tagline": "Listings and client portal for real estate agencies.",
        "description": "A listings management and client portal platform for boutique real estate agencies.",
        "version": "1.0.4",
        "status": "draft",
        "tier": "starter",
        "difficulty": "beginner",
        "service": "Web Applications",
        "tags": [
          "real-estate",
          "listings",
          "portal",
          "website"
        ],
        "technologies": [
          "React",
          "Firebase"
        ],
        "componentsUsed": [
          "gallery-grid",
          "card"
        ],
        "features": [
          "Public listing gallery",
          "Client portal with saved searches",
          "Agent contact requests"
        ],
        "timeline": [
          {
            "date": "2026-05-19",
            "label": "Project started",
            "description": "Listings data model designed."
          },
          {
            "date": "2026-07-05",
            "label": "v1.0.4 released",
            "description": "Client portal polish."
          }
        ],
        "relatedProjects": [],
        "views": 112,
        "featured": false,
        "popular": false,
        "createdAt": "2026-05-19",
        "updatedAt": "2026-07-05"
      }
    },
    {
      "industry": "technology",
      "slug": "nova-dashboard",
      "data": {
        "id": "nova-dashboard",
        "slug": "nova-dashboard",
        "industry": "technology",
        "designSystem": "technology",
        "title": "Nova Dashboard",
        "tagline": "Analytics dashboard template for SaaS products.",
        "description": "A general-purpose analytics dashboard template — metrics, charts, and activity feeds for any SaaS product.",
        "version": "1.2.0",
        "status": "live",
        "tier": "growth",
        "difficulty": "intermediate",
        "service": "Dashboard Development",
        "tags": [
          "dashboard",
          "analytics",
          "saas"
        ],
        "technologies": [
          "React",
          "Recharts",
          "Tailwind CSS"
        ],
        "componentsUsed": [
          "kpi-card",
          "chart",
          "data-table"
        ],
        "features": [
          "Live KPI cards",
          "Revenue and usage charts",
          "Recent activity feed"
        ],
        "timeline": [
          {
            "date": "2026-05-01",
            "label": "Project started",
            "description": "Dashboard layout drafted."
          },
          {
            "date": "2026-06-30",
            "label": "v1.2.0 released",
            "description": "Chart library integration."
          }
        ],
        "relatedProjects": [
          "aurora-crm"
        ],
        "views": 430,
        "featured": true,
        "popular": true,
        "createdAt": "2026-05-01",
        "updatedAt": "2026-06-30"
      }
    },
    {
      "industry": "corporate",
      "slug": "lumen-landing",
      "data": {
        "id": "lumen-landing",
        "slug": "lumen-landing",
        "industry": "corporate",
        "designSystem": "corporate",
        "title": "Lumen Landing",
        "tagline": "High-conversion landing page template for product launches.",
        "description": "A conversion-focused landing page template — hero, feature grid, pricing, and signup, ready for any product launch.",
        "version": "1.0.0",
        "status": "live",
        "tier": "starter",
        "difficulty": "beginner",
        "service": "Web Applications",
        "tags": [
          "landing-page",
          "website",
          "marketing"
        ],
        "technologies": [
          "HTML",
          "CSS",
          "JavaScript"
        ],
        "componentsUsed": [
          "hero-block",
          "pricing-card",
          "feature-card"
        ],
        "features": [
          "Animated hero section",
          "Pricing comparison table",
          "Signup form with validation"
        ],
        "timeline": [
          {
            "date": "2026-06-01",
            "label": "Project started",
            "description": "Landing page sections drafted."
          },
          {
            "date": "2026-06-15",
            "label": "v1.0.0 released",
            "description": "Launch-ready build."
          }
        ],
        "relatedProjects": [
          "nova-dashboard"
        ],
        "views": 205,
        "featured": false,
        "popular": false,
        "createdAt": "2026-06-01",
        "updatedAt": "2026-06-15"
      }
    },
    {
      "industry": "ai",
      "slug": "sentinel-ai",
      "data": {
        "id": "sentinel-ai",
        "slug": "sentinel-ai",
        "industry": "ai",
        "designSystem": "ai",
        "title": "Sentinel AI",
        "tagline": "AI-powered support ticket triage agent.",
        "description": "An AI agent that classifies, prioritizes, and routes incoming support tickets before a human ever sees them.",
        "version": "0.9.0",
        "status": "draft",
        "tier": "enterprise",
        "difficulty": "advanced",
        "service": "AI Agents",
        "tags": [
          "ai",
          "automation",
          "support"
        ],
        "technologies": [
          "Python",
          "FastAPI",
          "OpenAI"
        ],
        "componentsUsed": [
          "badge",
          "timeline",
          "data-table"
        ],
        "features": [
          "Automatic ticket classification",
          "Priority scoring",
          "Suggested response drafting"
        ],
        "timeline": [
          {
            "date": "2026-06-10",
            "label": "Project started",
            "description": "Classification model selected."
          },
          {
            "date": "2026-07-09",
            "label": "v0.9.0 released",
            "description": "Beta triage accuracy testing."
          }
        ],
        "relatedProjects": [
          "flowbot-automation"
        ],
        "views": 167,
        "featured": true,
        "popular": false,
        "createdAt": "2026-06-10",
        "updatedAt": "2026-07-09"
      }
    },
    {
      "industry": "automation",
      "slug": "flowbot-automation",
      "data": {
        "id": "flowbot-automation",
        "slug": "flowbot-automation",
        "industry": "automation",
        "designSystem": "automation",
        "title": "FlowBot Automation",
        "tagline": "No-code workflow automation between everyday business tools.",
        "description": "A visual workflow builder that connects everyday business tools — no code required.",
        "version": "1.4.0",
        "status": "live",
        "tier": "growth",
        "difficulty": "intermediate",
        "service": "Workflow Automation",
        "tags": [
          "automation",
          "workflow",
          "integration"
        ],
        "technologies": [
          "React",
          "n8n",
          "Node.js"
        ],
        "componentsUsed": [
          "dropdown",
          "card",
          "toggle"
        ],
        "features": [
          "Visual drag-and-drop workflow builder",
          "Prebuilt integration templates",
          "Run history and error logs"
        ],
        "timeline": [
          {
            "date": "2026-03-15",
            "label": "Project started",
            "description": "Workflow builder canvas prototyped."
          },
          {
            "date": "2026-06-20",
            "label": "v1.4.0 released",
            "description": "Run history added."
          }
        ],
        "relatedProjects": [
          "sentinel-ai"
        ],
        "views": 298,
        "featured": false,
        "popular": true,
        "createdAt": "2026-03-15",
        "updatedAt": "2026-06-20"
      }
    }
  ],
  "demosIndex": {
    "version": "1.0.0",
    "updatedAt": "2026-07-21",
    "note": "Generated by tools/import.html by scanning demos/. Do not hand-edit — reopen the import tool and re-run instead.",
    "count": 3,
    "demos": [
      {
        "slug": "orbit-scheduler",
        "title": "Orbit Scheduler",
        "filename": "orbit-scheduler.html",
        "createdAt": "2026-07-21",
        "updatedAt": "2026-07-21"
      },
      {
        "slug": "pixel-gallery",
        "title": "Pixel Gallery",
        "filename": "pixel-gallery.html",
        "createdAt": "2026-07-21",
        "updatedAt": "2026-07-21"
      },
      {
        "slug": "quickpay-checkout",
        "title": "QuickPay Checkout",
        "filename": "quickpay-checkout.html",
        "createdAt": "2026-07-21",
        "updatedAt": "2026-07-21"
      }
    ]
  },
  "industries": {
    "version": "0.4.0",
    "updatedAt": "2026-07-16",
    "count": 14,
    "industries": [
      {
        "id": "medical",
        "label": "Medical",
        "path": "/design-systems/medical/",
        "projectCount": 1
      },
      {
        "id": "construction",
        "label": "Construction",
        "path": "/design-systems/construction/",
        "projectCount": 1
      },
      {
        "id": "finance",
        "label": "Finance",
        "path": "/design-systems/finance/",
        "projectCount": 1
      },
      {
        "id": "restaurant",
        "label": "Restaurant",
        "path": "/design-systems/restaurant/",
        "projectCount": 1
      },
      {
        "id": "education",
        "label": "Education",
        "path": "/design-systems/education/",
        "projectCount": 1
      },
      {
        "id": "corporate",
        "label": "Corporate",
        "path": "/design-systems/corporate/",
        "projectCount": 2
      },
      {
        "id": "real-estate",
        "label": "Real Estate",
        "path": "/design-systems/real-estate/",
        "projectCount": 1
      },
      {
        "id": "hotel",
        "label": "Hotel",
        "path": "/design-systems/hotel/",
        "projectCount": 1
      },
      {
        "id": "retail",
        "label": "Retail",
        "path": "/design-systems/retail/",
        "projectCount": 0
      },
      {
        "id": "hr",
        "label": "HR",
        "path": "/design-systems/hr/",
        "projectCount": 0
      },
      {
        "id": "legal",
        "label": "Legal",
        "path": "/design-systems/legal/",
        "projectCount": 0
      },
      {
        "id": "technology",
        "label": "Technology",
        "path": "/design-systems/technology/",
        "projectCount": 1
      },
      {
        "id": "automation",
        "label": "Automation",
        "path": "/design-systems/automation/",
        "projectCount": 1
      },
      {
        "id": "ai",
        "label": "AI",
        "path": "/design-systems/ai/",
        "projectCount": 1
      }
    ]
  },
  "designSystems": {
    "version": "0.1.0",
    "updatedAt": null,
    "count": 14,
    "designSystems": [
      {
        "id": "medical",
        "label": "Medical",
        "path": "/design-systems/medical/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "construction",
        "label": "Construction",
        "path": "/design-systems/construction/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "finance",
        "label": "Finance",
        "path": "/design-systems/finance/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "restaurant",
        "label": "Restaurant",
        "path": "/design-systems/restaurant/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "education",
        "label": "Education",
        "path": "/design-systems/education/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "corporate",
        "label": "Corporate",
        "path": "/design-systems/corporate/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "real-estate",
        "label": "Real Estate",
        "path": "/design-systems/real-estate/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "hotel",
        "label": "Hotel",
        "path": "/design-systems/hotel/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "retail",
        "label": "Retail",
        "path": "/design-systems/retail/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "hr",
        "label": "HR",
        "path": "/design-systems/hr/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "legal",
        "label": "Legal",
        "path": "/design-systems/legal/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "technology",
        "label": "Technology",
        "path": "/design-systems/technology/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "automation",
        "label": "Automation",
        "path": "/design-systems/automation/",
        "status": "empty",
        "componentCount": 0
      },
      {
        "id": "ai",
        "label": "AI",
        "path": "/design-systems/ai/",
        "status": "empty",
        "componentCount": 0
      }
    ]
  },
  "components": {
    "version": "0.2.0",
    "updatedAt": "2026-07-15",
    "count": 55,
    "categories": [
      {
        "id": "ui",
        "label": "UI Primitives",
        "path": "/components/ui/"
      },
      {
        "id": "cards",
        "label": "Cards",
        "path": "/components/cards/"
      },
      {
        "id": "navigation",
        "label": "Navigation",
        "path": "/components/navigation/"
      },
      {
        "id": "modals",
        "label": "Modals",
        "path": "/components/modals/"
      },
      {
        "id": "forms",
        "label": "Forms",
        "path": "/components/forms/"
      },
      {
        "id": "media",
        "label": "Media / Gallery",
        "path": "/components/media/"
      },
      {
        "id": "feedback",
        "label": "Feedback",
        "path": "/components/feedback/"
      }
    ],
    "components": [
      {
        "id": "card",
        "label": "Card",
        "category": "cards",
        "path": "/components/cards/card/",
        "hasJS": false,
        "files": {
          "html": "card.html",
          "css": "card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "component-card",
        "label": "Component Card",
        "category": "cards",
        "path": "/components/cards/component-card/",
        "hasJS": false,
        "files": {
          "html": "component-card.html",
          "css": "component-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "design-system-card",
        "label": "Design System Card",
        "category": "cards",
        "path": "/components/cards/design-system-card/",
        "hasJS": false,
        "files": {
          "html": "design-system-card.html",
          "css": "design-system-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "feature-card",
        "label": "Feature Card",
        "category": "cards",
        "path": "/components/cards/feature-card/",
        "hasJS": false,
        "files": {
          "html": "feature-card.html",
          "css": "feature-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "industry-card",
        "label": "Industry Card",
        "category": "cards",
        "path": "/components/cards/industry-card/",
        "hasJS": false,
        "files": {
          "html": "industry-card.html",
          "css": "industry-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "kpi-card",
        "label": "Kpi Card",
        "category": "cards",
        "path": "/components/cards/kpi-card/",
        "hasJS": false,
        "files": {
          "html": "kpi-card.html",
          "css": "kpi-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "metric-card",
        "label": "Metric Card",
        "category": "cards",
        "path": "/components/cards/metric-card/",
        "hasJS": false,
        "files": {
          "html": "metric-card.html",
          "css": "metric-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "preview-card",
        "label": "Preview Card",
        "category": "cards",
        "path": "/components/cards/preview-card/",
        "hasJS": false,
        "files": {
          "html": "preview-card.html",
          "css": "preview-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "pricing-card",
        "label": "Pricing Card",
        "category": "cards",
        "path": "/components/cards/pricing-card/",
        "hasJS": false,
        "files": {
          "html": "pricing-card.html",
          "css": "pricing-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "project-card",
        "label": "Project Card",
        "category": "cards",
        "path": "/components/cards/project-card/",
        "hasJS": false,
        "files": {
          "html": "project-card.html",
          "css": "project-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "stats-card",
        "label": "Stats Card",
        "category": "cards",
        "path": "/components/cards/stats-card/",
        "hasJS": false,
        "files": {
          "html": "stats-card.html",
          "css": "stats-card.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "alert",
        "label": "Alert",
        "category": "feedback",
        "path": "/components/feedback/alert/",
        "hasJS": false,
        "files": {
          "html": "alert.html",
          "css": "alert.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "empty-state",
        "label": "Empty State",
        "category": "feedback",
        "path": "/components/feedback/empty-state/",
        "hasJS": false,
        "files": {
          "html": "empty-state.html",
          "css": "empty-state.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "loader",
        "label": "Loader",
        "category": "feedback",
        "path": "/components/feedback/loader/",
        "hasJS": false,
        "files": {
          "html": "loader.html",
          "css": "loader.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "notifications",
        "label": "Notifications",
        "category": "feedback",
        "path": "/components/feedback/notifications/",
        "hasJS": true,
        "files": {
          "html": "notifications.html",
          "css": "notifications.css",
          "js": "notifications.js",
          "readme": "README.md"
        }
      },
      {
        "id": "progress",
        "label": "Progress",
        "category": "feedback",
        "path": "/components/feedback/progress/",
        "hasJS": false,
        "files": {
          "html": "progress.html",
          "css": "progress.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "skeleton-loader",
        "label": "Skeleton Loader",
        "category": "feedback",
        "path": "/components/feedback/skeleton-loader/",
        "hasJS": false,
        "files": {
          "html": "skeleton-loader.html",
          "css": "skeleton-loader.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "toast",
        "label": "Toast",
        "category": "feedback",
        "path": "/components/feedback/toast/",
        "hasJS": true,
        "files": {
          "html": "toast.html",
          "css": "toast.css",
          "js": "toast.js",
          "readme": "README.md"
        }
      },
      {
        "id": "checkbox",
        "label": "Checkbox",
        "category": "forms",
        "path": "/components/forms/checkbox/",
        "hasJS": true,
        "files": {
          "html": "checkbox.html",
          "css": "checkbox.css",
          "js": "checkbox.js",
          "readme": "README.md"
        }
      },
      {
        "id": "date-picker",
        "label": "Date Picker",
        "category": "forms",
        "path": "/components/forms/date-picker/",
        "hasJS": true,
        "files": {
          "html": "date-picker.html",
          "css": "date-picker.css",
          "js": "date-picker.js",
          "readme": "README.md"
        }
      },
      {
        "id": "file-upload",
        "label": "File Upload",
        "category": "forms",
        "path": "/components/forms/file-upload/",
        "hasJS": true,
        "files": {
          "html": "file-upload.html",
          "css": "file-upload.css",
          "js": "file-upload.js",
          "readme": "README.md"
        }
      },
      {
        "id": "form",
        "label": "Form",
        "category": "forms",
        "path": "/components/forms/form/",
        "hasJS": false,
        "files": {
          "html": "form.html",
          "css": "form.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "input",
        "label": "Input",
        "category": "forms",
        "path": "/components/forms/input/",
        "hasJS": false,
        "files": {
          "html": "input.html",
          "css": "input.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "radio",
        "label": "Radio",
        "category": "forms",
        "path": "/components/forms/radio/",
        "hasJS": false,
        "files": {
          "html": "radio.html",
          "css": "radio.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "search-box",
        "label": "Search Box",
        "category": "forms",
        "path": "/components/forms/search-box/",
        "hasJS": true,
        "files": {
          "html": "search-box.html",
          "css": "search-box.css",
          "js": "search-box.js",
          "readme": "README.md"
        }
      },
      {
        "id": "select",
        "label": "Select",
        "category": "forms",
        "path": "/components/forms/select/",
        "hasJS": true,
        "files": {
          "html": "select.html",
          "css": "select.css",
          "js": "select.js",
          "readme": "README.md"
        }
      },
      {
        "id": "textarea",
        "label": "Textarea",
        "category": "forms",
        "path": "/components/forms/textarea/",
        "hasJS": true,
        "files": {
          "html": "textarea.html",
          "css": "textarea.css",
          "js": "textarea.js",
          "readme": "README.md"
        }
      },
      {
        "id": "toggle",
        "label": "Toggle",
        "category": "forms",
        "path": "/components/forms/toggle/",
        "hasJS": false,
        "files": {
          "html": "toggle.html",
          "css": "toggle.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "gallery-grid",
        "label": "Gallery Grid",
        "category": "media",
        "path": "/components/media/gallery-grid/",
        "hasJS": false,
        "files": {
          "html": "gallery-grid.html",
          "css": "gallery-grid.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "image-preview",
        "label": "Image Preview",
        "category": "media",
        "path": "/components/media/image-preview/",
        "hasJS": true,
        "files": {
          "html": "image-preview.html",
          "css": "image-preview.css",
          "js": "image-preview.js",
          "readme": "README.md"
        }
      },
      {
        "id": "drawer",
        "label": "Drawer",
        "category": "modals",
        "path": "/components/modals/drawer/",
        "hasJS": true,
        "files": {
          "html": "drawer.html",
          "css": "drawer.css",
          "js": "drawer.js",
          "readme": "README.md"
        }
      },
      {
        "id": "modal",
        "label": "Modal",
        "category": "modals",
        "path": "/components/modals/modal/",
        "hasJS": true,
        "files": {
          "html": "modal.html",
          "css": "modal.css",
          "js": "modal.js",
          "readme": "README.md"
        }
      },
      {
        "id": "breadcrumbs",
        "label": "Breadcrumbs",
        "category": "navigation",
        "path": "/components/navigation/breadcrumbs/",
        "hasJS": false,
        "files": {
          "html": "breadcrumbs.html",
          "css": "breadcrumbs.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "footer",
        "label": "Footer",
        "category": "navigation",
        "path": "/components/navigation/footer/",
        "hasJS": false,
        "files": {
          "html": "footer.html",
          "css": "footer.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "hero-block",
        "label": "Hero Block",
        "category": "navigation",
        "path": "/components/navigation/hero-block/",
        "hasJS": false,
        "files": {
          "html": "hero-block.html",
          "css": "hero-block.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "navbar",
        "label": "Navbar",
        "category": "navigation",
        "path": "/components/navigation/navbar/",
        "hasJS": true,
        "files": {
          "html": "navbar.html",
          "css": "navbar.css",
          "js": "navbar.js",
          "readme": "README.md"
        }
      },
      {
        "id": "pagination",
        "label": "Pagination",
        "category": "navigation",
        "path": "/components/navigation/pagination/",
        "hasJS": true,
        "files": {
          "html": "pagination.html",
          "css": "pagination.css",
          "js": "pagination.js",
          "readme": "README.md"
        }
      },
      {
        "id": "section-header",
        "label": "Section Header",
        "category": "navigation",
        "path": "/components/navigation/section-header/",
        "hasJS": false,
        "files": {
          "html": "section-header.html",
          "css": "section-header.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "sidebar",
        "label": "Sidebar",
        "category": "navigation",
        "path": "/components/navigation/sidebar/",
        "hasJS": false,
        "files": {
          "html": "sidebar.html",
          "css": "sidebar.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "accordion",
        "label": "Accordion",
        "category": "ui",
        "path": "/components/ui/accordion/",
        "hasJS": true,
        "files": {
          "html": "accordion.html",
          "css": "accordion.css",
          "js": "accordion.js",
          "readme": "README.md"
        }
      },
      {
        "id": "avatar",
        "label": "Avatar",
        "category": "ui",
        "path": "/components/ui/avatar/",
        "hasJS": false,
        "files": {
          "html": "avatar.html",
          "css": "avatar.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "badge",
        "label": "Badge",
        "category": "ui",
        "path": "/components/ui/badge/",
        "hasJS": false,
        "files": {
          "html": "badge.html",
          "css": "badge.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "button",
        "label": "Button",
        "category": "ui",
        "path": "/components/ui/button/",
        "hasJS": false,
        "files": {
          "html": "button.html",
          "css": "button.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "calendar",
        "label": "Calendar",
        "category": "ui",
        "path": "/components/ui/calendar/",
        "hasJS": true,
        "files": {
          "html": "calendar.html",
          "css": "calendar.css",
          "js": "calendar.js",
          "readme": "README.md"
        }
      },
      {
        "id": "charts",
        "label": "Charts",
        "category": "ui",
        "path": "/components/ui/charts/",
        "hasJS": false,
        "files": {
          "html": "charts.html",
          "css": "charts.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "command-palette",
        "label": "Command Palette",
        "category": "ui",
        "path": "/components/ui/command-palette/",
        "hasJS": true,
        "files": {
          "html": "command-palette.html",
          "css": "command-palette.css",
          "js": "command-palette.js",
          "readme": "README.md"
        }
      },
      {
        "id": "context-menu",
        "label": "Context Menu",
        "category": "ui",
        "path": "/components/ui/context-menu/",
        "hasJS": true,
        "files": {
          "html": "context-menu.html",
          "css": "context-menu.css",
          "js": "context-menu.js",
          "readme": "README.md"
        }
      },
      {
        "id": "data-table",
        "label": "Data Table",
        "category": "ui",
        "path": "/components/ui/data-table/",
        "hasJS": true,
        "files": {
          "html": "data-table.html",
          "css": "data-table.css",
          "js": "data-table.js",
          "readme": "README.md"
        }
      },
      {
        "id": "dropdown",
        "label": "Dropdown",
        "category": "ui",
        "path": "/components/ui/dropdown/",
        "hasJS": true,
        "files": {
          "html": "dropdown.html",
          "css": "dropdown.css",
          "js": "dropdown.js",
          "readme": "README.md"
        }
      },
      {
        "id": "popover",
        "label": "Popover",
        "category": "ui",
        "path": "/components/ui/popover/",
        "hasJS": true,
        "files": {
          "html": "popover.html",
          "css": "popover.css",
          "js": "popover.js",
          "readme": "README.md"
        }
      },
      {
        "id": "table",
        "label": "Table",
        "category": "ui",
        "path": "/components/ui/table/",
        "hasJS": false,
        "files": {
          "html": "table.html",
          "css": "table.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "tabs",
        "label": "Tabs",
        "category": "ui",
        "path": "/components/ui/tabs/",
        "hasJS": true,
        "files": {
          "html": "tabs.html",
          "css": "tabs.css",
          "js": "tabs.js",
          "readme": "README.md"
        }
      },
      {
        "id": "tag",
        "label": "Tag",
        "category": "ui",
        "path": "/components/ui/tag/",
        "hasJS": true,
        "files": {
          "html": "tag.html",
          "css": "tag.css",
          "js": "tag.js",
          "readme": "README.md"
        }
      },
      {
        "id": "timeline",
        "label": "Timeline",
        "category": "ui",
        "path": "/components/ui/timeline/",
        "hasJS": false,
        "files": {
          "html": "timeline.html",
          "css": "timeline.css",
          "js": null,
          "readme": "README.md"
        }
      },
      {
        "id": "tooltip",
        "label": "Tooltip",
        "category": "ui",
        "path": "/components/ui/tooltip/",
        "hasJS": true,
        "files": {
          "html": "tooltip.html",
          "css": "tooltip.css",
          "js": "tooltip.js",
          "readme": "README.md"
        }
      }
    ]
  },
  "collections": {
    "version": "0.2.0",
    "updatedAt": "2026-07-16",
    "collections": [
      {
        "id": "featured",
        "label": "Featured",
        "description": "Editor's picks.",
        "rule": "featured"
      },
      {
        "id": "latest",
        "label": "Latest",
        "description": "Newest additions to the library.",
        "rule": "latest",
        "limit": 12
      },
      {
        "id": "popular",
        "label": "Popular",
        "description": "Most viewed projects.",
        "rule": "popular",
        "limit": 12
      },
      {
        "id": "enterprise",
        "label": "Enterprise",
        "description": "Large-scale, enterprise-tier systems.",
        "rule": "enterprise"
      },
      {
        "id": "favorites",
        "label": "Favorites",
        "description": "Projects you've starred.",
        "rule": "favorites"
      },
      {
        "id": "medical",
        "label": "Medical",
        "description": "Medical industry projects.",
        "rule": "industry",
        "industryId": "medical"
      },
      {
        "id": "construction",
        "label": "Construction",
        "description": "Construction industry projects.",
        "rule": "industry",
        "industryId": "construction"
      },
      {
        "id": "finance",
        "label": "Finance",
        "description": "Finance industry projects.",
        "rule": "industry",
        "industryId": "finance"
      },
      {
        "id": "restaurant",
        "label": "Restaurant",
        "description": "Restaurant industry projects.",
        "rule": "industry",
        "industryId": "restaurant"
      },
      {
        "id": "education",
        "label": "Education",
        "description": "Education industry projects.",
        "rule": "industry",
        "industryId": "education"
      },
      {
        "id": "ai",
        "label": "AI",
        "description": "AI industry projects.",
        "rule": "industry",
        "industryId": "ai"
      },
      {
        "id": "automation",
        "label": "Automation",
        "description": "Automation industry projects.",
        "rule": "industry",
        "industryId": "automation"
      },
      {
        "id": "crm",
        "label": "CRM",
        "description": "Customer relationship management systems.",
        "rule": "service",
        "serviceName": "CRM Systems"
      },
      {
        "id": "dashboard",
        "label": "Dashboard",
        "description": "Analytics and admin dashboards.",
        "rule": "tag",
        "tag": "dashboard"
      },
      {
        "id": "landing-pages",
        "label": "Landing Pages",
        "description": "Marketing and product landing pages.",
        "rule": "tag",
        "tag": "landing-page"
      },
      {
        "id": "websites",
        "label": "Websites",
        "description": "General-purpose websites.",
        "rule": "tag",
        "tag": "website"
      }
    ]
  },
  "navigation": {
    "version": "0.3.0",
    "updatedAt": "2026-07-15",
    "primary": [
      {
        "id": "home",
        "label": "Home",
        "path": "/index.html"
      },
      {
        "id": "projects",
        "label": "Projects",
        "path": "/pages/projects/index.html"
      },
      {
        "id": "industries",
        "label": "Industries",
        "path": "/pages/industries/index.html"
      },
      {
        "id": "design-systems",
        "label": "Design Systems",
        "path": "/pages/design-systems/index.html"
      },
      {
        "id": "components",
        "label": "Components",
        "path": "/pages/component-explorer/index.html"
      },
      {
        "id": "collections",
        "label": "Collections",
        "path": "/pages/collections/index.html"
      }
    ],
    "footer": [
      {
        "id": "projects",
        "label": "Projects",
        "path": "/pages/projects/index.html"
      },
      {
        "id": "industries",
        "label": "Industries",
        "path": "/pages/industries/index.html"
      },
      {
        "id": "design-systems",
        "label": "Design Systems",
        "path": "/pages/design-systems/index.html"
      },
      {
        "id": "collections",
        "label": "Collections",
        "path": "/pages/collections/index.html"
      },
      {
        "id": "components",
        "label": "Components",
        "path": "/pages/component-explorer/index.html"
      }
    ],
    "utility": []
  },
  "settings": {
    "version": "0.3.0",
    "updatedAt": "2026-07-15",
    "platform": {
      "name": "NEXORA Portfolio Platform",
      "defaultTheme": "dark",
      "supportedThemes": [
        "dark",
        "light"
      ],
      "brandColors": {
        "black": "#0a0a0a",
        "darkGray": "#1a1a1a",
        "gold": "#cda449",
        "white": "#ffffff"
      }
    },
    "features": {
      "search": true,
      "filters": true,
      "lightMode": false
    }
  },
  "searchIndex": {
    "version": "0.3.0",
    "updatedAt": "2026-07-16",
    "note": "Generated snapshot of the same index core/js/search.js builds live from Manifest data at runtime (now sourced from project-index.json + per-project project.json files, per Phase 4). This file documents the index shape and can serve as a static fallback; it is not hand-edited — regenerate it whenever project-index.json, any project.json, or industries/design-systems/components.json change.",
    "count": 95,
    "entries": [
      {
        "type": "project",
        "id": "aurora-crm",
        "slug": "aurora-crm",
        "label": "Aurora CRM",
        "href": "/pages/projects/detail/index.html?slug=aurora-crm",
        "keywords": "aurora crm customer relationship platform for boutique investment firms. a full-featured crm built for boutique investment firms — pipeline tracking, client communications, and reporting in one workspace. finance crm systems enterprise live 2.4.0 advanced crm finance dashboard react supabase tailwind css button card data-table modal deal pipeline with drag-and-drop stages client communication timeline custom report builder role-based team permissions"
      },
      {
        "type": "project",
        "id": "meridian-booking",
        "slug": "meridian-booking",
        "label": "Meridian Booking",
        "href": "/pages/projects/detail/index.html?slug=meridian-booking",
        "keywords": "meridian booking reservation and guest management for boutique hotels. an end-to-end booking engine and guest management system for independent and boutique hotels. hotel booking systems growth draft 1.1.0 intermediate hotel booking calendar next.js postgresql calendar card form real-time room availability calendar guest profile history automated confirmation emails (placeholder)"
      },
      {
        "type": "project",
        "id": "vantage-erp",
        "slug": "vantage-erp",
        "label": "Vantage ERP",
        "href": "/pages/projects/detail/index.html?slug=vantage-erp",
        "keywords": "vantage erp resource planning for mid-market manufacturers. a modular erp covering inventory, procurement, and production scheduling for mid-market manufacturers. corporate erp systems enterprise archived 3.0.1 advanced erp inventory corporate dashboard vue fastapi mongodb data-table dropdown badge multi-warehouse inventory tracking procurement approval workflows production scheduling board"
      },
      {
        "type": "project",
        "id": "pulseline-ehr",
        "slug": "pulseline-ehr",
        "label": "Pulseline EHR",
        "href": "/pages/projects/detail/index.html?slug=pulseline-ehr",
        "keywords": "pulseline ehr electronic health records for outpatient clinics. a streamlined electronic health records system for outpatient clinics, with scheduling and secure messaging. medical internal company systems enterprise live 1.6.2 advanced medical records compliance react node.js postgresql table form modal patient records with visit history secure clinician messaging appointment scheduling"
      },
      {
        "type": "project",
        "id": "siteflow-tracker",
        "slug": "siteflow-tracker",
        "label": "SiteFlow Tracker",
        "href": "/pages/projects/detail/index.html?slug=siteflow-tracker",
        "keywords": "siteflow tracker project tracking for construction site teams. a field-friendly progress tracker for construction crews — daily logs, punch lists, and photo documentation. construction workflow automation starter draft 1.0.0 beginner construction tracking mobile automation react firebase timeline card badge daily site log entries photo-documented punch lists crew assignment board"
      },
      {
        "type": "project",
        "id": "tablehost-pos",
        "slug": "tablehost-pos",
        "label": "TableHost POS",
        "href": "/pages/projects/detail/index.html?slug=tablehost-pos",
        "keywords": "tablehost pos point of sale and table management for restaurants. a modern point-of-sale and table management system built for full-service restaurants. restaurant saas development growth live 2.1.0 intermediate restaurant pos realtime react supabase data-table toast modal live table status board split-check billing kitchen order tickets"
      },
      {
        "type": "project",
        "id": "classline-lms",
        "slug": "classline-lms",
        "label": "ClassLine LMS",
        "href": "/pages/projects/detail/index.html?slug=classline-lms",
        "keywords": "classline lms course delivery and grading for online academies. a learning management system for online academies — course delivery, assignments, and grading in one place. education saas development growth live 1.3.0 intermediate education lms courses dashboard next.js supabase progress card tabs course progress tracking assignment submission and grading student performance dashboard"
      },
      {
        "type": "project",
        "id": "brightlot-realty",
        "slug": "brightlot-realty",
        "label": "Brightlot Realty",
        "href": "/pages/projects/detail/index.html?slug=brightlot-realty",
        "keywords": "brightlot realty listings and client portal for real estate agencies. a listings management and client portal platform for boutique real estate agencies. real-estate web applications starter draft 1.0.4 beginner real-estate listings portal website react firebase gallery-grid card public listing gallery client portal with saved searches agent contact requests"
      },
      {
        "type": "project",
        "id": "nova-dashboard",
        "slug": "nova-dashboard",
        "label": "Nova Dashboard",
        "href": "/pages/projects/detail/index.html?slug=nova-dashboard",
        "keywords": "nova dashboard analytics dashboard template for saas products. a general-purpose analytics dashboard template — metrics, charts, and activity feeds for any saas product. technology dashboard development growth live 1.2.0 intermediate dashboard analytics saas react recharts tailwind css kpi-card chart data-table live kpi cards revenue and usage charts recent activity feed"
      },
      {
        "type": "project",
        "id": "lumen-landing",
        "slug": "lumen-landing",
        "label": "Lumen Landing",
        "href": "/pages/projects/detail/index.html?slug=lumen-landing",
        "keywords": "lumen landing high-conversion landing page template for product launches. a conversion-focused landing page template — hero, feature grid, pricing, and signup, ready for any product launch. corporate web applications starter live 1.0.0 beginner landing-page website marketing html css javascript hero-block pricing-card feature-card animated hero section pricing comparison table signup form with validation"
      },
      {
        "type": "project",
        "id": "sentinel-ai",
        "slug": "sentinel-ai",
        "label": "Sentinel AI",
        "href": "/pages/projects/detail/index.html?slug=sentinel-ai",
        "keywords": "sentinel ai ai-powered support ticket triage agent. an ai agent that classifies, prioritizes, and routes incoming support tickets before a human ever sees them. ai ai agents enterprise draft 0.9.0 advanced ai automation support python fastapi openai badge timeline data-table automatic ticket classification priority scoring suggested response drafting"
      },
      {
        "type": "project",
        "id": "flowbot-automation",
        "slug": "flowbot-automation",
        "label": "FlowBot Automation",
        "href": "/pages/projects/detail/index.html?slug=flowbot-automation",
        "keywords": "flowbot automation no-code workflow automation between everyday business tools. a visual workflow builder that connects everyday business tools — no code required. automation workflow automation growth live 1.4.0 intermediate automation workflow integration react n8n node.js dropdown card toggle visual drag-and-drop workflow builder prebuilt integration templates run history and error logs"
      },
      {
        "type": "industry",
        "id": "medical",
        "label": "Medical",
        "href": "/pages/industries/index.html#industry-medical",
        "keywords": "medical medical"
      },
      {
        "type": "industry",
        "id": "construction",
        "label": "Construction",
        "href": "/pages/industries/index.html#industry-construction",
        "keywords": "construction construction"
      },
      {
        "type": "industry",
        "id": "finance",
        "label": "Finance",
        "href": "/pages/industries/index.html#industry-finance",
        "keywords": "finance finance"
      },
      {
        "type": "industry",
        "id": "restaurant",
        "label": "Restaurant",
        "href": "/pages/industries/index.html#industry-restaurant",
        "keywords": "restaurant restaurant"
      },
      {
        "type": "industry",
        "id": "education",
        "label": "Education",
        "href": "/pages/industries/index.html#industry-education",
        "keywords": "education education"
      },
      {
        "type": "industry",
        "id": "corporate",
        "label": "Corporate",
        "href": "/pages/industries/index.html#industry-corporate",
        "keywords": "corporate corporate"
      },
      {
        "type": "industry",
        "id": "real-estate",
        "label": "Real Estate",
        "href": "/pages/industries/index.html#industry-real-estate",
        "keywords": "real estate real-estate"
      },
      {
        "type": "industry",
        "id": "hotel",
        "label": "Hotel",
        "href": "/pages/industries/index.html#industry-hotel",
        "keywords": "hotel hotel"
      },
      {
        "type": "industry",
        "id": "retail",
        "label": "Retail",
        "href": "/pages/industries/index.html#industry-retail",
        "keywords": "retail retail"
      },
      {
        "type": "industry",
        "id": "hr",
        "label": "HR",
        "href": "/pages/industries/index.html#industry-hr",
        "keywords": "hr hr"
      },
      {
        "type": "industry",
        "id": "legal",
        "label": "Legal",
        "href": "/pages/industries/index.html#industry-legal",
        "keywords": "legal legal"
      },
      {
        "type": "industry",
        "id": "technology",
        "label": "Technology",
        "href": "/pages/industries/index.html#industry-technology",
        "keywords": "technology technology"
      },
      {
        "type": "industry",
        "id": "automation",
        "label": "Automation",
        "href": "/pages/industries/index.html#industry-automation",
        "keywords": "automation automation"
      },
      {
        "type": "industry",
        "id": "ai",
        "label": "AI",
        "href": "/pages/industries/index.html#industry-ai",
        "keywords": "ai ai"
      },
      {
        "type": "design-system",
        "id": "medical",
        "label": "Medical",
        "href": "/pages/design-systems/index.html#medical",
        "keywords": "medical medical"
      },
      {
        "type": "design-system",
        "id": "construction",
        "label": "Construction",
        "href": "/pages/design-systems/index.html#construction",
        "keywords": "construction construction"
      },
      {
        "type": "design-system",
        "id": "finance",
        "label": "Finance",
        "href": "/pages/design-systems/index.html#finance",
        "keywords": "finance finance"
      },
      {
        "type": "design-system",
        "id": "restaurant",
        "label": "Restaurant",
        "href": "/pages/design-systems/index.html#restaurant",
        "keywords": "restaurant restaurant"
      },
      {
        "type": "design-system",
        "id": "education",
        "label": "Education",
        "href": "/pages/design-systems/index.html#education",
        "keywords": "education education"
      },
      {
        "type": "design-system",
        "id": "corporate",
        "label": "Corporate",
        "href": "/pages/design-systems/index.html#corporate",
        "keywords": "corporate corporate"
      },
      {
        "type": "design-system",
        "id": "real-estate",
        "label": "Real Estate",
        "href": "/pages/design-systems/index.html#real-estate",
        "keywords": "real estate real-estate"
      },
      {
        "type": "design-system",
        "id": "hotel",
        "label": "Hotel",
        "href": "/pages/design-systems/index.html#hotel",
        "keywords": "hotel hotel"
      },
      {
        "type": "design-system",
        "id": "retail",
        "label": "Retail",
        "href": "/pages/design-systems/index.html#retail",
        "keywords": "retail retail"
      },
      {
        "type": "design-system",
        "id": "hr",
        "label": "HR",
        "href": "/pages/design-systems/index.html#hr",
        "keywords": "hr hr"
      },
      {
        "type": "design-system",
        "id": "legal",
        "label": "Legal",
        "href": "/pages/design-systems/index.html#legal",
        "keywords": "legal legal"
      },
      {
        "type": "design-system",
        "id": "technology",
        "label": "Technology",
        "href": "/pages/design-systems/index.html#technology",
        "keywords": "technology technology"
      },
      {
        "type": "design-system",
        "id": "automation",
        "label": "Automation",
        "href": "/pages/design-systems/index.html#automation",
        "keywords": "automation automation"
      },
      {
        "type": "design-system",
        "id": "ai",
        "label": "AI",
        "href": "/pages/design-systems/index.html#ai",
        "keywords": "ai ai"
      },
      {
        "type": "component",
        "id": "card",
        "label": "Card",
        "href": "/pages/component-explorer/index.html#card",
        "keywords": "card card cards"
      },
      {
        "type": "component",
        "id": "component-card",
        "label": "Component Card",
        "href": "/pages/component-explorer/index.html#component-card",
        "keywords": "component card component-card cards"
      },
      {
        "type": "component",
        "id": "design-system-card",
        "label": "Design System Card",
        "href": "/pages/component-explorer/index.html#design-system-card",
        "keywords": "design system card design-system-card cards"
      },
      {
        "type": "component",
        "id": "feature-card",
        "label": "Feature Card",
        "href": "/pages/component-explorer/index.html#feature-card",
        "keywords": "feature card feature-card cards"
      },
      {
        "type": "component",
        "id": "industry-card",
        "label": "Industry Card",
        "href": "/pages/component-explorer/index.html#industry-card",
        "keywords": "industry card industry-card cards"
      },
      {
        "type": "component",
        "id": "kpi-card",
        "label": "Kpi Card",
        "href": "/pages/component-explorer/index.html#kpi-card",
        "keywords": "kpi card kpi-card cards"
      },
      {
        "type": "component",
        "id": "metric-card",
        "label": "Metric Card",
        "href": "/pages/component-explorer/index.html#metric-card",
        "keywords": "metric card metric-card cards"
      },
      {
        "type": "component",
        "id": "preview-card",
        "label": "Preview Card",
        "href": "/pages/component-explorer/index.html#preview-card",
        "keywords": "preview card preview-card cards"
      },
      {
        "type": "component",
        "id": "pricing-card",
        "label": "Pricing Card",
        "href": "/pages/component-explorer/index.html#pricing-card",
        "keywords": "pricing card pricing-card cards"
      },
      {
        "type": "component",
        "id": "project-card",
        "label": "Project Card",
        "href": "/pages/component-explorer/index.html#project-card",
        "keywords": "project card project-card cards"
      },
      {
        "type": "component",
        "id": "stats-card",
        "label": "Stats Card",
        "href": "/pages/component-explorer/index.html#stats-card",
        "keywords": "stats card stats-card cards"
      },
      {
        "type": "component",
        "id": "alert",
        "label": "Alert",
        "href": "/pages/component-explorer/index.html#alert",
        "keywords": "alert alert feedback"
      },
      {
        "type": "component",
        "id": "empty-state",
        "label": "Empty State",
        "href": "/pages/component-explorer/index.html#empty-state",
        "keywords": "empty state empty-state feedback"
      },
      {
        "type": "component",
        "id": "loader",
        "label": "Loader",
        "href": "/pages/component-explorer/index.html#loader",
        "keywords": "loader loader feedback"
      },
      {
        "type": "component",
        "id": "notifications",
        "label": "Notifications",
        "href": "/pages/component-explorer/index.html#notifications",
        "keywords": "notifications notifications feedback"
      },
      {
        "type": "component",
        "id": "progress",
        "label": "Progress",
        "href": "/pages/component-explorer/index.html#progress",
        "keywords": "progress progress feedback"
      },
      {
        "type": "component",
        "id": "skeleton-loader",
        "label": "Skeleton Loader",
        "href": "/pages/component-explorer/index.html#skeleton-loader",
        "keywords": "skeleton loader skeleton-loader feedback"
      },
      {
        "type": "component",
        "id": "toast",
        "label": "Toast",
        "href": "/pages/component-explorer/index.html#toast",
        "keywords": "toast toast feedback"
      },
      {
        "type": "component",
        "id": "checkbox",
        "label": "Checkbox",
        "href": "/pages/component-explorer/index.html#checkbox",
        "keywords": "checkbox checkbox forms"
      },
      {
        "type": "component",
        "id": "date-picker",
        "label": "Date Picker",
        "href": "/pages/component-explorer/index.html#date-picker",
        "keywords": "date picker date-picker forms"
      },
      {
        "type": "component",
        "id": "file-upload",
        "label": "File Upload",
        "href": "/pages/component-explorer/index.html#file-upload",
        "keywords": "file upload file-upload forms"
      },
      {
        "type": "component",
        "id": "form",
        "label": "Form",
        "href": "/pages/component-explorer/index.html#form",
        "keywords": "form form forms"
      },
      {
        "type": "component",
        "id": "input",
        "label": "Input",
        "href": "/pages/component-explorer/index.html#input",
        "keywords": "input input forms"
      },
      {
        "type": "component",
        "id": "radio",
        "label": "Radio",
        "href": "/pages/component-explorer/index.html#radio",
        "keywords": "radio radio forms"
      },
      {
        "type": "component",
        "id": "search-box",
        "label": "Search Box",
        "href": "/pages/component-explorer/index.html#search-box",
        "keywords": "search box search-box forms"
      },
      {
        "type": "component",
        "id": "select",
        "label": "Select",
        "href": "/pages/component-explorer/index.html#select",
        "keywords": "select select forms"
      },
      {
        "type": "component",
        "id": "textarea",
        "label": "Textarea",
        "href": "/pages/component-explorer/index.html#textarea",
        "keywords": "textarea textarea forms"
      },
      {
        "type": "component",
        "id": "toggle",
        "label": "Toggle",
        "href": "/pages/component-explorer/index.html#toggle",
        "keywords": "toggle toggle forms"
      },
      {
        "type": "component",
        "id": "gallery-grid",
        "label": "Gallery Grid",
        "href": "/pages/component-explorer/index.html#gallery-grid",
        "keywords": "gallery grid gallery-grid media"
      },
      {
        "type": "component",
        "id": "image-preview",
        "label": "Image Preview",
        "href": "/pages/component-explorer/index.html#image-preview",
        "keywords": "image preview image-preview media"
      },
      {
        "type": "component",
        "id": "drawer",
        "label": "Drawer",
        "href": "/pages/component-explorer/index.html#drawer",
        "keywords": "drawer drawer modals"
      },
      {
        "type": "component",
        "id": "modal",
        "label": "Modal",
        "href": "/pages/component-explorer/index.html#modal",
        "keywords": "modal modal modals"
      },
      {
        "type": "component",
        "id": "breadcrumbs",
        "label": "Breadcrumbs",
        "href": "/pages/component-explorer/index.html#breadcrumbs",
        "keywords": "breadcrumbs breadcrumbs navigation"
      },
      {
        "type": "component",
        "id": "footer",
        "label": "Footer",
        "href": "/pages/component-explorer/index.html#footer",
        "keywords": "footer footer navigation"
      },
      {
        "type": "component",
        "id": "hero-block",
        "label": "Hero Block",
        "href": "/pages/component-explorer/index.html#hero-block",
        "keywords": "hero block hero-block navigation"
      },
      {
        "type": "component",
        "id": "navbar",
        "label": "Navbar",
        "href": "/pages/component-explorer/index.html#navbar",
        "keywords": "navbar navbar navigation"
      },
      {
        "type": "component",
        "id": "pagination",
        "label": "Pagination",
        "href": "/pages/component-explorer/index.html#pagination",
        "keywords": "pagination pagination navigation"
      },
      {
        "type": "component",
        "id": "section-header",
        "label": "Section Header",
        "href": "/pages/component-explorer/index.html#section-header",
        "keywords": "section header section-header navigation"
      },
      {
        "type": "component",
        "id": "sidebar",
        "label": "Sidebar",
        "href": "/pages/component-explorer/index.html#sidebar",
        "keywords": "sidebar sidebar navigation"
      },
      {
        "type": "component",
        "id": "accordion",
        "label": "Accordion",
        "href": "/pages/component-explorer/index.html#accordion",
        "keywords": "accordion accordion ui"
      },
      {
        "type": "component",
        "id": "avatar",
        "label": "Avatar",
        "href": "/pages/component-explorer/index.html#avatar",
        "keywords": "avatar avatar ui"
      },
      {
        "type": "component",
        "id": "badge",
        "label": "Badge",
        "href": "/pages/component-explorer/index.html#badge",
        "keywords": "badge badge ui"
      },
      {
        "type": "component",
        "id": "button",
        "label": "Button",
        "href": "/pages/component-explorer/index.html#button",
        "keywords": "button button ui"
      },
      {
        "type": "component",
        "id": "calendar",
        "label": "Calendar",
        "href": "/pages/component-explorer/index.html#calendar",
        "keywords": "calendar calendar ui"
      },
      {
        "type": "component",
        "id": "charts",
        "label": "Charts",
        "href": "/pages/component-explorer/index.html#charts",
        "keywords": "charts charts ui"
      },
      {
        "type": "component",
        "id": "command-palette",
        "label": "Command Palette",
        "href": "/pages/component-explorer/index.html#command-palette",
        "keywords": "command palette command-palette ui"
      },
      {
        "type": "component",
        "id": "context-menu",
        "label": "Context Menu",
        "href": "/pages/component-explorer/index.html#context-menu",
        "keywords": "context menu context-menu ui"
      },
      {
        "type": "component",
        "id": "data-table",
        "label": "Data Table",
        "href": "/pages/component-explorer/index.html#data-table",
        "keywords": "data table data-table ui"
      },
      {
        "type": "component",
        "id": "dropdown",
        "label": "Dropdown",
        "href": "/pages/component-explorer/index.html#dropdown",
        "keywords": "dropdown dropdown ui"
      },
      {
        "type": "component",
        "id": "popover",
        "label": "Popover",
        "href": "/pages/component-explorer/index.html#popover",
        "keywords": "popover popover ui"
      },
      {
        "type": "component",
        "id": "table",
        "label": "Table",
        "href": "/pages/component-explorer/index.html#table",
        "keywords": "table table ui"
      },
      {
        "type": "component",
        "id": "tabs",
        "label": "Tabs",
        "href": "/pages/component-explorer/index.html#tabs",
        "keywords": "tabs tabs ui"
      },
      {
        "type": "component",
        "id": "tag",
        "label": "Tag",
        "href": "/pages/component-explorer/index.html#tag",
        "keywords": "tag tag ui"
      },
      {
        "type": "component",
        "id": "timeline",
        "label": "Timeline",
        "href": "/pages/component-explorer/index.html#timeline",
        "keywords": "timeline timeline ui"
      },
      {
        "type": "component",
        "id": "tooltip",
        "label": "Tooltip",
        "href": "/pages/component-explorer/index.html#tooltip",
        "keywords": "tooltip tooltip ui"
      }
    ]
  }
};
