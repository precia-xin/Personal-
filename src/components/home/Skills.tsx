"use client"

import { CheckCircle, Code, Zap } from 'lucide-react'

const skillsData = [
  "具备3年Web/APP接口/自动化测试、功能测试、APP专项测试经验",
  "熟练使用Python Requests+Pytest框架搭建和维护接口自动化测试项目",
  "熟练使用Selenium框架进行Web端UI自动化测试脚本开发",
  "熟练使用 Jenkins 持续集成平台构建自动化测试",
  "熟悉APP测试和App专项测试，并能独立设计专项测试场景：安装/升级/卸载、网络测试（含弱网）、中断测试、耗电量测试、手机行为测试、兼容性测试",
  "熟练掌握接口测试流程，能独立完成接口测试工作，精通使用 JMeter, Postman等主流接口测试工具",
  "熟练使用JMeter进行接口性能和负载测试，能够编写和调试JMeter脚本，并初步分析性能指标",
  "熟练使用Fiddler进行抓包，分析请求/响应，定位前后端BUG，进行弱网模拟测试",
  "熟练使用MySQL常用增删改查及多表关联查询指令",
  "掌握版本控制工具Git的使用，熟悉常用命令操作",
  "熟练使用禅道测试管理工具，熟练掌握缺陷提交、跟踪、复测及闭环管理流程"
]

export default function Skills() {
  return (
    <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
      <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl text-foreground opacity-80 mb-4">
        <Zap size={28}/>
        Skills
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        专业技能与技术能力概览，涵盖测试领域的全面经验和工具掌握。
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 border border-border/50">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <p className="text-base text-foreground leading-relaxed">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}