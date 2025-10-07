'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { FloatingBackButton } from '@/components/shared/FloatingBackButton'

export default function OralHealthManagement() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 使用标准容器结构确保内容在背景范围内 */}
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12 py-8">
            <div className="mx-auto max-w-4xl lg:max-w-6xl">
              {/* 静态返回按钮 - 页面顶部显示 */}
              <button
                onClick={() => router.back()}
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-lg shadow-black/20 ring-1 ring-border transition hover:bg-muted"
                aria-label="返回项目列表"
              >
                <ArrowLeft className="h-4 w-4 stroke-foreground transition group-hover:stroke-primary" />
              </button>

              {/* 项目卡片 - 在容器约束内 */}
              <div className="bg-card text-card-foreground backdrop-blur-sm rounded-2xl shadow-2xl border border-border">
                {/* 标题区 - 参考口腔颌面外科AI诊断平台优化 */}
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-16 text-center relative overflow-hidden">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 relative">口腔健康管理平台</h1>
                  <p className="text-xl opacity-90 relative">2022.06-2025.09</p>
                  <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto relative break-words">
                    构建覆盖全市的儿童口腔健康信息化平台，实现家长、学校、医疗机构、政府部门（教育局/卫生局）及窝沟封闭项目组等全角色的工作流程闭环管理。
                  </p>
                </div>

                {/* 内容区 */}
                <div className={`p-8 sm:p-12 space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* 项目概述 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">项目概述</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      平台核心功能涵盖儿童健康档案建立、预约管理（号池分配、家长预约）、诊疗流程（医生检查、手术、报告）及项目质控督导等，为青岛市儿童提供统一的口腔健康管理服务。系统采用云端部署，支持PC、手机及平板等多终端访问。
                    </p>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">200+</div>
                        <div className="text-sm opacity-90">接口自动化用例</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">70%</div>
                        <div className="text-sm opacity-90">自动化覆盖率</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">50%</div>
                        <div className="text-sm opacity-90">回归测试效率提升</div>
                      </div>
                    </div>
                  </div>

                  {/* 岗位职责 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">岗位职责</h2>
                    <div className="space-y-5">
                      {/* 职责1-5 已用 muted-foreground 随主题换色 */}
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">功能测试与专项测试</h3>
                          <p className="text-muted-foreground">负责项目的接口自动化测试、UI 自动化测试、接口性能测试及功能测试。对App进行兼容性、网络及弱网专项测试。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">搭建并维护自动化框架</h3>
                          <div className="space-y-3 text-muted-foreground">
                            <p className="break-words">
                              <span className="font-medium">接口自动化框架：</span>基于<span className="bg-muted px-1 rounded text-foreground">Python+Requests+Pytest+Pymysql+Openpyxl+Loguru+Allure</span>搭建接口自动化框架，编写<span className="font-semibold text-primary">200+</span>接口自动化用例，覆盖核心业务流程，自动化覆盖率达<span className="font-semibold text-primary">70%</span>，回归测试效率提升<span className="font-semibold text-primary">50%</span>。
                            </p>
                            <p className="break-words">
                              <span className="font-medium">UI自动化框架：</span>基于<span className="bg-muted px-1 rounded text-foreground">Python+Selenium+Pytest+Allure+Loguru</span>模式搭建UI自动化框架，编写<span className="font-semibold text-primary">100+</span>UI自动化脚本，主流程自动化覆盖率达<span className="font-semibold text-primary">60%</span>。
                            </p>
                            <p className="break-words">
                              <span className="font-medium">框架优化：</span>采用代码分层、数据驱动、PO设计思想持续优化框架，提高覆盖率与可维护性。
                            </p>
                            <p className="break-words">
                              <span className="font-medium">持续集成：</span>使用<span className="bg-muted px-1 rounded text-foreground">Jenkins+Git</span>实现持续集成，定时触发自动化任务并通过邮件发送结果。
                            </p>
                            <p className="break-words">
                              <span className="font-medium">结果分析：</span>分析测试报告与结果，跟踪缺陷并持续优化框架代码。
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">性能测试与优化</h3>
                          <p className="text-muted-foreground">完成 10+ 核心场景性能分析与脚本编写；通过 JMeter 压测定位并协助优化 3 个瓶颈，接口平均响应时间从 2 s 降至 500 ms，系统并发用户数从 100 提升至 500。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">安全测试</h3>
                          <p className="text-muted-foreground">使用 AppScan 进行全链路安全扫描，发现 XSS 漏洞、SQL 注入风险等。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">线上跟踪与用户反馈</h3>
                          <p className="text-muted-foreground">项目上线后持续跟踪线上情况，收集并处理用户反馈。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 悬浮返回按钮 - 滚动时显示 */}
      <FloatingBackButton ariaLabel="返回项目列表" />
    </div>
  )
}