# Report Issue Bot
Welcome to our WXSD DEMO Repo! <!-- Keep this here --> 

Report Issue Bot, gets a post request once the user starts the issue on the Webex device. On getting the post request, bot determines the appropriate team based on the issue and the team space receives a notification of the trouble on the user end. Then the team member can acknowledge the ownership and send message back to the device.

<!-- Keep the following here -->  
 *_Everything included is for demo and Proof of Concept purposes only. Your use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex usecases, but are not Official Cisco Webex Branded demos._
 
### Usage

One can use the Report Issue Bot by sending a post request to

```
curl --location --request POST 'https://report-issue.wbx.ninja/report-issue-bot-request' \
--header 'Content-Type: application/json' \
--data-raw '{
   "category": "",
   "description": "",
   "name": "",
   "identification": {
      "software": "",
      "deviceId": "",
      "contactNumber": ""
   }
}'
```

### Setup

Open a new terminal window and follow the instructions below to setup the project locally for development/demo.

1. Clone this repository and change directory:

   ```
   git clone https://github.com/wxsd-sales/report-issue-bot.git
   ```

2. Copy `.env.example` file as `.env`:
   ```
   cp .env.example .env
   ```

You will need to add values to **.env** file:

```
WEBEX_API_URL=https://webexapis.com/v1
WEBEX_ACCESS_TOKEN=

MONGO_URI=""
MONGO_DB=reportIssueBot
```

Note:

1. You will need to provide a PORT for this to run locally, if left empty, it runs on port 3000
2. Review and follow the [Creating a Webex Bot](https://developer.webex.com/docs/bots#creating-a-webex-bot) guide.
   Take note of your Bot access token. Assign this value to the `WEBEX_BOT_TOKEN` environment variable.

### MongoDB Schema
If you are trying to create your own MongoDB, the schema looks as follows:
```
{
   "room_name":"Technical Issue with Incoming Audio/Video",
   "room_id":""
}
```

### Install

The typical npm install flow, after the setup

```
npm install
npm start
```
