// 1. 导入组件
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// 2. 定义并导出默认组件（这就是首页）
export default function Home() {
  return (
    // 3. JSX：页面结构 + Tailwind 类名控制样式
    <div className="...">
      <Card className="...">
        <CardHeader>
          <CardTitle className="...">我的 Next.js 项目已启动！</CardTitle>
        </CardHeader>
        <CardContent className="...">
          <p className="...">shadcn/ui + Tailwind 已就位</p>
          <Button size="lg" variant="default">开始探索</Button>
        </CardContent>
      </Card>
    </div>
  )
}