package config

import (
    "context"
    "fmt"
    "os"

    "github.com/jackc/pgx/v5"
)

var DB *pgx.Conn

func ConnectDB() error {
    dsn := fmt.Sprintf(
        "postgres://%s:%s@%s:%s/%s",
        os.Getenv("DB_USER"),
        os.Getenv("DB_PASSWORD"),
        os.Getenv("DB_HOST"),
        os.Getenv("DB_PORT"),
        os.Getenv("DB_NAME"),
    )

    conn, err := pgx.Connect(context.Background(), dsn)
    if err != nil {
        return fmt.Errorf("unable to connect to database: %w", err)
    }

    DB = conn
    fmt.Println("✅ Connected to PostgreSQL")
    return nil
}
