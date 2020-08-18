# local development

FROM node:14-alpine3.10

USER node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node/workspace

RUN npm install --global typescript@3.9.2 && \
  npm install --global serverless@1.71.1
