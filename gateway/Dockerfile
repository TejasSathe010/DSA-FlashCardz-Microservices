FROM node:18-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build || echo "Skipping build step in development"

EXPOSE 3000

CMD [ "npx", "ts-node", "src/index.ts" ]
