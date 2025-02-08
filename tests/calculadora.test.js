const calculadora = require("../models/calculadora.js");

test("Soma: check basic", () => {
    const result = calculadora.somar(2,2);
    expect(result).toBe(4);
});


test("Soma: valida string number1", () => {
    const result = calculadora.somar("teste",1);
    expect(result).toBe("Error");
});

test("Soma: valida string number2", () => {
    const result = calculadora.somar(5,"1");
    expect(result).toBe("Error");
});
