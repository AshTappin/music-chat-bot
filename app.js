/*jshint esversion: 6 */
'use strict';
console.log("Good ol\' nosh bot is here to party");
const http = require('http');
const Bot = require('messenger-bot');
const config = require('./config.js').messenger;
const greetingProcesser = require('./responseHandlers/greeting.js');
const lastFm = require('./lastfm.js');
const bandsInTown = require('./bandsInTown.js');
var conversationStage = "GREET";

const bot = new Bot({
  token: 'EAABsDeRgE64BALNjtMPjoBopOOGL2ZBYmPtUe03ZBK1jlKZBYZBPE0ZCbKNRAtdYXLDNmMrYuyxRSKRWOy6MQme0tl0XMQAXaTXPdviNnctUjy7j8qBZBY34PVccW8JNHVVybJL2qKW4CRN6qKEuMO4vMOZBZCcxoR5MlZASmUNRC9QZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  console.dir(payload)
  bot.getProfile(payload.sender.id, (err, profile) => {
    console.dir(profile)
  	if (conversationStage === "GREET") {
      let response;
      let senderName = profile.first_name;
  		var greeting = greetingProcesser.process(payload.message.text, 
        function() {
          conversationStage = "LASTFM";
          response = `Hello ${senderName}, my name is Samuel and I am a robot that has been developed `
        + `to shoot the shit about music with non-bots like you. `
        + `If you don't mind me asking, what is your lastfm username? I would like to stalk your lastfm `
        + `for a moment before actually talking to you`;
        replyToPerson(reply, response, profile);

        },
        function() {
          response = `${senderName}, I do not understand the term "${payload.message.text}"`
          replyToPerson(reply, response, profile);
        });
	} else {  	
  		lastFm.getTopFiveArtistsThisMonth(payload.message.text, 

        (artist) => lastFm.getTopAlbumForArtist(artist, (album) => {
        bandsInTown.getNextEvent(artist, 
          (artist, event) => replyToPerson(reply, `${artist}? Great taste!`
            + `${album} is a cracker!`
            + ` Did you know that they are playing `
            + `at ${event.venueName} `
            + `in ${event.location}` 
            +` on ${event.dateTime}?`, profile, "GREET"),
             (artistName) => {
              replyToPerson(reply, 
                `${artistName}? Great taste! `
                + `${album} is a cracker!`
                + ` Sadly it doesn't look like they are playing any shows soon.`,
                 profile, "GREET")})
      }), 
      (username) => {replyToPerson(reply, `Hmm, looks like I can get no information for a LastFm user with username "${username}"`, profile, "LASTFM")});
  	} 
  });
});

http.createServer(bot.middleware()).listen(3000);

function replyToPerson(reply, text, profile, nextStage) {
	 reply({text}, (err) => {
			 if (err) {
  				console.log(err);
  				throw err;
 			}
     	 		if(nextStage) conversationStage = nextStage;
     			 console.log(`Sent back to ${profile.first_name} ${profile.last_name}: ${text}`)});
}