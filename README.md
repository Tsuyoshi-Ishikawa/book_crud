# book_crud
本の内容管理する。基本的なCRUDのみを実現

# front_end

# backend
[こちら](https://qiita.com/k-penguin-sato/items/8088b69304ee7e8f70be)を参考にGoでAPIを作成。

# construction
```sh
docker-compose up -d
```

# clean up
```sh
docker stop book_crud_front book_crud_api
docker rm book_crud_front book_crud_api
docker rmi book_crud_front book_crud_api
docker volume rm book_crud_node-modules
docker network rm book_crud_book_crud
```
