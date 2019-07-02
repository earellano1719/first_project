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
    use_id INT NOT NULL REFERENCES users(id),
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

insert into users  (full_name, username, email, password_digest, pic_url) values ('Johnnie Weight', 'jweight0', 'jweight0@plala.or.jp', '$2a$10$8Gf6WxEdSOvoihkbf2mwc.js.PJcQLzQcvERysfGW8vmyCcutWxYG', 'http://dummyimage.com/240x142.jpg/dddddd/000000');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Kent Clifft', 'kclifft1', 'kclifft1@mashable.com', '5WP4HuR', 'http://dummyimage.com/145x178.jpg/5fa2dd/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Rutledge Sidle', 'rsidle2', 'rsidle2@illinois.edu', 'he6hL1OAD', 'http://dummyimage.com/189x114.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Gretna Sotham', 'gsotham3', 'gsotham3@cdc.gov', 'yDMWoVs', 'http://dummyimage.com/192x105.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('William Kalkofer', 'wkalkofer4', 'wkalkofer4@godaddy.com', 'jotzm6Cf1JF3', 'http://dummyimage.com/243x213.jpg/dddddd/000000');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Alasdair Standeven', 'astandeven5', 'astandeven5@devhub.com', 'X08aYxUA', 'http://dummyimage.com/196x216.jpg/dddddd/000000');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Michael Maiden', 'mmaiden6', 'mmaiden6@weather.com', 'H8zcQKTod', 'http://dummyimage.com/177x206.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Justen Wykes', 'jwykes7', 'jwykes7@mozilla.org', 'cUJpeqcbI', 'http://dummyimage.com/248x108.jpg/5fa2dd/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Bendite Brockley', 'bbrockley8', 'bbrockley8@unblog.fr', 'wgGUCGi', 'http://dummyimage.com/181x119.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Pascale Le Fleming', 'ple9', 'ple9@dedecms.com', '$2a$10$8Gf6WxEdSOvoihkbf2mwc.js.PJcQLzQcvERysfGW8vmyCcutWxYG', 'http://dummyimage.com/134x132.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Brad Winfred', 'bwinfreda', 'bwinfreda@is.gd', 'Rf73AQfEc3k0', 'http://dummyimage.com/130x190.jpg/cc0000/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Kareem St Ledger', 'kstb', 'kstb@ca.gov', 'Zb3fnGB', 'http://dummyimage.com/161x176.jpg/dddddd/000000');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Tucker Edy', 'tedyc', 'tedyc@google.com.br', 'pZS9icSHWK', 'http://dummyimage.com/174x195.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Clarance Sainz', 'csainzd', 'csainzd@admin.ch', 'LhjqC6fdFOE', 'http://dummyimage.com/126x180.jpg/cc0000/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Eugene Braim', 'ebraime', 'ebraime@1688.com', 'EnSiIQyn', 'http://dummyimage.com/221x198.jpg/5fa2dd/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Warde Trass', 'wtrassf', 'wtrassf@a8.net', '4rvLPj597f', 'http://dummyimage.com/214x197.jpg/5fa2dd/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Nananne McGuiney', 'nmcguineyg', 'nmcguineyg@time.com', 'OLyXZcLIhkj', 'http://dummyimage.com/227x167.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Eugen Dodds', 'edoddsh', 'edoddsh@ifeng.com', 'xP99KMe22C', 'http://dummyimage.com/143x106.jpg/ff4444/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Erny Farney', 'efarneyi', 'efarneyi@marriott.com', 'zrYNpltU', 'http://dummyimage.com/189x211.jpg/5fa2dd/ffffff');
insert into users  (full_name, username, email, password_digest, pic_url) values ('Fred Bickford', 'fbickfordj', 'fbickfordj@msu.edu', 'wAT8hkq4Qq3', 'http://dummyimage.com/132x104.jpg/cc0000/ffffff');

insert into boards  (use_id, title) values (1, 'lacus at');
insert into boards  (use_id, title) values (2, 'nibh');
insert into boards  (use_id, title) values (3, 'ut tellus');
insert into boards  (use_id, title) values (4, 'erat curabitur');
insert into boards  (use_id, title) values (5, 'dapibus');
insert into boards  (use_id, title) values (6, 'convallis morbi');
insert into boards  (use_id, title) values (7, 'erat fermentum');
insert into boards  (use_id, title) values (8, 'mauris');
insert into boards  (use_id, title) values (9, 'in');
insert into boards  (use_id, title) values (10, 'libero');
insert into boards  (use_id, title) values (11, 'augue');
insert into boards  (use_id, title) values (12, 'aliquet maecenas');
insert into boards  (use_id, title) values (13, 'venenatis tristique');
insert into boards  (use_id, title) values (14, 'non');
insert into boards  (use_id, title) values (15, 'mauris');
insert into boards  (use_id, title) values (16, 'pretium');
insert into boards  (use_id, title) values (17, 'hac habitasse');
insert into boards  (use_id, title) values (18, 'ac leo');
insert into boards  (use_id, title) values (19, 'eleifend pede');
insert into boards  (use_id, title) values (20, 'sapien iaculis');

