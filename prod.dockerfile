FROM node:19-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY .output /app/.output

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
