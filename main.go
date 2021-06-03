package main

import (
	_ "embed"
	"fmt"
	"github.com/techplexengineer/frc-networktables-go"
	"github.com/wailsapp/wails"
	"log"
	"time"
)

func basic() string {
	return "World!"
}

//go:embed frontend/public/build/bundle.js
var js string

//go:embed frontend/public/build/bundle.css
var css string

func main() {

	log.Printf("HERE?")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "BionicDash",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})

	client, err := frcntgo.InitClient()
	if err != nil {
		panic(err)
	}

	time.Sleep(5)

	isRed, err := client.GetBoolean("/FMSInfo/IsRedAlliance")
	if err == nil {
		fmt.Printf("---------------------------------------is Red: %v\n", isRed)
	}

	app.Bind(basic)
	app.Bind(client.GetBoolean)
	app.Run()
}
