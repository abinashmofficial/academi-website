const TEMPLATES_LIST = [
  {
    id: 1,
    title: "Primary Wing Foundation Curriculum",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-book-open",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop",
    desc: "Comprehensive early years curriculum layout featuring phonics milestones, numeracy tracks, and activity schedules.",
    layout: "Two-Column Syllabus + Weekly Milestone Timeline",
    sections: ["Grade 1-5 Competency Framework", "Interactive Activity Roster", "Parent Progress Tracker"]
  },
  {
    id: 2,
    title: "Middle School STEM Exploration",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-atom",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=700&auto=format&fit=crop",
    desc: "Interdisciplinary STEM module with interactive lab schedules, pre-algebra syllabus, and science fair rubrics.",
    layout: "Grid Modules + Project Showcase Carousel",
    sections: ["Physics & Chemistry Benchmarks", "Python Programming Track", "Science Fair Project Portal"]
  },
  {
    id: 3,
    title: "High School AP & Honors Hub",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-award",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=700&auto=format&fit=crop",
    desc: "Advanced Placement course directory with college credit transfer guidelines, prerequisites, and AP syllabus guides.",
    layout: "Filterable Table + AP Credit Matrix",
    sections: ["24 AP Subjects Directory", "College Board Scoring Guide", "AP Examination Hall Passes"]
  },
  {
    id: 4,
    title: "Robotics & AI Innovation Lab",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=700&auto=format&fit=crop",
    desc: "Specialized lab curriculum featuring autonomous robotics, machine learning kits, Arduino microcontrollers, and CAD.",
    layout: "Project Showcase + Spec Sheet Tabs",
    sections: ["Hardware Rig Specifications", "FIRST Competition Prep", "AI Model Code Repositories"]
  },
  {
    id: 5,
    title: "Humanities & Model UN Portal",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-landmark",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=700&auto=format&fit=crop",
    desc: "Parliamentary debate tracks, Model UN conference agendas, constitutional law seminars, and speech recordings.",
    layout: "Debate Timeline + Resolution Archive",
    sections: ["MUN Committee Agendas", "Speech & Debate League Rules", "Diplomatic Paper Submissions"]
  },
  {
    id: 6,
    title: "Visual Arts & Digital Studio",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-palette",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=700&auto=format&fit=crop",
    desc: "Portfolio preparation portal featuring oil painting galleries, 3D modeling pipelines, and art competition briefs.",
    layout: "Masonry Portfolio + Critique Forum",
    sections: ["Student Art Portfolio Gallery", "Studio Equipment Reservation", "College Art Prep Checklist"]
  },
  {
    id: 7,
    title: "World Languages Immersion",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-language",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=700&auto=format&fit=crop",
    desc: "Multilingual learning track supporting French, Spanish, German, and Mandarin with audio modules.",
    layout: "Interactive Audio Flashcards + CEFR Level Badges",
    sections: ["CEFR A1-C2 Proficiency Track", "Exchange Program Itinerary", "Language Lab Voice Practice"]
  },
  {
    id: 8,
    title: "Academic Course Catalog & Syllabus",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-folder-tree",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=700&auto=format&fit=crop",
    desc: "Dynamic catalog with syllabus downloads, grading weightage matrices, and required textbook lists.",
    layout: "Searchable Tree + Syllabus PDF Drawer",
    sections: ["Full Grade 1-12 Subject Index", "Grading Scheme Breakdown", "Textbook & Material List"]
  },
  {
    id: 9,
    title: "Remedial Tutoring & Study Center",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-chalkboard-user",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=700&auto=format&fit=crop",
    desc: "Peer-to-peer tutoring booking platform, after-school review sessions, and diagnostic practice tests.",
    layout: "Tutor Availability Calendar + Booking Modal",
    sections: ["1-on-1 Mentor Selection", "Zero-Period Session Booking", "Practice Test Bank"]
  },
  {
    id: 10,
    title: "Summer Enrichment Academy",
    category: "academic",
    badge: "Academic",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-sun",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=700&auto=format&fit=crop",
    desc: "Summer booster camp portal with coding bootcamps, drama intensives, sports clinics, and field expeditions.",
    layout: "Camp Schedule Matrix + Registration Form",
    sections: ["6-Week Camp Modules", "Field Trip Schedule", "Early-Bird Summer Tuition"]
  },

  {
    id: 11,
    title: "Central Library & Digital Archives",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-book-bookmark",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=700&auto=format&fit=crop",
    desc: "Online OPAC library catalog, digital JSTOR access, quiet study pod reservations, and book checkout trackers.",
    layout: "Book Search Interface + Pod Reservation Grid",
    sections: ["Catalog Search (50k+ Volumes)", "Study Pod Booking", "Digital Research Journal Access"]
  },
  {
    id: 12,
    title: "Athletics & Sports Complex",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-trophy",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=700&auto=format&fit=crop",
    desc: "Varsity tournament fixtures, stadium booking, athletics roster, swimming arena timings, and fitness stats.",
    layout: "Match Scoreboards + Arena Photo Hero",
    sections: ["Varsity Game Schedule", "North Complex Arena Rules", "Athletic Tryout Registration"]
  },
  {
    id: 13,
    title: "Performing Arts & Symphony Hall",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-music",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=700&auto=format&fit=crop",
    desc: "Auditorium seating booking, choir rehearsals, stage play ticket purchases, and orchestra auditions.",
    layout: "Seating Chart + Performance Calendar",
    sections: ["Annual Gala Ticket Seat Picker", "Orchestra Audition Form", "Stage Lighting & Audio Specs"]
  },
  {
    id: 14,
    title: "Student Dining & Cafeteria Menu",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-utensils",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=700&auto=format&fit=crop",
    desc: "Weekly nutritional menu, organic meal options, allergen filters, and meal card balance top-up portal.",
    layout: "Weekly Menu Board + Allergen Toggles",
    sections: ["Monday-Friday Daily Specials", "Allergy-Safe Zone Info", "Dining Card Recharge"]
  },
  {
    id: 15,
    title: "Campus Housing & Boarding Dorms",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-building-columns",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=700&auto=format&fit=crop",
    desc: "Boarding house facilities, dorm supervisor contacts, weekend leave passes, and common room virtual tour.",
    layout: "Room Layout Cards + Virtual Tour Panorama",
    sections: ["Residential Wing Floorplans", "Dorm Parent Roster", "Weekend Gatepass Request"]
  },
  {
    id: 16,
    title: "Health, Wellness & First Aid Clinic",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-heart-pulse",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=700&auto=format&fit=crop",
    desc: "Full-time nursing station, immunization records, mental health counselor booking, and medical emergency desk.",
    layout: "Emergency Banner + Confidential Appointment",
    sections: ["Nurse Station Timings", "Counselor Consultation Booking", "Medical Exemption Submission"]
  },
  {
    id: 17,
    title: "Bus Routes & Transportation Fleet",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-bus-simple",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=700&auto=format&fit=crop",
    desc: "Real-time GPS bus tracking stops, fleet safety specs, driver credentials, and morning pickup schedules.",
    layout: "Interactive Route Map + Bus Stop Directory",
    sections: ["18 Metropolitan Bus Routes", "Real-Time GPS Map Link", "Transport Fee Calculator"]
  },
  {
    id: 18,
    title: "Clubs & Extracurricular Directory",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-puzzle-piece",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop",
    desc: "Directory of 35+ student-run clubs including Astronomy, Chess, Coding, Environmental Green Team, and Photography.",
    layout: "Filterable Club Cards + Join Club Modal",
    sections: ["Club Leader Directory", "Meeting Schedule Calendar", "Club Budget Proposal Form"]
  },
  {
    id: 19,
    title: "Student Government & Leadership Council",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-user-tie",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=700&auto=format&fit=crop",
    desc: "Student council elections, constitution, bill tracker, suggestion box, and campus initiative reports.",
    layout: "Council Member Roster + Initiative Timeline",
    sections: ["Elected Officers Profile", "Monthly Townhall Minutes", "Student Petition Form"]
  },
  {
    id: 20,
    title: "Campus Safety, Security & E-Passes",
    category: "campus",
    badge: "Campus Life",
    badgeColor: "bg-[#fff0f9] text-[#db2777] border-[#fbcfe8]",
    icon: "fa-shield-halved",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=700&auto=format&fit=crop",
    desc: "Visitor pass generator, emergency protocols, 24/7 CCTV surveillance info, and parent ID pickup badges.",
    layout: "Visitor Check-In Form + Safety Guide Cards",
    sections: ["Visitor Badge Generation", "Emergency Evacuation Map", "Campus Guard Gate Contacts"]
  },

  {
    id: 21,
    title: "Admissions Hub & Application Process",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-id-card",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=700&auto=format&fit=crop",
    desc: "Step-by-step admissions guide for Grade 1 through Grade 12 with requirements, deadlines, and portals.",
    layout: "5-Step Progress Bar + Document Upload Checklist",
    sections: ["Admissions Step-by-Step Flow", "Required Document Checklist", "Entrance Exam Registration"]
  },
  {
    id: 22,
    title: "Tuition Fees & Cost Calculator",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-calculator",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=700&auto=format&fit=crop",
    desc: "Interactive tuition fee calculator with installment options, boarding fees, activity dues, and payment portal.",
    layout: "Interactive Pricing Table + Fee Slider",
    sections: ["Grade-Level Fee Breakdown", "Installment Payment Plans", "Online Fee Payment Gateway"]
  },
  {
    id: 23,
    title: "Scholarships & Financial Aid Center",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-hand-holding-dollar",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=700&auto=format&fit=crop",
    desc: "Merit and need-based financial aid forms, athletic grant requirements, and alumni endowment fund portal.",
    layout: "Scholarship Grant Cards + Eligibility Quiz",
    sections: ["Merit Scholarship Rubrics", "Need-Based Aid Calculator", "Grant Application Upload"]
  },
  {
    id: 24,
    title: "Campus Guided Tour & Open House",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-compass",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=700&auto=format&fit=crop",
    desc: "Schedule private physical tours with student ambassadors or reserve spots for the Saturday Open House.",
    layout: "Calendar Time-Slot Picker + Campus Map",
    sections: ["Open House RSVP Form", "Student Ambassador Tour", "Parking & Direction Details"]
  },
  {
    id: 25,
    title: "Virtual 360 Campus Tour",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-vr-cardboard",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop",
    desc: "Virtual 360-degree interactive tour across classrooms, auditoriums, robotics centers, and sports complexes.",
    layout: "Interactive Hotspot Map + 360 Viewer Frame",
    sections: ["360 Classroom Panoramas", "Science Lab Hotspots", "Olympic Pool 3D View"]
  },
  {
    id: 26,
    title: "International Students & Visa Desk",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-passport",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=700&auto=format&fit=crop",
    desc: "I-20 visa sponsorship guidance, English ESL assessment, homestay allocations, and airport transfer support.",
    layout: "Visa Guide Checklist + Homestay Finder",
    sections: ["Student Visa Step-by-Step", "ESL English Placement Test", "Homestay & Guardian Network"]
  },
  {
    id: 27,
    title: "Kindergarten & Early Childhood Center",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-shapes",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=700&auto=format&fit=crop",
    desc: "Play-based nursery and kindergarten curriculum, day-care timings, teacher-to-toddler ratio, and nutrition.",
    layout: "Playful Grid + Daily Toddler Schedule",
    sections: ["Montessori & Play Approach", "Daily Daycare Routine", "Kindergarten Tour Registration"]
  },
  {
    id: 28,
    title: "Transfer Student Admissions Desk",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-right-left",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop",
    desc: "Mid-year transfer enrollment, transcript credit evaluation, and peer buddy matching program.",
    layout: "Credit Transfer Matrix + Assessment Scheduler",
    sections: ["Transcript Evaluation Form", "Mid-Year Cohort Availability", "Buddy System Overview"]
  },
  {
    id: 29,
    title: "Admissions FAQ & Live Helpdesk",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-circle-question",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=700&auto=format&fit=crop",
    desc: "Frequently asked questions with search indexing, WhatsApp admissions hotline, and direct counselor chat.",
    layout: "Accordion FAQ + Live Chat Widget",
    sections: ["Top 30 Admissions Inquiries", "WhatsApp Counselor Hotline", "Document Verification Guide"]
  },
  {
    id: 30,
    title: "Prospectus & Brochure Download Hub",
    category: "admissions",
    badge: "Admissions",
    badgeColor: "bg-[#e0f9ff] text-[#0284c7] border-[#bae6fd]",
    icon: "fa-file-pdf",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=700&auto=format&fit=crop",
    desc: "High-resolution school brochures, curriculum overview PDFs, fee tables, and boarding handbook downloads.",
    layout: "Document Grid + One-Click Download Modal",
    sections: ["School Prospectus 2026-27", "Academic Handbook (PDF)", "Athletic Program Guide"]
  },

  {
    id: 31,
    title: "Board of Trustees & Leadership",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-users-gear",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=700&auto=format&fit=crop",
    desc: "Board members, mission statement, institutional endowment reports, and annual governance meeting notes.",
    layout: "Executive Profile Cards + Governance Timeline",
    sections: ["Trustee Bios & Credentials", "Strategic 2030 Vision Plan", "Endowment Annual Report"]
  },
  {
    id: 32,
    title: "Faculty Directory & Office Hours",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-chalkboard",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop",
    desc: "Searchable roster of all 120+ educators with subject specializations, qualifications, and meeting slots.",
    layout: "Filterable Grid + Direct Appointment Button",
    sections: ["Department Wise Staff List", "Office Hour Zoom Links", "Faculty Research Papers"]
  },
  {
    id: 33,
    title: "Department Heads & Subject Chairs",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-graduation-cap",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop",
    desc: "Heads of STEM, Humanities, Languages, Fine Arts, and Physical Education with department milestones.",
    layout: "Department Chair Profiles + Syllabus Overview",
    sections: ["Department Head Directory", "Curriculum Reform Notes", "Department Contact Email"]
  },
  {
    id: 34,
    title: "Parent-Teacher Association (PTA)",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-handshake",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=700&auto=format&fit=crop",
    desc: "PTA executive committee, volunteer signups, annual fundraising carnival, and parent meeting minutes.",
    layout: "Volunteer Signup Board + Event Tickets",
    sections: ["PTA Board Members", "Annual Carnival Volunteer Grid", "Monthly Meeting Minutes PDF"]
  },
  {
    id: 35,
    title: "Alumni Association & Hall of Fame",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-trophy",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=700&auto=format&fit=crop",
    desc: "Distinguished alumni showcase, mentorship network, reunion registration, and legacy giving portal.",
    layout: "Hall of Fame Tiles + Alumni Directory",
    sections: ["Notable Alumni Spotlight", "Class Reunion 2026 Registration", "Alumni Mentorship Program"]
  },
  {
    id: 36,
    title: "Career Counseling & College Prep",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-briefcase",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop",
    desc: "University application roadmap, SAT/ACT diagnostic tests, Ivy League admissions track, and essay review.",
    layout: "Application Timeline + Counselor Scheduler",
    sections: ["University Application Calendar", "SAT/ACT Mock Exam Bank", "1-on-1 Counselor Consultation"]
  },
  {
    id: 37,
    title: "Careers & Employment Opportunities",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-user-plus",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop",
    desc: "Job openings for teachers, lab technicians, and athletic coaches with online resume submissions.",
    layout: "Job Vacancy Cards + Direct Application Form",
    sections: ["Open Faculty Positions", "Teacher Compensation & Perks", "Resume & Cover Letter Upload"]
  },
  {
    id: 38,
    title: "Teacher Training & Professional Growth",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-chalkboard-user",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=700&auto=format&fit=crop",
    desc: "Staff development workshops, Cambridge certification seminars, and educational technology bootcamps.",
    layout: "Workshop Calendar + Certificate Tracker",
    sections: ["Faculty Training Modules", "EdTech Certification Courses", "Conference Travel Grants"]
  },
  {
    id: 39,
    title: "Dean of Students & Pastoral Care",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-heart",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=700&auto=format&fit=crop",
    desc: "Student conduct standards, house points tracker, anti-bullying pledge, and character education values.",
    layout: "House Points Leaderboard + Welfare Guide",
    sections: ["4 House Points Leaderboard", "Student Honor Code Pledge", "Pastoral Care Counselor Contact"]
  },
  {
    id: 40,
    title: "School Accreditations & Quality Audits",
    category: "governance",
    badge: "Staff & Governance",
    badgeColor: "bg-[#e8f5e9] text-[#4CAF50] border-[#c8e6c9]",
    icon: "fa-certificate",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=700&auto=format&fit=crop",
    desc: "Official certifications from International Baccalaureate (IB), NEASC, CIS, and state academic boards.",
    layout: "Certificate Badge Grid + Inspection Reports",
    sections: ["IB World School Seal", "NEASC Inspection Summary", "State Board Compliance Score"]
  },

  {
    id: 41,
    title: "Campus News & Press Releases",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-newspaper",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=700&auto=format&fit=crop",
    desc: "Official school press releases, media kits, student achievements, and national awards bulletin.",
    layout: "Editorial Newspaper Grid + Filter Tags",
    sections: ["Top Press Announcements", "Student Achievement Features", "Media Kit Assets Download"]
  },
  {
    id: 42,
    title: "Event Calendar & Ticket Bookings",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-calendar-days",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=700&auto=format&fit=crop",
    desc: "Monthly interactive school calendar with Google/iCal sync, ticketing for drama plays, and sports meets.",
    layout: "Monthly/Weekly Calendar + Event Modal",
    sections: ["Interactive 2026-27 Calendar", "Add to Google Calendar Sync", "Campus Event RSVP & Passes"]
  },
  {
    id: 43,
    title: "Student Portal & LMS Dashboard",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-laptop-code",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=700&auto=format&fit=crop",
    desc: "Single sign-on student dashboard with homework assignments, gradebook, attendance percentage, and class Zoom links.",
    layout: "SaaS Student Dashboard + Widget Cards",
    sections: ["Homework Submission Desk", "Live Gradebook & GPA Calc", "Attendance Tracker (98.4%)"]
  },
  {
    id: 44,
    title: "Parent Portal & Fee Receipts",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-user-lock",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=700&auto=format&fit=crop",
    desc: "Secure parent portal for report cards, teacher messaging, fee receipt downloads, and bus tracking.",
    layout: "Parent Overview + Actionable Notifications",
    sections: ["Report Card PDF Downloads", "Direct Teacher Messenger", "Fee Payment Receipts"]
  },
  {
    id: 45,
    title: "Teacher Portal & Grading Console",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-clipboard-check",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop",
    desc: "Faculty management console for attendance marking, gradebook entry, lesson plans, and circular publishing.",
    layout: "Grade Entry Matrix + Student Roster",
    sections: ["Fast Attendance Roster", "Grade Curve Calculator", "Lesson Plan Template Builder"]
  },
  {
    id: 46,
    title: "Examination Portal & Hall Tickets",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-file-invoice",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=700&auto=format&fit=crop",
    desc: "Official examination hall tickets, seat allotments, subject codes, and result lookup portal.",
    layout: "Digital Hall Ticket Generator + Result Lookup",
    sections: ["Printable Hall Pass PDF", "Seat Allotment Hall Matrix", "Term Exam Result Search"]
  },
  {
    id: 47,
    title: "Interactive Video Gallery & Livestream",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-video",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop",
    desc: "Video streaming hub for graduation ceremony livestreams, TEDx youth talks, sports finals, and choir performances.",
    layout: "Main Video Player + Video Playlist Grid",
    sections: ["Graduation Live Stream Broadcast", "TEDx Youth Talks Playlist", "Sports Finals Highlights"]
  },
  {
    id: 48,
    title: "Student Newspaper & Literary Magazine",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-feather-pointed",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=700&auto=format&fit=crop",
    desc: "Student editorial publication featuring investigative articles, poetry, art submissions, and interviews.",
    layout: "Magazine Article Flipbook + Submission Box",
    sections: ["Monthly Beacon Edition", "Student Poetry & Fiction", "Editorial Board Application"]
  },
  {
    id: 49,
    title: "Virtual Classroom & Hybrid Learning Hub",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-display",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=700&auto=format&fit=crop",
    desc: "Live class joining links, recorded lecture archives, whiteboard downloads, and interactive quiz sessions.",
    layout: "Lecture Stream Card + Notes Split-view",
    sections: ["One-Click Zoom Class Launcher", "Archived Lecture Video Library", "Digital Whiteboard Notes"]
  },
  {
    id: 50,
    title: "School Merchandise & Uniform Store",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-shirt",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=700&auto=format&fit=crop",
    desc: "Official school uniform ordering, athletic jerseys, backpacks, winter hoodies, and stationery kits.",
    layout: "E-Commerce Catalog + Size Guide Modal",
    sections: ["Blazer & Tie Uniform Set", "Varsity Hoodie Collection", "Stationery & Kit Box"]
  },
  {
    id: 51,
    title: "STEM Science Fair & Research Symposium",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-flask-vial",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=700&auto=format&fit=crop",
    desc: "Annual scientific exposition portal featuring research abstract submissions, judge evaluation rubrics, and project posters.",
    layout: "Research Poster Showcase + Scoring Form",
    sections: ["120+ Student Abstract Directory", "Judge Evaluation Scoring Portal", "Awards & Trophy Presentation"]
  },
  {
    id: 52,
    title: "Emergency Alert & Weather Protocol",
    category: "portals",
    badge: "Media & Portals",
    badgeColor: "bg-[#f3e8ff] text-[#6d28d9] border-[#d4c8ff]",
    icon: "fa-triangle-exclamation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=700&auto=format&fit=crop",
    desc: "Real-time school closure alerts, snow day updates, SMS notification subscription, and crisis management protocols.",
    layout: "High-Priority Status Banner + SMS Opt-In",
    sections: ["Live Campus Operational Status", "Snow Day & Delay Guidelines", "Emergency SMS Broadcast Signup"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderTemplates(TEMPLATES_LIST);
  initTemplateFilters();
  initModalHandlers();
});

function renderTemplates(templates) {
  const container = document.getElementById('templates-grid');
  if (!container) return;

  container.innerHTML = '';

  templates.forEach(t => {
    const card = document.createElement('div');
    card.setAttribute('data-category', t.category);
    card.setAttribute('data-searchable', `${t.title} ${t.category} ${t.desc} ${t.layout}`);
    card.className = 'card-3d bg-[#fcfbff] rounded-3xl border-2 border-[#d4c8ff] hover:border-[#6d28d9] overflow-hidden flex flex-col justify-between group shadow-sm transition-all duration-300';
    
    card.innerHTML = `
      <div>
        <div class="relative h-52 overflow-hidden bg-[#f3f0ff]">
          <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
          <span class="absolute top-4 left-4 ${t.badgeColor} border text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
            #${t.id} ${t.badge}
          </span>
          <div class="w-10 h-10 rounded-xl bg-[#fcfbff]/90 backdrop-blur-md text-[#6d28d9] flex items-center justify-center absolute bottom-3 right-3 shadow-md">
            <i class="fa-solid ${t.icon}"></i>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-lg font-bold text-[#23124f] mb-2 group-hover:text-[#6d28d9] transition">${t.title}</h3>
          <p class="text-[#75669f] text-xs leading-relaxed mb-4">${t.desc}</p>
          <div class="bg-[#f3f0ff] p-3 rounded-xl border border-[#d4c8ff]/60 text-xs mb-4">
            <span class="font-bold text-[#6d28d9] block mb-1">Layout Architecture:</span>
            <span class="text-[#23124f]">${t.layout}</span>
          </div>
        </div>
      </div>
      <div class="p-6 pt-0 border-t border-[#d4c8ff]/50 mt-2 flex justify-between items-center text-xs">
        <span class="text-[#75669f] font-semibold">3 Modules Included</span>
        <button onclick="openTemplateDetails(${t.id})" class="btn-primary font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm">
          <span>View Blueprint</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function initTemplateFilters() {
  const buttons = document.querySelectorAll('[data-filter-btn]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter-btn');
      
      buttons.forEach(b => {
        b.classList.remove('bg-[#6d28d9]', 'text-white', 'shadow-md');
        b.classList.add('bg-[#fcfbff]', 'text-[#23124f]');
      });
      btn.classList.add('bg-[#6d28d9]', 'text-white', 'shadow-md');
      btn.classList.remove('bg-[#fcfbff]', 'text-[#23124f]');

      const filtered = category === 'all' 
        ? TEMPLATES_LIST 
        : TEMPLATES_LIST.filter(t => t.category === category);
      
      renderTemplates(filtered);
    });
  });

  const searchInput = document.getElementById('filter-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = TEMPLATES_LIST.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.desc.toLowerCase().includes(q) || 
        t.layout.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
      renderTemplates(filtered);
    });
  }
}

function openTemplateDetails(id) {
  const template = TEMPLATES_LIST.find(t => t.id === id);
  if (!template) return;

  const modal = document.getElementById('template-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="flex items-center gap-3">
        <span class="${template.badgeColor} border text-xs font-bold px-3 py-1 rounded-full">#${template.id} ${template.badge}</span>
        <span class="text-xs font-semibold text-[#75669f]">Production Ready Blueprint</span>
      </div>
      
      <div class="h-64 rounded-2xl overflow-hidden relative border border-[#d4c8ff]">
        <img src="${template.image}" alt="${template.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#23124f]/80 via-transparent to-transparent flex flex-col justify-end p-6">
          <h2 class="text-2xl font-black text-white">${template.title}</h2>
        </div>
      </div>

      <div class="space-y-2">
        <h4 class="text-sm font-bold text-[#6d28d9] uppercase tracking-wider">Description & Use Case</h4>
        <p class="text-sm text-[#23124f] leading-relaxed">${template.desc}</p>
      </div>

      <div class="bg-[#f3f0ff] p-4 rounded-2xl border border-[#d4c8ff] space-y-2">
        <h4 class="text-xs font-bold text-[#6d28d9] uppercase tracking-wider">UI Architecture</h4>
        <p class="text-xs font-semibold text-[#23124f]">${template.layout}</p>
      </div>

      <div class="space-y-3">
        <h4 class="text-sm font-bold text-[#23124f] uppercase tracking-wider">Core Modules Included:</h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${template.sections.map(s => `
            <div class="p-3 bg-[#fcfbff] rounded-xl border border-[#d4c8ff] text-xs font-bold text-[#23124f] flex items-center gap-2">
              <i class="fa-solid fa-check text-[#4CAF50]"></i>
              <span>${s}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-[#d4c8ff] flex flex-wrap gap-3 justify-end">
        <button onclick="alert('Template #${template.id} layout configuration copied to clipboard!')" class="btn-secondary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
          <i class="fa-solid fa-code"></i> Copy Layout Blueprint
        </button>
        <a href="contact.html" class="btn-primary px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
          <i class="fa-solid fa-rocket"></i> Deploy This Template
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function initModalHandlers() {
  const modal = document.getElementById('template-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}
