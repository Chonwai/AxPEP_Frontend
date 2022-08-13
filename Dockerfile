FROM node:lts as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "npm", "run", "build" ]
