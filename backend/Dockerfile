FROM node:18

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY . .

RUN npm ci --omit=dev

RUN npm run build

EXPOSE 3000

CMD npm run start:prod
