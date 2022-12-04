FROM node:16

LABEL application="docker-nest"

WORKDIR /app

COPY .  /app

RUN yarn --no-cache

CMD ["yarn","start"]