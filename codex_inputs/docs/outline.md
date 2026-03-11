Codex Build Spec: C. Archer & Associates Demo Website
## Project Type
Flask modular website demo using Tailwind CDN, HTML, CSS, and JavaScript.

## Primary Goal
Build a **clean, modernized demo** of the current C. Archer & Associates website that preserves the **general aesthetic, tone, and professional simplicity** of the current site, while making it feel more polished, current, and credible.

This is **not** meant to become an aggressive marketing site or SEO-heavy lead-generation funnel.

The client does **not** want a bloated site. He already gets regular contracts and is not especially concerned with SEO expansion or adding lots of extra content. The purpose of this demo is to show:

- a more professional presentation
- better visual hierarchy
- better mobile responsiveness
- a cleaner and more trustworthy user experience
- a more current version of the same company identity

The result should feel like:

- the same company
- the same general aesthetic family
- the same kind of content
- but much more refined and modern

---

## Important Business Context
This client is an established engineering / low-voltage / telecommunications consulting firm. The website primarily acts as:

1. **Credibility validation**
2. **Professional legitimacy**
3. **Portfolio presentation**
4. **Basic contact point**

This is **not** a startup-style site.
This is **not** a trendy SaaS landing page.
This is **not** a hyper-animated digital agency site.
This is **not** a heavy conversion funnel.

The client appears to prefer a conservative, stable, competent tone.

The site should feel:

- established
- trustworthy
- technical
- straightforward
- professional
- calm
- slightly understated

---

## Source Material Summary
The current website includes the following pages and content themes:

### Existing Pages
- Home
- About Us
- Services
- Projects
- Contact Us

### Existing Visual Style
The current site is an older Bootstrap-based business site with:
- full-width hero images / slider
- straightforward navbar
- large photo banners
- corporate engineering tone
- project thumbnails
- service categories
- contact information and office location
- minimal interactivity

### Existing Brand Positioning
The current site communicates that C. Archer & Associates is a technology consulting partnership specializing in low-voltage systems for:
- healthcare
- education
- private business
- state and federal government
- municipalities
- emergency services
- airports
- sports venues
- correctional facilities

### Existing Service Themes
The current site references:
- voice/data network cable plant
- CATV/video distribution systems
- wireless networks
- public address systems
- AV systems
- physiological monitoring cable plant
- intercom systems
- nurse call systems
- patient hospitality systems
- RTLS
- cable pathways and spaces
- DAS
- telephone systems
- active network WAN/LAN
- surveillance / access control / intrusion detection

### Existing Project/Credibility Signals
The current site references major institutional work and collaborators, including:
- Montgomery County Public Schools
- Hershey Medical
- Children’s Hospital of Philadelphia
- Ewing Cole
- Ballinger
- and many collaborating partners

### Existing About Page Themes
The about page emphasizes:
- experience in telecommunications industry
- attention to detail
- coordinated bid documents
- reduced change orders / delays
- maintaining client standards
- design with owner maintenance in mind
- detailed review of contractor submittals
- site visits during construction
- use of AutoCAD and Revit
- work with architects, MEP engineers, end users, and contractors

### Existing Contact Information
The current site shows:
- office address
- phone number
- fax
- email addresses for Chris Archer and Kirk Winkelman

This information should be represented in the demo if appropriate, but structure it cleanly.

---

## Core Instruction
Build a **demo redesign** that keeps the site recognizable to the client.

### That means:
Do **not** radically reinvent the company.
Do **not** turn it into a flashy startup website.
Do **not** use excessive motion.
Do **not** overcomplicate navigation.
Do **not** overdesign it.

### Instead:
Create a website that feels like:
> “This is our same firm, but finally presented at the level it deserves.”

---

## Tech Stack Requirements
Use:

- Flask
- modular Flask structure with Blueprints
- Jinja templates
- Tailwind via CDN for now
- plain JavaScript only where needed
- HTML templates
- local CSS file for any custom styles that Tailwind alone does not handle
- no React
- no build step required
- no database required for this demo
- no authentication
- no admin panel

This should be a **lightweight, navigable demo**, not a production application.

---

## Flask Structure Requirements
Use a clean modular Flask structure.

Recommended structure:

```text
project_root/
│
├── app/
│   ├── __init__.py
│   ├── main/
│   │   ├── __init__.py
│   │   └── routes.py
│   ├── static/
│   │   ├── css/
│   │   │   └── site.css
│   │   ├── js/
│   │   │   └── site.js
│   │   └── images/
│   └── templates/
│       ├── base.html
│       ├── partials/
│       │   ├── nav.html
│       │   ├── footer.html
│       │   └── cta_band.html
│       ├── index.html
│       ├── about.html
│       ├── services.html
│       ├── projects.html
│       └── contact.html
│
├── config.py
├── run.py
└── requirements.txt