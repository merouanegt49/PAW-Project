<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Bot</title>
     <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    #chat-container {
      background-color: white;
      width: 400px;
      height: 500px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
    #messages {
      overflow-y: scroll;
      flex-grow: 1;
    }
    .message {
      margin: 5px 0;
    }
    .user {
      text-align: right;
      color: blue;
    }
    .bot {
      text-align: left;
      color: green;
    }
  </style>
</head>
<body>


<div id="container">
    <div id="message"></div>
    <input type="text" id="userInput" placeholder="Type a message..."/>

    <button id="sendButton">Send</button>

    <script>
        async function sendmessages() {
            const userInput = document.getElementById('userInput').value;
            const messageDiv = document.getElementById('message');
            if (userInput.trim() === "") return;
            
        }
        </script>
</div>

    </body>
</html>