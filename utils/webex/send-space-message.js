import fetch from 'node-fetch';
import mainCard from '../cards/main.json' assert { type: 'json' };
import handleResponse from '../handle-response.js';

function sendSpaceMessage(roomId, message) {
  mainCard.body[9].text = message.name;
  mainCard.body[5].text = message.category;
  mainCard.body[7].text = message.description;
  const body = {
    roomId: roomId,
    text: 'hi',
    attachments: [
      {
        contentType: 'application/vnd.microsoft.card.adaptive',
        content: mainCard
      }
    ]
  };
  return fetch(process.env.WEBEX_API_URL + '/messages', {
    headers: {
      'Authorization': 'Bearer ' + process.env.WEBEX_ACCESS_TOKEN,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then((r) => handleResponse(r))
    .then((r) => r.json())
    .then((r) => r.id)
    .catch((e) => console.log('error', e));
}

export default sendSpaceMessage;
