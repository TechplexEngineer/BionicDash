package main

import (
	"embed"
	"fmt"
	"log"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"

	"github.com/techplexengineer/gontcore"
)

//go:embed frontend/dist
var assets embed.FS

//Version will be injected at compile time with go build -ldflags="-X 'main.Version=v1.0.0'"
var Version = "" // emptystring translates to development

func main() {
	if err := run(); err != nil {
		log.Printf("Error %s", err)
	}
}

func run() error {
	// Create an instance of the app structure
	app := NewApp(Version)

	//@todo make this retry if there is an error
	ntClient, _, err := goNTCore.NewClient("localhost", "BionicDash", nil)
	if err != nil {
		return fmt.Errorf("unable to start network tables client %s", err)
	}

	// Create application with options
	return wails.Run(&options.App{
		Title:     "BionicDash",
		Width:     1024,
		Height:    768,
		Assets:    assets,
		OnStartup: app.startup,
		Bind: []interface{}{
			app,
			ntClient,
		},
	})
}
