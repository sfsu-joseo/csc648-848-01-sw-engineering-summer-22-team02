Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `SearchGames` (IN inGamedate varchar(255), IN inSport INT,IN inTeam varchar(255) )

BEGIN
SELECT * FROM Game
WHERE (GameDate = inGamedate OR inGamedate is NULL) 
AND 
(SportType = inSport OR inSport is NULL )
AND
(TeamOne LIKE CONCAT('%',inTeam,'%') OR TeamTwo LIKE CONCAT('%',inTeam,'%') OR inTeam is NULL)
ORDER BY GameDate DESC;

END$$
DELIMITER ;