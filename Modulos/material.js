let internet = 90;
let luzElectrica = 60;
let transporte = 20;
let hosting = 20;
let dominio = 10;
let holgura = 0.08;
let total = [internet, luzElectrica, transporte, hosting, dominio];
let suma = total.reduce((a, b) => a + b);

const totales = () => ({
  total: (suma += suma * holgura),
});

module.exports = {
  totales: totales,
};
