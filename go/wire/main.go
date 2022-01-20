package main

// 臃肿的main
func main() {
	config := NewConfig()
	// db依赖配置
	db, err := ConnectDatabase(config)
	if err != nil {
		panic(err)
	}
	// PersonRepository 依赖db
	personRepository := NewPersonRepository(db)
	// PersonService 依赖配置 和 PersonRepository
	personService := NewPersonService(config, personRepository)
	// NewServer 依赖配置和PersonService
	server := NewServer(config, personService)
	server.Run()
}
