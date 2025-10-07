'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { FloatingBackButton } from '@/components/shared/FloatingBackButton'

export default function OralSmartDiagnosis() {
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
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 relative">口腔智慧诊断平台</h1>
                  <p className="text-xl opacity-90 relative">2024.12-2025.09</p>
                  <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto relative break-words">
                    平台依托计算机视觉（CV），支持用户通过拍摄或上传口腔图像，自动识别牙位及口腔病灶，并生成结构化报告。
                  </p>
                </div>

                {/* 内容区 */}
                <div className={`p-8 sm:p-12 space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* 项目概述 */}
                  <div className="p-8 rounded-xl bg-card shadow-lg border border-border/50">
                    <h2 className="text-2xl font-bold mb-6 pb-4 border-b border-border/30">项目概述</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      智能问答机器人通过自然语言处理（NLP）引擎驱动，为用户提供口腔健康知识问答服务。平台依托计算机视觉技术，支持用户通过拍摄或上传口腔图像，自动识别牙位及口腔病灶，并生成结构化报告，提高诊断效率和准确性。
                    </p>

                    {/* 统计数据 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">40+</div>
                        <div className="text-sm opacity-90">自动化测试用例</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">85%</div>
                        <div className="text-sm opacity-90">自动化覆盖率</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-6 rounded-xl shadow-md text-center">
                        <div className="text-4xl font-bold mb-2">96.12%</div>
                        <div className="text-sm opacity-90">问答语义匹配度</div>
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
                          <h3 className="font-semibold text-lg mb-2">全流程测试</h3>
                          <p className="text-muted-foreground">负责口腔自检APP与问答小程序的全流程测试工作，包括功能测试、兼容性测试、性能测试、安全测试。</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">性能测试与优化</h3>
                          <p className="text-muted-foreground">
                            使用<span className="bg-muted px-1 rounded">JMeter</span>对自检报告生成、牙位识别、病灶识别等核心接口进行性能压测，模拟高并发场景，识别并协助优化<span className="font-semibold">3</span>处性能瓶颈，使接口平均响应时间保持在<span className="font-semibold">1.5s</span>以内。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">问答机器人语义匹配测试</h3>
                          <p className="text-muted-foreground">
                            负责问答机器人语义匹配准确率测试，通过设计多轮对话测试用例，验证问答语义匹配度达<span className="font-semibold">96.12%</span>，并推动bad case分析与修复，提升问答质量。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-muted-foreground mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2">自动化测试框架搭建</h3>
                          <p className="text-muted-foreground">
                            搭建并维护<span className="bg-muted px-1 rounded">Python+Requests+Pytest</span>接口自动化测试框架，设计并执行<span className="font-semibold">40+</span>个核心接口的自动化测试用例，覆盖登录、图像上传、报告生成、档案查询等关键业务流程，自动化覆盖率达<span className="font-semibold">85%</span>以上。
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