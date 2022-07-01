-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Yoursports
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Yoursports
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Yoursports` DEFAULT CHARACTER SET utf8 ;
USE `Yoursports` ;

-- -----------------------------------------------------
-- Table `Yoursports`.`RegisteredUser`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`RegisteredUser` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(128) NOT NULL,
  `username` VARCHAR(128) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Yoursports`.`Creator`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`Creator` (
  `creator_id` INT NOT NULL AUTO_INCREMENT,
  `fk_userid` INT NOT NULL,
  PRIMARY KEY (`creator_id`),
  UNIQUE INDEX `creator_id_UNIQUE` (`creator_id` ASC) VISIBLE,
  INDEX `user_idx` (`fk_userid` ASC) VISIBLE,
  CONSTRAINT `FK_CREATOR_REGISTEREDUSER`
    FOREIGN KEY (`fk_userid`)
    REFERENCES `Yoursports`.`RegisteredUser` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Yoursports`.`Article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`Article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `posttime` DATETIME NOT NULL,
  `image_URL` VARCHAR(2048) NULL,
  `heading` VARCHAR(2048) NOT NULL,
  `subheading` VARCHAR(2048) NOT NULL,
  `introduction` VARCHAR(2048) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `conclusion` VARCHAR(2048) NOT NULL,
  `fk_authorid` INT NOT NULL,
  `sport` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Aid_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `author_id_idx` (`fk_authorid` ASC) VISIBLE,
  CONSTRAINT `FK_ARTICLE_CREATOR`
    FOREIGN KEY (`fk_authorid`)
    REFERENCES `Yoursports`.`Creator` (`creator_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Yoursports`.`Comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`Comment` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `fk_articleid` INT NOT NULL,
  `fk_authorid` INT NOT NULL,
  `posttime` DATETIME NOT NULL,
  `content` VARCHAR(2048) NOT NULL,
  PRIMARY KEY (`comment_id`),
  UNIQUE INDEX `id_UNIQUE` (`comment_id` ASC) VISIBLE,
  INDEX `article_id_idx` (`fk_articleid` ASC) VISIBLE,
  INDEX `author_id_idx` (`fk_authorid` ASC) VISIBLE,
  CONSTRAINT `FK_COMMENT_ARTICLE`
    FOREIGN KEY (`fk_articleid`)
    REFERENCES `Yoursports`.`Article` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_COMMENT_REGISTEREDUSER`
    FOREIGN KEY (`fk_authorid`)
    REFERENCES `Yoursports`.`RegisteredUser` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Yoursports`.`Tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`Tag` (
  `tag_id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NOT NULL,
  UNIQUE INDEX `id_UNIQUE` (`tag_id` ASC) VISIBLE,
  PRIMARY KEY (`tag_id`),
  UNIQUE INDEX `content_UNIQUE` (`content` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Yoursports`.`Article_Tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Yoursports`.`Article_Tag` (
  `fk_TagId` INT NOT NULL,
  `fk_ArticleId` INT NOT NULL,
  INDEX `tag_id_idx` (`fk_TagId` ASC) VISIBLE,
  INDEX `article_id_idx` (`fk_ArticleId` ASC) VISIBLE,
  PRIMARY KEY (`fk_ArticleId`, `fk_TagId`),
  CONSTRAINT `FK_ARTICLETAG_TAG`
    FOREIGN KEY (`fk_TagId`)
    REFERENCES `Yoursports`.`Tag` (`tag_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `FK_ARTICLETAG_ARTICLE`
    FOREIGN KEY (`fk_ArticleId`)
    REFERENCES `Yoursports`.`Article` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
