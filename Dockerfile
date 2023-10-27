FROM ubuntu:latest

FROM node:18.12.0

WORKDIR /app

COPY . .

RUN apt-get clean && apt-get update && apt install -y nodejs && apt install -y yarn

RUN yarn install && yarn build

EXPOSE 3000

CMD ["node", "server.js"]