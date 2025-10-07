import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs'
import path from 'path'
import remarkGfm from 'remark-gfm'
// import rehypePrism from '@mapbox/rehype-prism'
import { mdxComponents } from '@/components/shared/MdxComponents'

export async function getMDXContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = await fs.readFile(filePath, 'utf-8')
  
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // rehypePlugins: [rehypePrism as RehypePlugin],
      }
    }
  })
  
  return content
}