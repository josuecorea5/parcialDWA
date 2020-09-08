let precioHora = 10;
let horasTrabajador = [5, 10, 10, 5, 5, 10, 10, 10, 5, 10, 10, 10, 10];
let sumaHoras = horasTrabajador.reduce((a, b) => a + b);
let cantidadEmpleo = horasTrabajador.length;
const precioTrabajador = () => {
  for (let i = 0; i < horasTrabajador.length; i++) {
    let total = horasTrabajador[i] * precioHora;
    let horas = `Horas trabajadas ${horasTrabajador[i]} precio $${total}`;
    console.log(horas);
  }
};
const costoEmpleados = () => ({
  totalSalarios: sumaHoras * precioHora,
  totalEmpleados: cantidadEmpleo,
});

module.exports = {
  precioTrabajador: precioTrabajador,
  costoEmpleados: costoEmpleados,
};
