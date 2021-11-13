FROM node:14.18.1-alpine
WORKDIR /next

COPY ./next/package.json .
COPY ./next/yarn.lock .

RUN yarn

COPY ./next/ .
ENV HOST 0.0.0.0

EXPOSE 3000

CMD [ "yarn", "dev" ]
