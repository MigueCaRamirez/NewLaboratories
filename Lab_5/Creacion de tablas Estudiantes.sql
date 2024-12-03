CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);


INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Juan', 20, 'Bogotá');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Ana', 22, 'Medellín');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Luis', 19, 'Cali');

SELECT * FROM Estudiantes;

SELECT * FROM Estudiantes WHERE ciudad = 'Medellín';

SELECT * FROM Estudiantes WHERE edad > 20;
