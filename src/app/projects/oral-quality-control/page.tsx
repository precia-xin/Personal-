'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { FloatingBackButton } from '@/components/shared/FloatingBackButton'

export default function OralQualityControl() {
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
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 relative">口腔质控系统</h1>
                  <p className="text-xl opacity-90 relative">2024.5-2025.09</p>
                  <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto relative break-words">
                    基于Web的全市医疗数据构建口腔专科质控平台，动态评估种植、根管、牙周三大病种诊疗质量。
                  </p>
                </div>

                {/* 内容区 */}
                <div className={`p-8 sm:p-12 space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* 项目概述 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">项目概述</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      支持医生病历模板下载、书写、上报全流程管理，集成影像标注、AI模型训练及推理服务，实现诊疗质量精准提升。系统基于全市医疗数据，动态评估种植、根管、牙周三大病种诊疗质量，为医疗机构提供质量改进方案。
                    </p>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">200+</div>
                        <div className="text-sm opacity-90">并发用户支持</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">1s</div>
                        <div className="text-sm opacity-90">高负载响应时间</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">3</div>
                        <div className="text-sm opacity-90">专科病种覆盖</div>
                      </div>
                    </div>
                  </div>

                  {/* 岗位职责 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">岗位职责</h2>
                    <div className="space-y-5">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">软件测试工作</h3>
                          <p className="text-muted-foreground">负责专科能力提升系统的软件测试工作，确保系统功能满足用户专业需求。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">测试计划与执行</h3>
                          <p className="text-muted-foreground">
                            制定详细的测试计划和测试用例，执行各类测试，包括但不限于功能测试、接口测试、性能测试、兼容性测试等。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">测试文档维护</h3>
                          <p className="text-muted-foreground">编写并维护测试文档，包括测试计划、测试用例、测试报告等。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">性能测试与优化</h3>
                          <p className="text-muted-foreground">
                            模拟并发标注和场景，发现并解决接口超时问题，系统在高负载下响应时间稳定在<span className="font-semibold text-primary">1s</span>以内，支持<span className="font-semibold text-primary">200+</span>并发用户。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">安全测试</h3>
                          <p className="text-muted-foreground">
                            通过<span className="bg-muted px-1 rounded text-foreground">AppScan</span>扫描影像上传接口，发现OSS桶权限漏洞及越权访问风险。
                          </p>
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