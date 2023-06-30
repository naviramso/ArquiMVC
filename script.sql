SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP DATABASE IF EXISTS eventos_db;
CREATE DATABASE eventos_db CHARACTER SET utf8mb4;
USE eventos_db;

-- --------------------------------------------------------------
-- TABLE user												-
-- --------------------------------------------------------------

DROP table if exists usuarios;
CREATE TABLE usuarios (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL,
  contrasenia VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  ruta_imagen VARCHAR(100),
  tipo_usuario enum('administrador', 'cliente') DEFAULT 'cliente',
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE EVENTO									    -
-- --------------------------------------------------------------
CREATE TABLE eventos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_evento VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_evento DATE NOT NULL,
  hora_evento TIME NOT NULL,
  fecha_cierre DATE,
  ubicacion VARCHAR(100) NOT NULL,
  ruta_imagen VARCHAR(100),
  nombre_artista VARCHAR(100),
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE BOLETO												-
-- --------------------------------------------------------------
CREATE TABLE boletos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  id_evento INT UNSIGNED NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  cantidad INT NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE RESERVA							-
-- --------------------------------------------------------------

CREATE TABLE reservas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_venta INT UNSIGNED NOT NULL,
  id_boleto INT UNSIGNED NOT NULL,
  id_usuario INT UNSIGNED NOT NULL,
  cant_reserva INT UNSIGNED NOT NULL,
  fecha_reserva TIMESTAMP NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE VENTA											-
-- --------------------------------------------------------------

CREATE TABLE ventas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_usuario INT UNSIGNED NOT NULL,
  fecha_venta TIMESTAMP NOT NULL,
  total_venta DECIMAL(10,2) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;