import { ProgramItem } from "../types";

export const PROGRAMS: ProgramItem[] = [
  {
    id: "dance",
    name: "DANCE",
    slug: "dance",
    tagline: "Unleash rhythm, grace, and athletic expression",
    description:
      "Our premier dance academy equips young performers with foundational technique, stage presence, and confidence. From classical discipline to high-energy street styles, our world-class certified choreographers nurture every child's artistic potential.",
    heroImage: "/images/dance-stage.webp",
    subPrograms: [
      "Ballet",
      "Hip Hop",
      "Bollywood",
      "Bharatanatyam",
      "Freestyle & More",
    ],
    ageGroups: ["Tiny Tots (2.5 - 5 yrs)", "Juniors (6 - 10 yrs)", "Teens (11 - 17 yrs)", "Advanced Troupe"],
    features: [
      "International syllabus and certification",
      "Annual mega stage concerts & arena showcases",
      "Dedicated air-sprung wooden dance floors",
      "Choreography masterclasses with renowned global artists",
    ],
    benefits: [
      "Enhanced physical coordination and stamina",
      "Unshakable self-confidence on stage",
      "Teamwork and synchronized performance skills",
      "Healthy posture, flexibility, and creative expression",
    ],
    schedule: "Weekdays & Weekends (Morning, Afternoon & Evening Batches)",
    accentColor: "#E91E73",
  },
  {
    id: "music",
    name: "MUSIC",
    slug: "music",
    tagline: "Inspiring melodies, harmony, and musical mastery",
    description:
      "Experience structured, joyful music education tailored for modern learners. Whether mastering keys, strings, percussion, or vocal techniques, students develop pitch perfection, ear training, and stage performance readiness.",
    heroImage: "/images/music-girl.webp",
    subPrograms: [
      "Piano",
      "Violin",
      "Guitar",
      "Drums",
      "Vocal",
    ],
    ageGroups: ["Early Beats (3 - 5 yrs)", "Foundations (6 - 9 yrs)", "Intermediate (10 - 14 yrs)", "Mastery (15+ yrs)"],
    features: [
      "Trinity College London & ABRSM exam preparation",
      "Acoustically treated private and ensemble studios",
      "Live band jams and acoustic recital showcases",
      "Complete music theory and ear-training integration",
    ],
    benefits: [
      "Sharper focus, cognitive memory, and mathematical acuity",
      "Emotional resilience and expressive musicality",
      "Fine motor finger dexterity and rhythmic discipline",
      "Joy of creating original songs and ensemble performance",
    ],
    schedule: "Flexible 1-on-1 & small group sessions available 6 days a week",
    accentColor: "#9333EA",
  },
  {
    id: "gymnastics",
    name: "GYMNASTICS",
    slug: "gymnastics",
    tagline: "Agility, strength, flexibility, and fearlessness",
    description:
      "Taught by certified international coaches in safety-padded professional facilities. Our progressive gymnastics curriculum builds explosive core power, balance, aerial awareness, and Olympic-standard discipline.",
    heroImage: "/images/gymnastics-boy.webp",
    subPrograms: [
      "Flexibility Training",
    ],
    ageGroups: ["Little Tumblers (2.5 - 4 yrs)", "Rising Stars (5 - 8 yrs)", "Acro Juniors (9 - 13 yrs)", "Elite Squad (14+ yrs)"],
    features: [
      "Safety-certified landing pits and Olympic balance beams",
      "Low coach-to-student ratio (1:6) for individualized supervision",
      "Graded skill progression badges and achievement passports",
      "Inter-branch and regional competition pathways",
    ],
    benefits: [
      "Superior physical strength, posture, and core stability",
      "Fearless determination and emotional perseverance",
      "Total body spatial awareness and athletic coordination",
      "Lifelong injury prevention habits and peak flexibility",
    ],
    schedule: "Mon - Sat: Dedicated age-graded slots and weekend bootcamps",
    accentColor: "#F59E0B",
  },
  {
    id: "fine-arts",
    name: "FINE ARTS",
    slug: "fine-arts",
    tagline: "Colors, imagination, visual mastery, and creative freedom",
    description:
      "Fuel your child's imagination through hands-on creative experimentation. From classic sketching and watercolor to vibrant acrylics, craft innovations, and digital tablet illustration, young artists find their visual voice.",
    heroImage: "/images/theatre-kids.webp",
    subPrograms: [
      "Drawing",
      "Painting",
      "Sketching",
    ],
    ageGroups: ["Little Picassos (3 - 5 yrs)", "Creative Creators (6 - 10 yrs)", "Young Masters (11 - 16 yrs)"],
    features: [
      "Professional art supplies and non-toxic studio mediums",
      "Annual gallery exhibitions open to the public and art collectors",
      "Portfolio development for school admissions and design majors",
      "Digital illustration tablets and stylus workstations",
    ],
    benefits: [
      "Heightened observational focus and spatial reasoning",
      "Stress relief, mindfulness, and constructive emotional outlet",
      "Fine motor precision and sensory tactile development",
      "Confidence in conceptual originality and visual storytelling",
    ],
    schedule: "Weekdays & Weekends: Flexible creative studio sessions",
    accentColor: "#10B981",
  },
];
