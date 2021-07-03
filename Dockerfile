FROM node:alpine AS deps

WORKDIR /app

COPY ./ ./

RUN yarn add global typescript

RUN yarn

ENV NODE_ENV production

RUN ls -la

RUN yarn build

CMD yarn start