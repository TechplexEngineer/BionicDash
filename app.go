package main

import (
	"context"
)

// App struct
type App struct {
	ctx     context.Context
	version string
}

// NewApp creates a new App application struct
func NewApp(version string) *App {
	return &App{
		version: version,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Get the current application version
// Druing development it should retu
func (a *App) GetVersion() string {
	return a.version
}
