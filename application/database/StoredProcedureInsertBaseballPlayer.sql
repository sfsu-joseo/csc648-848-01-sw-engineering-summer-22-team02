Use YourSportsDB;

DELIMITER $$
CREATE PROCEDURE `InsertBaseBallPlayer` (IN inBats DECIMAL, 
IN inRuns DECIMAL,
IN inHits DECIMAL,
IN inSingles DECIMAL,
IN inDoubles DECIMAL,
IN inTriples DECIMAL,
IN inHomeRuns DECIMAL,
IN inRunsBatted DECIMAL,
IN inBattingAverage DECIMAL,
IN inOuts DECIMAL,
IN inPlayerID INT,
IN inplayerURL LONGTEXT
)

BEGIN
INSERT INTO `Baseball_Player`
(`AtBats`, `Runs`, `Hits`, `Singles`, `Doubles`, `Triples`, `HomeRuns`, `RunsBatted`, `BattingAverage`, `Outs`, `fk_Player_ID`, `playerURL`)
VALUES
(inBats, inRuns, inHits, inSingles, inDoubles, inTriples, inHomeRuns, inRunsBatted, inBattingAverage, inOuts, inPlayerID, inplayerURL);

END$$
DELIMITER ;