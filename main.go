package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"

	"github.com/techplexengineer/gontcore"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	//@todo make this retry if there is an error
	ntClient, _, err := goNTCore.NewClient("localhost", "Test Client", nil)
	if err != nil {
		panic(err)
	}

	// Create application with options
	err = wails.Run(&options.App{
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

	if err != nil {
		println("Error:", err)
	}
}
