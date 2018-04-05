CREATE TABLE gametypes (
    id SERIAL PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name varchar(255),
	release date,
    type varchar(255),
    gametype_id INT REFERENCES "gametypes"
);

INSERT INTO "gametypes" ("name") VALUES ('video game'), ('board game'), ('card game');

INSERT INTO games ("name", "release", "type", "gametype_id") VALUES ('Fortnite', '7/25/2017', 'video game', 1), ('PubG', '12/12/17', 'video game', 1), ('BANG!', '1/1/2002', 'card game', 3), 
('Monopoly', '2/6/1935', 'board game', 2);