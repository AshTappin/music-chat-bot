'use strict'
console.log('Good ol\' chumbot is here to party')
const http = require('http')
const Bot = require('messenger-bot')
const responseSupplier = require('./responseSuppier.js')
const lastFm = require('./lastfm.js')
var conversationStage = "GREET"

let bot = new Bot({
  token: 'EAABsDeRgE64BALNjtMPjoBopOOGL2ZBYmPtUe03ZBK1jlKZBYZBPE0ZCbKNRAtdYXLDNmMrYuyxRSKRWOy6MQme0tl0XMQAXaTXPdviNnctUjy7j8qBZBY34PVccW8JNHVVybJL2qKW4CRN6qKEuMO4vMOZBZCcxoR5MlZASmUNRC9QZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  bot.getProfile(payload.sender.id, (err, profile) => {
  	console.log(conversationStage);
  	if (conversationStage === "GREET") {
  		var greeting = responseSupplier.getResponse(payload.message.text, profile.first_name);
  		console.log(greeting);

	  	let text = "I do not understand"
	  	if (greeting) {
	  		conversationStage = "LASTFM";
	  		text = greeting; 
	  	}
	  	reply({text}, (err) => {
      		if (err) {
      			console.log(err);
      			throw err;
      		}
      
      console.log(`Sent back to ${profile.first_name} ${profile.last_name}: ${text}`)

  		})
	} else {  	
  	
  		lastFm.getTopArtistThisWeek(payload.message.text, function(response) {
  				let text = `${response}! Awesome taste!`;
  				 reply({text}, (err) => {
     			 if (err) {
      			console.log(err);
      			throw err;
     	 		}
     	 		conversationStage = "GREET";
     			 console.log(`Sent back to ${profile.first_name} ${profile.last_name}: ${text}`)
    			})

  		});
  	} 
  
})})

http.createServer(bot.middleware()).listen(3000)