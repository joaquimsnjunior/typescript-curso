// Aula 04: Enums em TypeScript
// Enums são um tipo de dado que permite definir um conjunto de constantes nomeadas.

// Exemplo de enum em TypeScript

enum DiasSemana {
  domingo = "folga",
  segunda = "trabalho",
  terca = "trabalho",
  quarta = "trabalho",
  quinta = "trabalho",
  sexta = "trabalho",
  sabado = "folga",
}

console.log(DiasSemana.domingo);
// console.log(DiasSemana["segunda"]);

// const d=new Date();
// console.log(d.getDay());

enum tipoUsuario {
  admin = "Armando",
  user = 1,
  guest = 2,
}

console.log(tipoUsuario.admin);