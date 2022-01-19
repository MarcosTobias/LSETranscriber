FROM node:14.15.4
COPY . /app
WORKDIR /app

RUN npm install --production

RUN npm run build

CMD ["node", "server.js"]