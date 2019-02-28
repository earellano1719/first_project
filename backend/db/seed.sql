DROP DATABASE IF EXISTS pinterest;
CREATE DATABASE pinterest;

\c pinterest;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL,
    pic_url VARCHAR
);


CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    title VARCHAR NOT NULL   
);

CREATE TABLE pins (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    board_id INT REFERENCES boards(id),
    url VARCHAR NOT NULL,
    caption VARCHAR NOT NULL
);

CREATE TABLE follows (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    follower_id INT REFERENCES users(id)
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    pin_id INT REFERENCES pins(id),
    caption VARCHAR NOT NULL
);


CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    pin_id INT REFERENCES pins(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    pin_id INT REFERENCES pins(id),
    body TEXT NOT NULL
);

-- INSERT INTO users(full_name, username, email, pic_url) VALUES (
--     'Dog Dummy', 'dummyDog', 'pupone@dummymail.com', 'https://images.dog.ceo/breeds/stbernard/n02109525_3531.jpg'), (
--     'Pup Dummy', 'dummyPup', 'puptwo@dummymail.com', 'https://images.dog.ceo/breeds/maltese/n02085936_8867.jpg');

-- INSERT INTO boards(user_id, title) VALUES (1, 'boardOne'), (2, 'boardTwo');

-- INSERT INTO pins(user_id, board_id, url, caption) VALUES (1, 1, 'https://images.dog.ceo/breeds/beagle/n02088364_12745.jpg', 'oh yeah'), 
--                                                         (1, 1, 'https://images.dog.ceo/breeds/keeshond/n02112350_6947.jpg', 'lol'),                                                        (2, 2, 'https://images.dog.ceo/breeds/doberman/n02107142_3412.jpg', 'haha'),
--                                                         (2, 2, 'https://images.dog.ceo/breeds/keeshond/n02112350_6947.jpg', 'look at this'),
--                                                         (1, 1, 'https://images.dog.ceo/breeds/greyhound-italian/n02091032_1894.jpg', 'cool guy'),
--                                                         (1, 1, 'https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg', 'always works'),
--                                                         (2, 2, 'https://images.dog.ceo/breeds/boxer/n02108089_7259.jpg', 'sniff sniff'),
--                                                         (2, 2, 'https://images.dog.ceo/breeds/borzoi/n02090622_9358.jpg', 'should I join?');