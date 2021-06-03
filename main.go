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

func fred() string {
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

	time.Sleep(2 * time.Second)

	isRed, err := client.GetBoolean("/bool")
	if err != nil {
		fmt.Printf("%s", err)
	} else {
		fmt.Printf("---------------------------------------is Red: %v\n", isRed)
	}
	_ = app

	//for {
	//	time.Sleep(5 * time.Second)
	//}

	app.Bind(client)
	app.Bind(basic)
	app.Bind(fred)
	app.Run()
}
