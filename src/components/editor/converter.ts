import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'
import {unified} from 'unified'

export async function fetchMarkdown(URL:string):Promise<string>{
  const response = await fetch(URL)
  const text = await response.text()
  
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process(text)
  
  console.log("URL fetched: " + URL);
  console.log("response: " + text);
  console.log("processed text: " + file);
  return String(file);
}

export async function generateMarkdown(HTMLtext:string):Promise<string>{
    
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process(HTMLtext);
  
  
  console.log("original text: " + HTMLtext);
  console.log("processed text: " + file);
  return String(file);
}
