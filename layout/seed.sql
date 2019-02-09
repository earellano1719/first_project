DROP DATABASE IF EXISTS pinterest;
CREATE DATABASE pinterest;

\c pinterest;

CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    url VARCHAR NOT NULL
}

CREATE TABLE follows {
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    follower_id INT REFERENCES users(id)
}

CREATE TABLE pin {
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    caption VARCHAR NOT NULL
}

CREATE TABLE tags {
    id SERIAL PRIMARY KEY,
    pin_id INT REFERENCES pin(id),
    caption VARCHAR NOT NULL
}

CREATE TABLE board {
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    pin_id INT REFERENCES pin(id),
    caption VARCHAR NOT NULL   
}

CREATE TABLE likes {
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    pin_id INT REFERENCES pin(id)
}

CREATE TABLE comments {
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    pin_id INT REFERENCES pin(id),
    body TEXT NOT NULL
}