insert into pins  (user_id, board_id, url, caption) values (3, 11, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'dapibus augue vel accumsan tellus nisi eu orci mauris');
insert into pins  (user_id, board_id, url, caption) values (5, 2, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'quam turpis adipiscing lorem vitae');
insert into pins  (user_id, board_id, url, caption) values (3, 12, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'consectetuer eget rutrum at lorem');
insert into pins  (user_id, board_id, url, caption) values (17, 17, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'ante vestibulum');
insert into pins  (user_id, board_id, url, caption) values (3, 1, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'sit amet nunc');
insert into pins  (user_id, board_id, url, caption) values (17, 7, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'nisi volutpat eleifend donec ut');
insert into pins  (user_id, board_id, url, caption) values (5, 10, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'dapibus dolor vel est donec');
insert into pins  (user_id, board_id, url, caption) values (10, 13, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'aliquam augue quam sollicitudin');
insert into pins  (user_id, board_id, url, caption) values (11, 15, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'commodo vulputate justo in blandit ultrices enim');
insert into pins  (user_id, board_id, url, caption) values (3, 12, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'suscipit nulla elit ac nulla sed vel enim sit');
insert into pins  (user_id, board_id, url, caption) values (18, 16, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'eu magna vulputate luctus cum sociis natoque');
insert into pins  (user_id, board_id, url, caption) values (17, 1, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'nec');
insert into pins  (user_id, board_id, url, caption) values (1, 11, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'curae donec');
insert into pins  (user_id, board_id, url, caption) values (19, 12, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'nisi at nibh in');
insert into pins  (user_id, board_id, url, caption) values (19, 16, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'hac habitasse platea dictumst maecenas');
insert into pins  (user_id, board_id, url, caption) values (20, 12, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'curae mauris viverra diam vitae quam');
insert into pins  (user_id, board_id, url, caption) values (4, 1, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'quam fringilla rhoncus mauris enim');
insert into pins  (user_id, board_id, url, caption) values (18, 10, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'eu mi nulla ac enim');
insert into pins  (user_id, board_id, url, caption) values (17, 4, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'lorem vitae mattis');
insert into pins  (user_id, board_id, url, caption) values (5, 10, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'dui nec nisi volutpat eleifend donec ut dolor');
insert into pins  (user_id, board_id, url, caption) values (1, 2, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'id lobortis');
insert into pins  (user_id, board_id, url, caption) values (17, 5, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'molestie sed justo pellentesque viverra pede');
insert into pins  (user_id, board_id, url, caption) values (3, 3, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'convallis nulla neque libero convallis eget eleifend');
insert into pins  (user_id, board_id, url, caption) values (12, 3, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'nisi eu orci mauris lacinia sapien');
insert into pins  (user_id, board_id, url, caption) values (10, 20, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'in felis');
insert into pins  (user_id, board_id, url, caption) values (2, 17, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'nibh ligula');
insert into pins  (user_id, board_id, url, caption) values (16, 19, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices');
insert into pins  (user_id, board_id, url, caption) values (17, 5, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'dui vel sem sed sagittis nam');
insert into pins  (user_id, board_id, url, caption) values (9, 7, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'nisl nunc rhoncus dui vel sem sed sagittis nam congue');
insert into pins  (user_id, board_id, url, caption) values (12, 16, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'auctor gravida sem praesent');
insert into pins  (user_id, board_id, url, caption) values (1, 7, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'non mauris morbi non lectus aliquam');
insert into pins  (user_id, board_id, url, caption) values (5, 7, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'faucibus orci luctus et ultrices posuere');
insert into pins  (user_id, board_id, url, caption) values (19, 10, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'accumsan tellus');
insert into pins  (user_id, board_id, url, caption) values (19, 3, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'parturient montes nascetur ridiculus mus');
insert into pins  (user_id, board_id, url, caption) values (12, 1, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'vestibulum proin eu mi');
insert into pins  (user_id, board_id, url, caption) values (13, 9, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'nec condimentum neque sapien');
insert into pins  (user_id, board_id, url, caption) values (10, 10, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'elit sodales scelerisque mauris sit');
insert into pins  (user_id, board_id, url, caption) values (16, 9, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'luctus ultricies eu nibh');
insert into pins  (user_id, board_id, url, caption) values (9, 2, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'vestibulum');
insert into pins  (user_id, board_id, url, caption) values (16, 18, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'adipiscing lorem vitae mattis');
insert into pins  (user_id, board_id, url, caption) values (1, 9, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'ut mauris eget massa tempor convallis nulla neque');
insert into pins  (user_id, board_id, url, caption) values (16, 17, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'purus sit amet');
insert into pins  (user_id, board_id, url, caption) values (1, 10, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'interdum eu tincidunt in leo maecenas pulvinar');
insert into pins  (user_id, board_id, url, caption) values (7, 13, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'orci mauris lacinia sapien quis libero nullam sit amet turpis');
insert into pins  (user_id, board_id, url, caption) values (17, 6, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'id');
insert into pins  (user_id, board_id, url, caption) values (15, 20, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'nonummy');
insert into pins  (user_id, board_id, url, caption) values (3, 16, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'nascetur ridiculus mus');
insert into pins  (user_id, board_id, url, caption) values (18, 14, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'in quam fringilla rhoncus mauris enim');
insert into pins  (user_id, board_id, url, caption) values (14, 4, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'eu tincidunt in leo maecenas pulvinar lobortis est');
insert into pins  (user_id, board_id, url, caption) values (11, 19, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'rhoncus dui vel');
insert into pins  (user_id, board_id, url, caption) values (15, 4, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'sociis natoque penatibus et magnis dis parturient montes');
insert into pins  (user_id, board_id, url, caption) values (17, 4, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'tristique fusce congue diam');
insert into pins  (user_id, board_id, url, caption) values (7, 8, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'volutpat convallis morbi odio odio elementum eu interdum');
insert into pins  (user_id, board_id, url, caption) values (6, 9, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'turpis nec euismod scelerisque quam turpis adipiscing lorem vitae');
insert into pins  (user_id, board_id, url, caption) values (15, 1, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'aenean');
insert into pins  (user_id, board_id, url, caption) values (13, 14, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'semper porta volutpat quam pede lobortis');
insert into pins  (user_id, board_id, url, caption) values (11, 15, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'aliquam');
insert into pins  (user_id, board_id, url, caption) values (2, 11, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'etiam vel augue vestibulum rutrum rutrum neque');
insert into pins  (user_id, board_id, url, caption) values (14, 8, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'sodales scelerisque mauris sit');
insert into pins  (user_id, board_id, url, caption) values (9, 12, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'primis in faucibus orci luctus et');
insert into pins  (user_id, board_id, url, caption) values (4, 12, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'vivamus metus arcu adipiscing molestie hendrerit');
insert into pins  (user_id, board_id, url, caption) values (7, 12, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'lectus vestibulum quam sapien varius ut blandit non');
insert into pins  (user_id, board_id, url, caption) values (19, 6, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'mattis odio donec vitae nisi');
insert into pins  (user_id, board_id, url, caption) values (8, 15, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'turpis integer aliquet massa id');
insert into pins  (user_id, board_id, url, caption) values (12, 19, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'eu pede');
insert into pins  (user_id, board_id, url, caption) values (8, 17, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'ante ipsum primis in faucibus orci');
insert into pins  (user_id, board_id, url, caption) values (16, 16, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'montes nascetur ridiculus');
insert into pins  (user_id, board_id, url, caption) values (13, 10, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'sed accumsan felis ut at');
insert into pins  (user_id, board_id, url, caption) values (16, 8, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'aliquam');
insert into pins  (user_id, board_id, url, caption) values (2, 2, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'dui proin leo');
insert into pins  (user_id, board_id, url, caption) values (5, 15, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'felis eu sapien');
insert into pins  (user_id, board_id, url, caption) values (17, 3, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'quis odio consequat varius integer');
insert into pins  (user_id, board_id, url, caption) values (15, 18, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'eleifend quam a odio in hac habitasse');
insert into pins  (user_id, board_id, url, caption) values (18, 17, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'volutpat quam pede lobortis ligula sit amet eleifend pede');
insert into pins  (user_id, board_id, url, caption) values (9, 18, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'auctor sed tristique in tempus sit amet sem');
insert into pins  (user_id, board_id, url, caption) values (5, 10, 'http://dummyimage.com/600x600.jpg/cc0000/ffffff', 'ut erat id mauris vulputate elementum nullam varius');
insert into pins  (user_id, board_id, url, caption) values (6, 2, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'sed nisl nunc rhoncus dui');
insert into pins  (user_id, board_id, url, caption) values (15, 7, 'http://dummyimage.com/600x600.jpg/5fa2dd/ffffff', 'molestie lorem quisque');
insert into pins  (user_id, board_id, url, caption) values (12, 14, 'http://dummyimage.com/600x600.jpg/ff4444/ffffff', 'at velit vivamus vel nulla eget eros elementum pellentesque');
insert into pins  (user_id, board_id, url, caption) values (3, 14, 'http://dummyimage.com/600x600.jpg/dddddd/000000', 'id luctus nec molestie sed justo pellentesque viverra pede');