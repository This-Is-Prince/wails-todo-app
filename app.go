package main

import (
	"context"
	"math/rand"
	"strconv"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type AddTodoReq struct {
	Title       string `json:"title"`
	Description string `json:"description"`
}

type AddTodoRes struct {
	Id          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

func (a *App) AddTodo(req AddTodoReq) AddTodoRes {
	return AddTodoRes{
		Id:          strconv.Itoa(rand.Intn(100_000_000)),
		Title:       req.Title,
		Description: req.Description,
	}
}
