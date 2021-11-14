// package main

// // ginで設定しようとしたが各originが同じドメインの場合corsの問題が解決できない
// // https://github.com/gin-gonic/gin/issues/2458
// // https://github.com/gin-gonic/gin/pull/2477#issuecomment-781260970

// import (
// 	// "encoding/json"
// 	"github.com/gin-gonic/gin"
//   "github.com/gin-contrib/cors"
// 	"net/http"
// 	"time"
// 	// "log"
// 	"math/rand"
// 	"strconv"
// )

// // Book Struct (Model)

// type Book struct {
//     ID     string  `json:"id"`
//     Title  string  `json:"title"`
//     Author *Author `json:"author"`
// }

// type Author struct {
//     FirstName string `json:"firstname"`
//     LastName  string `json:"lastname"`
// }

// // Init Books var as a slice Book struct
// var books []Book

// // Get All Books
// func getBooks(c *gin.Context) {
//     // w.Header().Set("Content-Type", "application/json")
//     // json.NewEncoder(w).Encode(books)
// 		c.JSON(200, books)
// }

// // Create a Book
// func createBook(c *gin.Context) {
//     // w.Header().Set("Content-Type", "application/json")

//     // var book Book
//     // _ = json.NewDecoder(r.Body).Decode(&book)
//     // book.ID = strconv.Itoa(rand.Intn(10000)) // Mock ID - not safe in production
//     // books = append(books, book)
//     // json.NewEncoder(w).Encode(book)

// 		// var book Book
//     // _ = json.NewDecoder(r.Body).Decode(&book)
//     // book.ID = strconv.Itoa(rand.Intn(10000)) // Mock ID - not safe in production
//     // books = append(books, book)
//     // json.NewEncoder(w).Encode(book)

// 		var book Book
// 		if err := c.ShouldBind(&book); err != nil {
// 			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 			return
// 		}
// 		book.ID = strconv.Itoa(rand.Intn(10000)) // Mock ID - not safe in production
		
// 		books = append(books, book)
// 		c.JSON(200, book)
// }

// func main() {
// 	r := gin.Default()

// 	r.Use(cors.New(cors.Config{
// 		// 許可したいHTTPメソッドの一覧
// 		AllowCredentials: false,
// 		AllowMethods: []string{
// 				"POST",
// 				"GET",
// 				"OPTIONS",
// 				"PUT",
// 				"DELETE",
// 		},
// 		// 許可したいHTTPリクエストヘッダの一覧
// 		AllowHeaders: []string{
// 				"Access-Control-Allow-Headers",
// 				"Content-Type",
// 				"Content-Length",
// 				"Accept-Encoding",
// 				"X-CSRF-Token",
// 				"Authorization",
// 		},
// 		// 許可したいアクセス元の一覧
// 		AllowOrigins: []string{
// 				"http://localhost:3000",
// 		},
// 		// 自分で許可するしないの処理を書きたい場合は、以下のように書くこともできる
// 		// AllowOriginFunc: func(origin string) bool {
// 		//  return origin == "https://www.example.com:8080"
// 		// },
// 		// preflight requestで許可した後の接続可能時間
// 		// https://godoc.org/github.com/gin-contrib/cors#Config の中のコメントに詳細あり
// 		MaxAge: 24 * time.Hour,
// 	}))

// 	books = append(books, Book{ID: "1", Title: "Book one", Author: &Author{FirstName: "Philip", LastName: "Williams"}})
//   books = append(books, Book{ID: "2", Title: "Book Two", Author: &Author{FirstName: "John", LastName: "Johnson"}})
	
// 	r.GET("/api/books", func(c *gin.Context) { getBooks(c) })
// 	r.OPTIONS("/api/books", func(c *gin.Context) { getBooks(c) })
// 	r.POST("/api/books", func(c *gin.Context) { createBook(c) })

// 	r.Run(":8000")
// }