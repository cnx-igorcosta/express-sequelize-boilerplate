FROM node:8.11.3-alpine

# change
WORKDIR /var/current

# Bundle app source
COPY . /var/current

RUN apk update && apk upgrade && \
    apk add --no-cache bash

RUN npm install --production

ENV NODE_ENV production
ENV LOG_LEVEL info
ENV UV_THREADPOOL_SIZE 16

CMD ["node"]
