// Teste passando uma func jeito comum
test("test normal", funcTest1);

function funcTest1 () {
    expect(1).toBe(1);
}

// Agora com func anonima
test("test anonimo", function (){
    expect(2).toBe(2);
});

// Agora de um jeito mistico
test("test mistico",  () => {
    expect(3).toBe(3);
});
