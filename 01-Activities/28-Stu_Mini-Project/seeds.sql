INSERT INTO movies (id, movie_name)
VALUES (001, "Spinach"),
       (002, "Peanut Butter"),
       (003, "Peas-Canned"),
       (004, "Ice Cream"),
       (005, "Potato Chips");

INSERT INTO reviews (id, movie_id, review)
VALUES (001, 002, "produce"),
       (002, 003, "staples"),
       (003, 001, "canned goods"),
       (004, 005, "frozen"),
       (005, 004, "snacks");