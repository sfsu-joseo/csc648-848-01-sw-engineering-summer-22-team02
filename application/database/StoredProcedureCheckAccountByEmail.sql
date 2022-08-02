Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `CheckAccountByEmail` (IN inEmail varchar(255))

BEGIN

SELECT COUNT(*) FROM Account
WHERE BINARY Email = inEmail;

END$$
DELIMITER ;