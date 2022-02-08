FROM node:16.13.2-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update && apk add bash
RUN npm install --save @nestjs/typeorm typeorm sqlite3

EXPOSE 3000

CMD [ "npm", "start" ]