Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `DeleteAccountByAccountID` 
(IN inAccountID INT)

BEGIN

DELETE FROM Account
WHERE Account_ID = inAccountID;

END$$
DELIMITER ;
