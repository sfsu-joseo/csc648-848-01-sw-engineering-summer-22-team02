Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `ResetPasswordByAccountID` 
(IN inAccountID INT,
IN inPassword varchar(255))

BEGIN

UPDATE Account
SET Password = inPassword
WHERE Account_ID = inAccountID;

END$$
DELIMITER ;