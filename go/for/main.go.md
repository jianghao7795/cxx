```go
package main

import "fmt"

type App struct {
	AppAccount []*AppAccount
}

type AppAccount struct {
	AppGroup []*AppGroup
}

type AppGroup struct {
	Name string
}

func main() {
	app := new(App)
	account := new(AppAccount)
	group := new(AppGroup)

	account.AppGroup = append(account.AppGroup, group, group, group)
	app.AppAccount = append(app.AppAccount, account, account, account)

	x := 0
	for _, appAccount := range app.AppAccount {
		for _, appGroup := range appAccount.AppGroup {
			appGroup.Name = fmt.Sprintf("--> %v", x)
			x++
		}
	}

	for _, appAccount := range app.AppAccount {
		for _, appGroup := range appAccount.AppGroup {
			fmt.Println(appGroup.Name)
		}
	}

}
```