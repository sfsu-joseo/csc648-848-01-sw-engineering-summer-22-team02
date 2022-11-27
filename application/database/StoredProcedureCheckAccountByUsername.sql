Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `CheckAccountByUsername` (IN inUsername varchar(255))

BEGIN

SELECT COUNT(*) FROM Account
WHERE BINARY Username = inUsername;

END$$
DELIMITER ;