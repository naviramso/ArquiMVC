SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP DATABASE IF EXISTS eventos_db;
CREATE DATABASE eventos_db CHARACTER SET utf8mb4;
USE eventos_db;

-- --------------------------------------------------------------
-- TABLE user												-
-- --------------------------------------------------------------
CREATE TABLE user (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE EVENTO									    -
-- --------------------------------------------------------------
CREATE TABLE evento (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_evento VARCHAR(100) NOT NULL,
  descripcion TEXT,
  fecha_evento DATE NOT NULL,
  hora_evento TIME NOT NULL,
  fecha_cierre DATE,
  ubicacion VARCHAR(100) NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE ARTISTA-EVENTO
-- --------------------------------------------------------------
CREATE TABLE artista_evento (
  id_evento INT UNSIGNED NOT NULL,
  id_artista INT UNSIGNED NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id_evento, id_artista),
  KEY idx_fk_id_evento (id_evento),
  KEY idx_fk_id_artista (id_artista),
  CONSTRAINT fk_evento_artista FOREIGN KEY (id_evento) REFERENCES evento (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_artista_evento FOREIGN KEY (id_artista) REFERENCES artista (id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
-- --------------------------------------------------------------
-- TABLE ARTISTA							    -
-- --------------------------------------------------------------
CREATE TABLE artista(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_artista VARCHAR(100) NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE BOLETO												-
-- --------------------------------------------------------------
CREATE TABLE boleto (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  id_evento INT UNSIGNED NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY idx_fk_id_evento (id_evento),
  CONSTRAINT fk_evento_boleto FOREIGN KEY (id_evento) REFERENCES evento (id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------------
-- TABLE RESERVA							-
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS reserva (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_venta INT UNSIGNED NOT NULL,
  id_boleto INT UNSIGNED NOT NULL,
  id_usuario INT UNSIGNED NOT NULL,
  cant_reserva INT UNSIGNED NOT NULL,
  fecha_reserva TIMESTAMP NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY idx_fk_id_venta (id_venta),
  KEY idx_fk_id_boleto (id_boleto),
  KEY idx_fk_id_usuario (id_usuario),
  CONSTRAINT fk_venta_reserva FOREIGN KEY (id_venta) REFERENCES venta (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_boleto_reserva FOREIGN KEY (id_boleto) REFERENCES boleto (id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_usuario_reserva FOREIGN KEY (id_usuario) REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------------
-- TABLE VENTA											-
-- --------------------------------------------------------------
CREATE TABLE IF NOT EXISTS venta (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id_usuario INT UNSIGNED NOT NULL,
  fecha_venta TIMESTAMP NOT NULL,
  total_venta DECIMAL(10,2) NOT NULL,
  ultima_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id),
  KEY idx_fk_id_usuario (id_usuario),
  CONSTRAINT fk_usuario_venta FOREIGN KEY (id_usuario) REFERENCES user (id) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;