// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  icon: string // 添加图标字段
}

// Research & Projects
export const projectHeadLine = "Projects"
export const projectIntro = "Technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: '口腔健康管理平台',
    description: '连接家长、学校、医院、政府与项目团队的一站式闭环平台，实现全流程在线建档、预约、治疗与质控。',
    link: { href: '/projects/oral-health-management', label: '查看项目' },
    tags: ['App测试', 'Web测试', '自动化测试'],
    icon: 'shield' // 管理平台用保护盾图标
  },
  {
    name: '口腔颌面外科AI诊断平台',
    description: '通过计算机视觉与自然语言处理技术，实现口腔自助快检与智能问答。',
    link: { href: '/projects/oral-maxillofacial-ai', label: '查看项目' },
    tags: ['App测试', 'Web测试', '平板测试', '接口自动化', '性能测试', 'Python+Pytest', 'JMeter', 'CV/NLP算法验证'],
    icon: 'brain' // AI诊断用大脑图标
  },
  {
    name: '口腔质控系统',
    description: '全市级Web质控平台，为三大口腔专科提供实时评估与闭环改进。',
    link: { href: '/projects/oral-quality-control', label: '查看项目' },
    tags: ['Web测试', '接口测试', '性能测试', '安全测试', '测试文档', '并发测试'],
    icon: 'shield-check' // 质控系统用检查盾牌图标
  },
  {
    name: '口腔智慧诊断平台',
    description: '平台用CV识别牙位与病灶，一键生成报告；NLP机器人秒答口腔问题。',
    link: { href: '/projects/oral-smart-diagnosis', label: '查看项目' },
    tags: ['性能测试', 'Pytest+Requests', 'AI接口验证', '安全测试', '测试文档'],
    icon: 'zap' // 智慧诊断用闪电图标
  }
]
