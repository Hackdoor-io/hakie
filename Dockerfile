FROM node:10.16.3-alpine

WORKDIR /hakie

COPY . /hakie

RUN npm install

CMD [ "npm", "run", "start" ]
