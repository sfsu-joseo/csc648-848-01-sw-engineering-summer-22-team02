Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertGame` (IN inTeamOne varchar(255), 
IN inTeamTwo varchar(255),
IN inGameDate varchar(255),
IN inGameLocation varchar(255),
IN inTeamOneScore INT,
IN inTeamTwoScore INT,
IN inHasForumn INT,
IN inSportType INT,
IN inteamOneURL LONGTEXT,
IN inteamTwoURL LONGTEXT
)

BEGIN
INSERT INTO `Game`
(`TeamOne`, `TeamTwo`, `GameDate`, `GameLocation`, `TeamOneScore`, `TeamTwoScore`, `HasForumn`, `SportType`, `teamOneURL`, `teamTwoURL`)
VALUES
(inTeamOne, inTeamTwo, inGameDate, inGameLocation, inTeamOneScore, inTeamTwoScore, inHasForumn, inSportType, inteamOneURL, inteamTwoURL);

END$$
DELIMITER ;