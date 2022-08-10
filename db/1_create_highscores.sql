-- DROP TABLE IF EXISTS highscores

CREATE TABLE highscores (
    id serial PRIMARY KEY,
    username varchar(50) NOT NULL,
    score int,
    category varchar(50),
    difficulty varchar(50)
);
