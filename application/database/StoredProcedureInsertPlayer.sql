Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertPlayer` (IN inPlayerName varchar(255), IN inPlayerType INT)

BEGIN
INSERT INTO `Player`
(`PlayerName`,`PlayerType`)
VALUES
(inPlayerName, inPlayerType);

END$$
DELIMITER ;