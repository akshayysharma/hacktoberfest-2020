# Beastbot
This bot will input user's voice using Web Speech API's Speech Recognition and send the user's message to a NLP API as a text string, when the API.AI returns back use the SpeechSynthesis interface to give it a voice.

## Prerequisites

Installation of Node.js

* NodeJS `https://nodejs.org/en/download/package-manager/`

Installation of node js modules :

  * APIAI `npm i apiai`
  * Socket.io ` npm install socket.io`
  * dotenv `npm i dotenv-extended`
  * Express `npm install express --save`
  
  
 ## Instructions
 
 * Clone the repo to your local machine 
 * You can change the API AI token and API AI session ID(You can get this from official website) or leave it as it is.
 * Type `node index.js` in the terminal
 * In your browser type `localhost:3000`
 
 ## Technologies used
 
 * Node.js
 * Socket.io
 * ExpressJS
 * Dialogflow(APIAI)
 * Web speech recognition API
