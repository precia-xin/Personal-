export function formatDate(dateString: string) {
  // 处理不同的日期格式
  if (!dateString) {
    return 'Invalid Date'
  }
  
  try {
    // 尝试解析日期字符串
    const date = new Date(dateString)
    
    // 检查日期是否有效
    if (isNaN(date.getTime())) {
      // 如果无效，尝试其他格式
      const parsedDate = new Date(`${dateString}T00:00:00Z`)
      if (isNaN(parsedDate.getTime())) {
        return 'Invalid Date'
      }
      return parsedDate.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
    })
  } catch (error) {
    console.error('Date formatting error:', error)
    return 'Invalid Date'
  }
}
