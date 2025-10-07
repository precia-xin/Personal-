// components/markdown-renderer.tsx
'use client';

import { useEffect, useState } from 'react';
import { renderMarkdown } from '@/lib/markdown';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    renderMarkdown(content).then(setHtml);
  }, [content]);

  return (
    <div
      className="prose prose-invert dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}