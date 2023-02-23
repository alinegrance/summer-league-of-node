USE 'LeagueOfNode';

INSERT INTO users (username, email, password) VALUES
  ('bigBoss', 'bigboss@email.com', 'mypassword123'),
  ('teenTeemo', 'teenteemo@email.com', 'otherpassword92'),
  ('newPlayer', 'newplayer@email.com', 'superpassword123'),
  ('novoPlayerBR', 'novoplayer@email.com', 'superpasswordBR92');

INSERT INTO characters (name) VALUES
  ('Annie'),
  ('Rell'),
  ('Cassiopeia'),
  ('Maokai');

INSERT INTO skins (character_id, name) VALUES
  (1, "Frostfire Annie"),
  (1, "Panda Annie"),
  (2, "Battle Queen Rell"),
  (3, "Siren Cassiopeia"),
  (4, "Astronaut Maokai");

INSERT INTO user_aquired_characters (user_id, character_id, level) VALUES
  (1, 1, 1),
  (1, 2, 10),
  (2, 3, 5),
  (3, 1, 7),
  (4, 4, 1);

INSERT INTO user_aquired_skins (user_id, skin_id) VALUES
  (1, 1),
  (1, 3),
  (2, 4),
  (3, 2);