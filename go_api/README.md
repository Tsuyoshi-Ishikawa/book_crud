# backend
[こちら](https://qiita.com/k-penguin-sato/items/8088b69304ee7e8f70be)を参考にGoでAPIを作成。

# cors
frontendからの流入許可するためにcorsの設定をする。<br>
github.com/rs/corsでfrontendのoriginを設定している。(localhost:3000)<br>
ちなみにginではgithub.com/gin-contrib/corsを使っており<br>
現状(2021.11.14)では各originのドメインが同じ場合cors設定がうまくできない。<br>
- [307 Temporary Redirect - CORS header ‘Access-Control-Allow-Origin’ missing](https://github.com/gin-gonic/gin/issues/2458)
- [make middlewares work before auto redirection](https://github.com/gin-gonic/gin/pull/2477#issuecomment-781260970)
