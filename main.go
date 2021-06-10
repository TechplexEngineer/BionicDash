package main

import (
	_ "embed"
	"fmt"
	"log"
	"time"

	"github.com/techplexengineer/gontcore"
	"github.com/wailsapp/wails"
	"github.com/wailsapp/wails/lib/logger"
)

//go:embed frontend/public/build/bundle.js
var js string

//go:embed frontend/public/build/bundle.css
var css string

func main() {

	log.Printf("HERE?")

	app := wails.CreateApp(&wails.AppConfig{
		Width:            1024,
		Height:           768,
		Title:            "BionicDash",
		JS:               js,
		CSS:              css,
		Colour:           "#131313",
		DisableInspector: true,
	})

	logger.SetLogLevel("error")

	//@todo need a way to restart the connection
	ntClient, _, err := goNTCore.NewClient("localhost", "Test Client", nil)
	if err != nil {
		panic(err)
	}

	time.Sleep(2 * time.Second)

	isRed := ntClient.GetBoolean("/bool", false)

	fmt.Printf("---------------------------------------is Red: %v\n", isRed)

	app.Bind(ntClient)

	err = app.Run()
	log.Printf("app hit an error: %s", err)
}
