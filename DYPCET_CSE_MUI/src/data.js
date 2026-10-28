// All editable site content lives here — swap placeholder details for real
// department data (names, contacts, stats, notices) without touching markup.

export const stats = [
  { num: "1,100+", label: "Students across UG, PG & PhD" },
  { num: "38", label: "Full-time faculty" },
  { num: "92%", label: "UG placement rate, 2025–26" },
  { num: "₹41.5L", label: "Highest package offered" },
];

// Placeholder campus/lab imagery for the hero marquee — swap `src` for real
// department photography before publishing. Picsum IDs are fixed so the set
// stays stable across reloads.
export const marqueeImages = [
  { src: "https://www.collegebatch.com/static/clg-gallery/dy-patil-college-of-engineering-technology-kolhapur-271054.webp", caption: "Main academic block" },
  { src: "https://dypatil-edu-cms.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/08/22092948/ct-1.jpg", caption: "Computer Science Lab" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2O7vJ0-mqAEDpTMW2RizG4F732fD6uh-HaAA_GPTXy26zcSPOhF-fzR4&s=10", caption: "College Logo" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_bVjifAPHJLDyleqkv0ZtFDEjI_BAVBLOwumqXMxqA&s", caption: "Convocation, 2025" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeu4t8DcgBkVT6o5NQnV4wpV4xacxYgYdEuSrdluZzhlknFngWphAEkHQ&s=10", caption: "Department Block" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8JF2KlxXMl5nDEXk3rNgf-TjyaCNQ5lfchvZsy7NSxO4QvhKffHLGNo&s=10", caption: "Campus placement drive" },
  { src: "https://i.ytimg.com/vi/2Gma4_A77ac/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD_CGfgR-SYiW6F70A_KRWtvBJtqA", caption: "Department library" },
];

export const pillars = [
  {
    title: "Outcome-based curriculum",
    text: "Course outcomes mapped to programme outcomes, revised annually with industry advisory board input.",
  },
  {
    title: "Project-first pedagogy",
    text: "Every semester from the third year onward includes a graded, mentor-reviewed project milestone.",
  },
  {
    title: "Research-aware teaching",
    text: "Faculty publishing in AI, systems and security bring current problems directly into coursework.",
  },
];

export const programs = [
  {
    tag: "Undergraduate",
    title: "B.Tech in Computer Science & Engineering",
    desc: "A four-year programme covering programming, systems, theory and a two-semester capstone project, with electives in AI/ML, cloud computing and cybersecurity.",
    meta: [
      { n: "4 yrs", l: "Duration" },
      { n: "180", l: "Annual intake" },
    ],
  },
  {
    tag: "Postgraduate",
    title: "M.Tech in Computer Science & Engineering",
    desc: "A research-oriented two-year programme with specialisations in Data Science and Computer Networks, culminating in a thesis under faculty supervision.",
    meta: [
      { n: "2 yrs", l: "Duration" },
      { n: "24", l: "Annual intake" },
    ],
  },
  {
    tag: "Doctoral",
    title: "Ph.D. in Computer Science & Engineering",
    desc: "Full-time and part-time doctoral study across the Department's core research areas, conducted under the university's PhD ordinance.",
    meta: [
      { n: "3–5 yrs", l: "Duration" },
      { n: "Rolling", l: "Admissions" },
    ],
  },
];

export const researchAreas = [
  {
    idx: "01",
    title: "Artificial Intelligence & Machine Learning",
    text: "Deep learning architectures, model efficiency, and applied ML for healthcare and agriculture.",
  },
  {
    idx: "02",
    title: "Data Science & Analytics",
    text: "Large-scale data processing, predictive analytics, and visual analytics for decision support.",
  },
  {
    idx: "03",
    title: "Cybersecurity & Cryptography",
    text: "Network security, applied cryptography, and secure software engineering practices.",
  },
  {
    idx: "04",
    title: "Cloud Computing & Distributed Systems",
    text: "Resource scheduling, edge–cloud architectures, and fault-tolerant distributed systems.",
  },
  {
    idx: "05",
    title: "Internet of Things",
    text: "Embedded sensing, low-power networking protocols, and IoT systems for smart infrastructure.",
  },
  {
    idx: "06",
    title: "Software Engineering",
    text: "Requirements engineering, software quality metrics, and empirical studies of development practice.",
  },
];

