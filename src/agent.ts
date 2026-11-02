import { agent } from '@stackshift-cloud/agent'

const countWords = agent.action('count_words', async ({ text }: { text: string }) => {
  return { words: text.split(/\s+/).filter(Boolean).length }
})

agent.on('inbox.message', async ({ data }) => {
  const { words } = await countWords({ text: data.message.text })
  console.log(`"${data.message.subject}" has ${words} words`)
})

await agent.start()
