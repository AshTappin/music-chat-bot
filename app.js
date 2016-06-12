'use strict'
console.log('AshBot is here to party')
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAABsDeRgE64BALNjtMPjoBopOOGL2ZBYmPtUe03ZBK1jlKZBYZBPE0ZCbKNRAtdYXLDNmMrYuyxRSKRWOy6MQme0tl0XMQAXaTXPdviNnctUjy7j8qBZBY34PVccW8JNHVVybJL2qKW4CRN6qKEuMO4vMOZBZCcxoR5MlZASmUNRC9QZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = "I am a noosh boot"

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)