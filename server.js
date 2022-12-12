const http = require('http')
const fs = require('fs')

userName='South Hills Student'
allResponsesArray = []

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  if (req.method == 'POST') {
    console.log('POST')
    var body = ''
    req.on('data', function(data) {
      body += data
      //console.log('Partial body: ' + body)
    })

    // Writing the response now at the end of reading the request
    req.on('end', function() {
      console.log('Body: ' + body)
      allResponsesArray.push(body)
      
      var bodyJSON = JSON.parse(body)
      var bodyJSONid = bodyJSON.id
      var bodyJSONdata = bodyJSON.data
      res.writeHead(200, {'Content-Type': 'application/json'})
      var responseJSON = { dialog:"", id: "" }

      if(bodyJSONid==="username") {
        userName = bodyJSONdata
        responseJSON.id = "problem1.html"
      }
      
      /** Start coding here */

      if(bodyJSONid==="answer1") {
        if(bodyJSONdata==="red") {
          responseJSON.dialog = "correct!"
          responseJSON.id = "problem2.html"
        } else {          
          responseJSON.dialog = "incorrect!"
          responseJSON.id = "problem1.html"
        }
      }

      if(bodyJSONid==="answer2") {
        if(bodyJSONdata==="Argentina") {
          responseJSON.dialog = "correct!"
          responseJSON.id = "problem3.html"
        } else {          
          responseJSON.dialog = "incorrect,go home Netherlands\!"
          responseJSON.id = "problem2.html"
        }
      }

      if(bodyJSONid==="answer1") {
        if(bodyJSONdata==="Argentina") {
          responseJSON.dialog = "correct!"
          responseJSON.id = "problem3.html"
        } else {          
          responseJSON.dialog = "incorrect,go home Netherlands\!"
          responseJSON.id = "problem2.html"
        }
      }
      if(bodyJSONid==="purple") {
        if(bodyJSONdata==="Argentina") {
          responseJSON.dialog = "correct!"
          responseJSON.id = "problem3.html"
        } else {          
          responseJSON.dialog = "incorrect,go home Netherlands\!"
          responseJSON.id = "problem2.html"
        }
      }
      if(bodyJSONid==="pink") {
        if(bodyJSONdata==="Argentina") {
          responseJSON.dialog = "correct!"
          responseJSON.id = "problem3.html"
        } else {          
          responseJSON.dialog = "incorrect,go home Netherlands\!"
          responseJSON.id = "problem2.html"
        }
      }