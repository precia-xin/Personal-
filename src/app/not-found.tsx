import { Button } from '@/components/Button'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          页面未找到
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          抱歉，我们找不到您要访问的页面。
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          返回首页
        </Button>
      </div>
    </Container>
  )
}
