"use strict";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["domingo"] = "folga";
    DiasSemana["segunda"] = "trabalho";
    DiasSemana["terca"] = "trabalho";
    DiasSemana["quarta"] = "trabalho";
    DiasSemana["quinta"] = "trabalho";
    DiasSemana["sexta"] = "trabalho";
    DiasSemana["sabado"] = "folga";
})(DiasSemana || (DiasSemana = {}));
console.log(DiasSemana.domingo);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario["admin"] = "Armando";
    tipoUsuario[tipoUsuario["user"] = 1] = "user";
    tipoUsuario[tipoUsuario["guest"] = 2] = "guest";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.admin);
