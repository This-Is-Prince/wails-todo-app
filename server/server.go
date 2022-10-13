package server

import (
	"fmt"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Server struct {
	Port string
}

func NewServer() *Server {
	return &Server{
		Port: "3000",
	}
}

type Todo struct {
	Id          string `json:"id" bson:"_id,omitempty"`
	Title       string `json:"title" bson:"title"`
	Description string `json:"description" bson:"description"`
}

var todos = []Todo{
	{
		Id:          strconv.Itoa(rand.Intn(100_000_000)),
		Title:       "First",
		Description: "First Description",
	},
	{
		Id:          strconv.Itoa(rand.Intn(100_000_000)),
		Title:       "Second",
		Description: "Second Description",
	},
	{
		Id:          strconv.Itoa(rand.Intn(100_000_000)),
		Title:       "Third",
		Description: "Third Description",
	},
}

func (s *Server) Start() {
	fmt.Println("Starting the server")
	r := gin.Default()
	r.GET("/api/v1/todos", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{"todos": todos})
	})
	r.Run(s.Port)
}
