// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
//   {
//     name: 'Outstanding Teacher Award',
//     description: '',
//     date: '2024',
//     location: 'SCLS, Shanghai',
//   },
//   {
//     name: 'Zhui Ying Award',
//     description: '',
//     date: '2023',
//     location: 'Qingpu, Shanghai',
//   },
]

// Research & Projects
export const projectHeadLine = "Projects"
export const projectIntro = "Technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Oral health management platform',
    description: 'A one-stop closed-loop platform connecting parents, schools, hospitals, government and project teams for fully online record-keeping, booking, treatment and quality control.',
    link: { href: 'www.baidu.com', label: 'View Project' },
    tags: ['App Testing', 'Web Testing', 'Automation Testing']
  },
  {
    name: 'Oral-AI Diagnosis Platform',
    description: 'Instant oral self-check and smart Q&A powered by CV & NLP',
    link: { href: 'www.baidu.com', label: 'View Project' },
    tags: ["App Testing",
"Web Testing",
"Tablet Testing",
"API Automation",
"Performance Testing",
"Python+Pytest",
"JMeter",
"CV/NLP Algorithm Validation"]
  },
  {
    name: 'Oral QC System',
    description: 'City-wide web QC platform providing real-time evaluation and closed-loop improvement for three oral specialties.',
    link: { href: 'www.baidu.com', label: 'View Project' },
    tags: ["Web Testing", "API Testing", "Performance Testing", "Security Testing", "Test Documentation", "Concurrency Testing"]
  },
  {
    name: 'Oral-Maxillofacial AI EMR Assistant',
    description: 'Web-based AI EMR assistant auto-generates standardized records and provides end-to-end quality control for digital oral-maxillofacial workflows.',
    link: { href: 'www.baidu.com', label: 'View Project' },
    tags: ["Web Testing", "Performance Testing", "JMeter", "Pytest+Requests", "AI API Validation", "Security Testing", "Test Documentation"]
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
//   {
//     name: 'Python Workshop',
//     description:
//       'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
//     date: '2024-02-24',
//     location: 'Shanghai',
//     link: 'https://example.com/python-workshop',
//   },
//   {
//     name: 'AI Ethics Discussion',
//     description:
//       'A group discussion about the ethical implications of AI development and its impact on society.',
//     date: '2024-03-01',
//     location: 'Shanghai',
//     link: 'https://example.com/ai-ethics',
//   },
//   {
//     name: 'Code Review Session',
//     description:
//       'Helping students improve their coding skills through peer code review and best practices sharing.',
//     date: '2024-03-15',
//     location: 'Shanghai',
//   },
]
