Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `GetAccountByUsernameOrEmail` 
(IN inUsername varchar(255),
IN inEmail varchar(255),
IN inPassword varchar(255))

BEGIN

SELECT * FROM Account
WHERE (Username = inUsername OR Email = inEmail)
AND Password = inPassword;

END$$
DELIMITER ;
