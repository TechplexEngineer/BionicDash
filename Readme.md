BionicDash
==========

Minimal proof of concept cross platform network tables client

## Goals
- Make debugging complex robot code easier (Programmers best friend)
- Low memory footprint
- support large amounts of frequently changing data
- Cleaner apis for robot code driven layouts
- Robust graphing/charting of timeseries data with export capability
- recording/playback of timeseries data

## Non-Goals
- Support all features of Shuffleboard
- Support camera streams
- Features needed for competitions

## For Developers
BionicDash is built using the Wails framework which provides APIs to make working
with native webviews easier and backend to frontend data synchronization easier.
The frontend is written in javascript using the Svelte framework.

### Getting Setup
To do development on BionicDash a number of dependencies must be installed:

- Golang
    - Recommend go 1.16 or greater (Debian repos have 1.13 which is starting to get old) Download from https://golang.org/dl/

- Wails
    - `go get -u github.com/wailsapp/wails/cmd/wails`
    - See: https://wails.app/gettingstarted/installing/
    
- Node/NPM
    - NodeJs v14
    
### Building for Release
@todo for now see https://wails.app/reference/cli/#build

### Code Style
Go code should be run through `go fmt` 
Shell scripts should pass `shellcheck` without errors

Code should pass the default suite of linters from golangci-lint. 
The Github Actions CI is automatically running the linter. @todo
[Directions here to install the linter locally](https://golangci-lint.run/usage/install/). 
`$ golangci-lint` run can be used to run the linter locally. 
