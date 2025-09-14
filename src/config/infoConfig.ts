export { projectHeadLine, projectIntro, projects, type ProjectItemType } from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Precia'
export const headline = 'Software Test Engineer at a healthcare internet company.'
export const introduction =
  "Hello everyone! My name is Precia. I’m from Henan province and have been working as a Software Test Engineer at Medcare in Qingdao since 2022."
export const email = 'eutopia101731@gmail.com'
export const githubUsername = 'precia-xin'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Shh… it’s a secret."
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about testing and Programming."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'Python',
  'selenium',
  'pytest',
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',


]
