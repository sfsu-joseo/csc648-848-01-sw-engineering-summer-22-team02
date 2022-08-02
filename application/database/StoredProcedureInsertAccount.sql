Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertAccount` (IN inName varchar(255), IN inUsername varchar(255), 
IN inEmail varchar(255),
IN inPassword varchar(255),
IN isCreator INT)

BEGIN
INSERT INTO `Account`
(`Name`,`Username`,`Email`,`Password`,`isCreator`)
VALUES
(inName, inUsername, inEmail, inPassword, isCreator);

END$$
DELIMITER ;