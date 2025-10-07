// lib/markdown.ts
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)        // 启用表格等 GFM 语法
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return String(result.value);
}