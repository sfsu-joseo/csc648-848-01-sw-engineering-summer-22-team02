Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetPlayers` 
(IN inPlayerID INT, IN inSportType INT)

BEGIN

IF inSportType = 0
THEN 
SELECT * FROM Basketball_Player 
WHERE fk_Player_ID = inPlayerID;
END IF;

IF inSportType = 1
THEN
SELECT * FROM Baseball_Player 
WHERE fk_Player_ID = inPlayerID;
END IF;

END$$
DELIMITER ;

