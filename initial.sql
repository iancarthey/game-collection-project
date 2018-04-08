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
	rating INT,
	pic varchar(500),
	fav boolean DEFAULT "FALSE"
);

INSERT INTO "gametypes" ("name") VALUES ('video game'), ('board game'), ('card game');

INSERT INTO games ("name", "release", "type", "gametype_id", "rating", "pic") VALUES 
('Fortnite', '7/25/2017', 'video game', 10, https://www.instant-gaming.com/images/products/2500/271x377/2500.jpg), 
('PubG', '12/12/17', 'video game', 1, 7, https://www.cdkeys.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/l/playerunknown_s_battlegrounds_pc_cover.jpg), 
('BANG!', '1/1/2002', 'card game', 3, 8, https://cf.geekdo-images.com/opengraph/img/ba5bgg0MZw8-sQ8xiOXRDzGiRHA=/fit-in/1200x630/pic1170986.jpg), 
('Monopoly', '2/6/1935', 'board game', 2, 5, https://i.amz.mshcdn.com/Su7StqD_1wUwVtAiIQeV8WPotyg=/fit-in/1200x9600/http%3A%2F%2Fmashable.com%2Fwp-content%2Fuploads%2F2015%2F01%2FMonopoly-Game-2005.jpg);