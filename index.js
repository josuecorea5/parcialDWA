const miModulo = require("./Modulos/empleados");
const ejemplo = require("./Modulos/material");
const llamado = miModulo.costoEmpleados();
const llama = ejemplo.totales();

const totalProyecto = () => {
  if (llamado.totalSalarios + llama.total > 1500) {
    console.log(`Total Proyecto: $${llamado.totalSalarios + llama.total}`);
  } else {
    const err = new Error("El proyecto no debe de ser menor a $1500 :(");
    console.log("ERROR:", err.message);
    console.log(`Total Proyecto: $${llamado.totalSalarios + llama.total}`);
  }
};
console.log(miModulo.precioTrabajador());
console.log(`Total de empleados ${llamado.totalEmpleados}`);
console.log(`Total de salarios: $${llamado.totalSalarios}`);
console.log(`Total de costos: $${llama.total}`);
totalProyecto();
