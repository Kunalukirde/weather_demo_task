CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE wheather_snapshots (
    id SERIAL PRIMARY KEY,
    city_id INT NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
    temperature DECIMAL(5, 2) NOT NULL,
    humidity INT,
    description TEXT,
    observed_at TIMESTAMP DEFAULT NOW()
)