FROM node:14.18.1-alpine
WORKDIR /next

COPY ./next/package.json .
COPY ./next/yarn.lock .

RUN yarn

COPY ./next/ .
ENV HOST 0.0.0.0

EXPOSE 3000

CMD [ "yarn", "dev" ]

# React Developer Toolsを使うために
# 下記のコメントインとcomposeでnextのvolumeのコメントアウト要
# RUN yarn build
# CMD [ "yarn", "start" ]
