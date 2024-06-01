import { multiplicar, sumar } from "@/components/prueba";

export default function Home() {
  const uno = 1;
  const dos = 2;
  const cuatro = 4;
  const resultado = sumar(uno, cuatro);
  const resultado2 = multiplicar(resultado, cuatro);
  const edad = 19;
  const esMayorEdad = edad > 18;

  return (
    <main>
      <p>{resultado}</p>
      <p>{resultado2}</p>
      <p>
        {uno}+{cuatro}={resultado}
      </p>
      <p>
        {resultado}*{cuatro}={resultado2}
      </p>
      {esMayorEdad && <p>Eres mayor de edad</p>}
      {!esMayorEdad && <p>No eres mayor de edad</p>}
    </main>
  );
}
