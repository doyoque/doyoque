package main

import (
  "fmt"
  "log"
  "net/http"
  "encoding/json"
  "io/ioutil"
  "github.com/gorilla/mux"
)

func homePage(res http.ResponseWriter, req *http.Request) {
  fmt.Fprintf(res, "Welcome to homePage!")
  fmt.Println("Endpoint Hit: homePage")
}

func routerMiddleware(next http.Handler) http.Handler {
  return http.HandlerFunc(func(res http.ResponseWriter, req *http.Request) {
    res.Header().Add("Content-Type", "application/json")
    next.ServeHTTP(res, req)
  })
}

// route handling
func handleRequests() {
  router := mux.NewRouter().StrictSlash(true)
  router.Use(routerMiddleware)
  router.HandleFunc("/", homePage)
  router.HandleFunc("/article/{id}", deleteArticle).Methods("DELETE")
  router.HandleFunc("/article", postArticle).Methods("POST")
  router.HandleFunc("/article", getArticles)
  router.HandleFunc("/article/{id}", getArticle)

  log.Fatal(http.ListenAndServe(":10000", router))
}

type Article struct {
  Id string `json:"id"`
  Title string `json:"title"`
  Desc string `json:"desc"`
  Content string `json:"content"`
}

var Articles []Article

// post new article
func postArticle(res http.ResponseWriter, req *http.Request) {
  reqBody, _ := ioutil.ReadAll(req.Body)
  var article Article
  json.Unmarshal(reqBody, &article)

  Articles = append(Articles, article)

  json.NewEncoder(res).Encode(article)
}

// get article
func getArticle(res http.ResponseWriter, req *http.Request) {
  vars := mux.Vars(req)
  articleId := vars["id"]

  for _, article := range Articles {
    if article.Id == articleId {
      json.NewEncoder(res).Encode(article)
    }
  }
}

// delete article
func deleteArticle(res http.ResponseWriter, req *http.Request) {
  vars := mux.Vars(req)
  articleId := vars["id"]

  for index, article := range Articles {
    if article.Id == articleId {
      Articles = append(Articles[:index], Articles[index+1:]...)
    }
  }
}

// get all article
func getArticles(res http.ResponseWriter, req *http.Request) {
  fmt.Println("Endpoint Hit: getArticles")
  json.NewEncoder(res).Encode(Articles)
}

func main() {
  fmt.Println("REST API v2.0 - mux router")
  Articles = []Article {
    Article { Id: "1", Title: "Hello", Desc: "Article description", Content: "Article content" },
    Article { Id: "2", Title: "Hello 2", Desc: "Article description", Content: "Article content" },
  }

  handleRequests()
}

