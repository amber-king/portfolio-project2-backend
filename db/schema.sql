DROP DATABASE IF EXISTS rocks_dev;

CREATE DATABASE rocks_dev;

\ c rocks_dev;

CREATE TABLE rocks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    element TEXT NOT NULL,
    where_found TEXT,
    color TEXT,
    texture text,
    luster text,
    hardness BOOLEAN
);