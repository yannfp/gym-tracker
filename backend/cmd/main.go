package main

import (
    "fmt"
    "log"
    "net/http"
    "os"

    "github.com/go-chi/chi/v5"
    "github.com/joho/godotenv"
    "github.com/yannfp/gymtracker-api/config"
)

func main() {
    if err := godotenv.Load(); err != nil {
        log.Fatal("Error loading .env file")
    }

    if err := config.ConnectDB(); err != nil {
        log.Fatal(err)
    }
    defer config.DB.Close(nil)

    r := chi.NewRouter()

    r.Get("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "GymTracker API 🏋️")
    })

    port := os.Getenv("SERVER_PORT")
    fmt.Printf("🚀 Server running on :%s\n", port)
    http.ListenAndServe(":"+port, r)
}
