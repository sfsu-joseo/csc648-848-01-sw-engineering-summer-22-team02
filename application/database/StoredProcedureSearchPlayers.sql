Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `SearchPlayers` (IN inPlayername varchar(255), IN inPlayerType INT)

BEGIN
SELECT * FROM Player
WHERE (PlayerName LIKE CONCAT('%',inPlayername,'%') OR inPlayerName is NULL)
AND (PlayerType = inPlayerType OR inPlayerType is NULL);

END$$
DELIMITER ;