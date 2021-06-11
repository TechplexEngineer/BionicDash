package main

import (
	"bionicdash/frontend/public"
	_ "embed"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"runtime"
	//"time"

	//"github.com/techplexengineer/gontcore"
	"github.com/zserge/lorca"
)

func main() {

	args := *new([]string)
	if runtime.GOOS == "linux" {
		// not sure why we are doing this, came from the counter example
		args = append(args, "--class=Lorca")
	}
	ui, err := lorca.New("", "", 1300, 620, args...)
	if err != nil {
		log.Fatal(err)
	}
	defer ui.Close()

	// A simple way to know when UI is ready (uses body.onload event in JS)
	//ui.Bind("start", func() {
	//	log.Println("UI is ready")
	//})

	// Create and bind Go object to the UI
	//c := &counter{}
	//ui.Bind("counterAdd", c.Add)
	//ui.Bind("counterValue", c.Value)

	// Load HTML.
	// You may also use `data:text/html,<base64>` approach to load initial HTML,
	// e.g: ui.Load("data:text/html," + url.PathEscape(html))

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		log.Fatal(err)
	}
	defer ln.Close()
	go http.Serve(ln, http.FileServer(http.FS(public.Static)))
	ui.Load(fmt.Sprintf("http://%s/public", ln.Addr()))

	// You may use console.log to debug your JS code, it will be printed via
	// log.Println(). Also exceptions are printed in a similar manner.
	//ui.Eval(`
	//	console.log("Hello, world!");
	//	console.log('Multiple values:', [1, false, {"x":5}]);
	//`)

	// Wait until the interrupt signal arrives or browser window is closed
	sigc := make(chan os.Signal)
	signal.Notify(sigc, os.Interrupt)
	select {
	case <-sigc:
	case <-ui.Done():
	}

	log.Println("exiting...")
	os.Exit(0)

	////@todo need a way to restart the connection
	//ntClient, _, err := goNTCore.NewClient("localhost", "Test Client", nil)
	//if err != nil {
	//	panic(err)
	//}
	//
	//time.Sleep(2 * time.Second)
	//
	//isRed := ntClient.GetBoolean("/bool", false)
	//
	//fmt.Printf("---------------------------------------is Red: %v\n", isRed)
	//
	//app.Bind(ntClient)
	//
	//err = app.Run()
	//if err != nil {
	//	log.Printf("app hit an error: %s", err)
	//}
}
