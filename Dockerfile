FROM node:16.18.0-alpine

RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
WORKDIR /var/www/dockerize-nuxt/nuxt-app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV RASA_API="http://localhost:5005"

EXPOSE 3000

CMD [ "npm", "start" ]


