import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import csharp from 'highlight.js/lib/languages/csharp'
import bash from 'highlight.js/lib/languages/bash'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('bash', bash)

export function highlight(code: string, lang: 'typescript' | 'csharp' | 'bash') {
  return hljs.highlight(code, { language: lang }).value
}
