Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `CheckAccountByUsernameOrEmail` (IN inUsername varchar(255),
IN inEmail varchar(255))

BEGIN

SELECT COUNT(*) FROM Account
WHERE (BINARY Username = inUsername OR BINARY Email = inEmail);

END$$
DELIMITER ;