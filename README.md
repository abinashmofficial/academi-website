# Academe — Modern School Website

A fast, responsive, and elegant website for **Academe International School** featuring courses, faculty directory, notice board/announcements, photo gallery with lightbox, and interactive admissions inquiry.

## 📁 Project Structure

```text
academe/
├── index.html              # Homepage with hero, pillars, highlights & quick notices
├── courses.html            # Course catalog with grade-level & category filtering
├── faculty.html            # Staff & faculty directory with department filter & search
├── announcements.html      # Campus announcements, datesheets, & circulars
├── gallery.html            # Photo gallery with interactive lightbox modal
├── contact.html            # Admission inquiry form, contact info & FAQ
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom animations, active states & lightbox styling
│   └── js/
│       └── main.js         # Mobile nav, dynamic filters, live search, & lightbox
└── README.md
```

## 🚀 Key Features

1. **Courses & Curriculum**:
   - Filter by Primary (1-5), Middle School (6-8), High School / AP (9-12), STEM & Robotics.
   - Real-time subject search bar.

2. **Faculty Directory**:
   - Filter by Science & Math, Humanities, Arts & Athletics, and Leadership & Admin.
   - Instant search across faculty bios and designations.

3. **Announcements & Notice Board**:
   - Pinned urgent notices, category filters (Academic, Events, Sports, Circulars).
   - Mock PDF download triggers.

4. **Interactive Media Gallery**:
   - Filterable photo grids for Campus, Labs, Sports, and Arts.
   - Full-screen lightbox modal with keyboard navigation (ESC close).

5. **Admissions & Contact**:
   - Interactive inquiry form with feedback toast validation.
   - Campus details, office timings, and FAQ section.

## 💻 How to View / Run

You can open `index.html` directly in any web browser, or serve it using any static HTTP server:

```bash
cd /var/www/personal/mp/academe
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.
