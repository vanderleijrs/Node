-- MySQL Script generated by MySQL Workbench
-- Thu Jan 30 19:34:05 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MeuBanco
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema MeuBanco
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MeuBanco` DEFAULT CHARACTER SET utf8 ;
USE `MeuBanco` ;

-- -----------------------------------------------------
-- Table `MeuBanco`.`funcionario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MeuBanco`.`funcionario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NULL,
  `EmpCode` VARCHAR(45) NULL,
  `Salario` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
