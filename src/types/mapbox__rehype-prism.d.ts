declare module '@mapbox/rehype-prism' {
  interface RehypePrismOptions {
    alias?: Record<string, string | string[]>
    showLineNumbers?: boolean
    ignoreMissing?: boolean
  }

  const rehypePrism: (options?: RehypePrismOptions) => any
  export = rehypePrism
}