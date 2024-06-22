FROM node:20.12.1-slim

RUN apt-get update && apt-get install -y openssl

WORKDIR /app
COPY package.json .
RUN yarn install

ENV DATABASE_URL="file:./dev.db" 

COPY . .
RUN npx prisma migrate deploy
RUN yarn build
CMD ["yarn", "start"]

EXPOSE 8000