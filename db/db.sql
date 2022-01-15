CREATE TABLE movie(
    movie_id integer primary key,
    movie_title varchar(30),
    movie_release_date varchar(30),
    movie_time varchar(10),
    director_name varchar(30)

);

INSERT INTO movie(movie_id, movie_title,movie_release_date,movie_time,director_name) 
VALUES(1,'Dum-dum tum-tum','2021/01/01','3:30PM','Tejal');