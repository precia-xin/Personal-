'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { FloatingBackButton } from '@/components/shared/FloatingBackButton'

export default function OralMaxillofacialAI() {
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
                {/* 标题区 */}
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-16 text-center relative overflow-hidden">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 relative">口腔颌面外科AI诊断平台</h1>
                  <p className="text-xl opacity-90 relative">2024.09-2025.09</p>
                  <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto relative break-words">
                    基于Web的AI病历助手，智能生成规范化病历并质控诊疗过程，实现颔面外科诊疗全流程数字化管理。
                  </p>
                </div>

                {/* 内容区 */}
                <div className={`p-8 sm:p-12 space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* 项目概述 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">项目概述</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      口腔颌面外科AI诊断平台是一款基于Web的AI病历助手，通过智能生成规范化病历并质控诊疗过程，实现颌面外科诊疗全流程数字化管理。该平台集成了AI手术风险评估和AI辅助决策功能，为医生提供智能化的诊疗支持，提高诊疗效率和质量。
                    </p>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">200+</div>
                        <div className="text-sm opacity-90">并发用户测试</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">800ms</div>
                        <div className="text-sm opacity-90">接口响应时间</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">0.1%</div>
                        <div className="text-sm opacity-90">错误率</div>
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
                          <h3 className="font-semibold text-lg mb-2">测试计划与执行</h3>
                          <p className="text-muted-foreground">制定测试计划和测试用例，执行功能测试、性能测试等。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">性能测试与优化</h3>
                          <p className="text-muted-foreground">
                            使用<span className="bg-muted px-1 rounded">JMeter</span>模拟<span className="font-semibold">200+</span>医师并发操作，验证病历生成接口稳定性，接口响应时间优化至<span className="font-semibold">800ms</span>，错误率低于<span className="font-semibold">0.1%</span>。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">AI功能验证</h3>
                          <p className="text-muted-foreground">
                            搭建<span className="bg-muted px-1 rounded">Pytest + Requests</span>框架验证AI手术风险评估和AI辅助决策接口，覆盖多种手术风险评估报告和手术方案的语义合规性校验。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">安全测试</h3>
                          <p className="text-muted-foreground">
                            通过<span className="bg-muted px-1 rounded">AppScan</span>扫描数据上报接口，修复敏感数据明文传输的风险。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">测试文档管理</h3>
                          <p className="text-muted-foreground">编写测试报告，记录测试结果和测试过程中的关键信息。</p>
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