export const hod = {
  initials: "SD",
  name: "Dr. S. D. Patil",
  role: "Professor & Head of Department",
  bio: "Dr. Patil leads the Department's academic and research programme, with a research background in distributed systems and cloud resource management. She has supervised over a dozen postgraduate theses and serves on the college's academic council.",
};

export const faculty = [
  { initials: "AK", name: "Dr. A. R. Kulkarni", role: "Professor", spec: "Machine Learning · Computer Vision" },
  { initials: "RJ", name: "Dr. R. S. Joshi", role: "Associate Professor", spec: "Cybersecurity · Cryptography" },
  { initials: "MP", name: "Prof. M. V. Pawar", role: "Associate Professor", spec: "Data Science · Databases" },
  { initials: "SK", name: "Dr. S. B. Kadam", role: "Assistant Professor", spec: "IoT · Embedded Systems" },
  { initials: "NP", name: "Prof. N. A. Powar", role: "Assistant Professor", spec: "Cloud Computing · Networks" },
  { initials: "VD", name: "Prof. V. S. Desai", role: "Assistant Professor", spec: "Software Engineering" },
  { initials: "PC", name: "Dr. P. M. Chavan", role: "Assistant Professor", spec: "Theory of Computation" },
  { initials: "AS", name: "Prof. A. T. Shinde", role: "Assistant Professor", spec: "Algorithms · Competitive Programming" },
];

export const facilities = [
  { name: "Artificial Intelligence & Data Science Lab", cap: "60 workstations, GPU cluster" },
  { name: "Cybersecurity & Networks Lab", cap: "40 workstations, isolated test network" },
  { name: "IoT & Embedded Systems Lab", cap: "30 benches, sensor & microcontroller kits" },
  { name: "Software Engineering Lab", cap: "50 workstations" },
  { name: "Cloud & Distributed Systems Lab", cap: "On-prem cluster + cloud credits" },
  { name: "Department Library & Reading Room", cap: "Journals, theses, reference texts" },
  { name: "Project & Incubation Cell", cap: "Dedicated space for final-year and startup teams" },
  { name: "Seminar Hall", cap: "120-seat capacity, video-conferencing enabled" },
];

export const notices = [
  { month: "SEP", day: "15", title: "Odd-semester mid-term examination schedule released for all years.", cat: "Examinations" },
  { month: "SEP", day: "22", title: "Guest lecture on large language model deployment, in collaboration with an industry partner.", cat: "Guest Lecture" },
  { month: "OCT", day: "03", title: "Final-year project synopsis submission deadline.", cat: "Academics" },
  { month: "OCT", day: "18", title: "Department technical symposium — call for student papers now open.", cat: "Symposium" },
  { month: "NOV", day: "05", title: "Campus placement drive — pre-placement talk for final-year students.", cat: "Placements" },
];

export const placements = {
  rate: "92%",
  rateLabel: "of eligible students placed",
  rows: [
    { k: "Average package", v: "₹6.8 LPA" },
    { k: "Highest package", v: "₹41.5 LPA" },
    { k: "Recruiting companies", v: "85+" },
  ],
};

export const contact = {
  address:
    "Department of Computer Science & Engineering, D. Y. Patil College of Engineering and Technology, Kasaba Bawada, Kolhapur, Maharashtra 416006",
  office: "cse.office@dypcet.ac.in · +91 231 260 0000",
  hodEmail: "hod.cse@dypcet.ac.in",
  hours: "Monday – Saturday, 9:30 AM – 5:30 PM",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#research", label: "Research" },
  { href: "#faculty", label: "Faculty" },
  { href: "#facilities", label: "Facilities" },
  { href: "#notices", label: "Notices" },
  { href: "#contact", label: "Contact" },
];
