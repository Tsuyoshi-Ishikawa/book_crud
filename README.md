# book_crud
本の内容管理する。基本的な登録・一覧・詳細ページのみを実現
![alt text](./Book_crud.gif "")

# front_end
- Next(React)
- Tailwind Css
- Typescript

詳しい説明は./next/READMEに記載

# backend
[こちら](https://qiita.com/k-penguin-sato/items/8088b69304ee7e8f70be)を参考にGoでAPIを作成。

# construction
```sh
# 環境変数inject
# .env.exampleを参考にする
vi ./next/.env

# コンテナ起動
docker-compose up -d
# http://localhost:3000で確認
```

# clean up
```sh
docker stop book_crud_front book_crud_api
docker rm book_crud_front book_crud_api
docker rmi book_crud_front book_crud_api
docker volume rm book_crud_node-modules book_crud_next-modules
docker network rm book_crud_book_crud
```
