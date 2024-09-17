# Website for Climate Change Bot

[![ci](https://github.com/climate-change-bot/website/actions/workflows/ci.yml/badge.svg)](https://github.com/climate-change-bot/website/actions/workflows/ci.yml)

This is the website of the Climate Change Bot project. The goal of this project is to develop a chatbot that
can answer questions about climate change.


## Code Entry Points

- All main pages are in the folder [pages](pages)
- The vue.js components used in the pages are in the folder [components](components)
- The static content of the website like images are in the folder [static](public)
- The API to redirect calls to the chatbot is defined in [api/rasaAPI.js](server/api/rasaAPI.js)

## Running the Code

Only described for linux. 

- Install first Node.js 20.
- Open console and navigate to website folder.
- Install all node.js dependencies
```bash 
npm install 
```
- Set the rasa api and the url to provide the website. Start the webserver on  http://localhost:3000.
```bash 
export RASA_API=http://127.0.0.1:5005
export API_URL=http://localhost:3000

npm run dev
```
