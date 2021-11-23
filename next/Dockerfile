FROM node:14.18.1-alpine
WORKDIR /next

COPY ./next/package.json .
COPY ./next/yarn.lock .

RUN yarn

COPY ./next/ .
ENV HOST 0.0.0.0

EXPOSE 3000

# yarn devではSSGにならない。しかしAPIからデータ取得して表示することは可能。
CMD [ "yarn", "dev" ]

# React Developer Toolsを使うためにbuild(下記コメントイン)
# 下記でSSGにもなる。
# CMDは一つしか実行できないので、複数設定したい場合はshellに書く
# RUN chmod 744 build.sh
# CMD ["./build.sh"]

# 補足
# 開発環境ではSSGする場合は、GoのAPIのURLはコンテナ名をドメインで設定する必要あり。
# RUN yarn buildをするとSSGしに行こうとするが、コンテナはまだ出来上がってない状態なので
# コンテナ名でのドメインの名前解決がうまくいかない。
# なのでCMDでbuildとstartを行うようにした。
