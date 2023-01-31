FROM node:lts-alpine3.16
WORKDIR /usr/local
COPY .output/ /usr/local
EXPOSE 3000
CMD node /usr/local/server/index.mjs
