SELECT A.NOMBRE, A.CARRERA FROM ESTUDIANTES A
WHERE A.CODIGO IN (
  SELECT B.CODIGO_ESTUDIANTE FROM INSCRIPCIONES B
  WHERE B.CODIGO_CURSO != 2020 
)