const {accInfo, isAddr} = require("ton-addr");

test('Test account response', async () => {
    const response = await accInfo("-1:7777777777777777777777777777777777777777777777777777777777777777");   
    expect(response.length).toBe(3);
});

test('Is TON addr - yes', async () => {
    const response = isAddr("-1:efd5a14409a8a129686114fc092525fddd508f1ea56d1b649a3a695d3a5b188c");   
    expect(response).toBe(true);
});


test('Is TON addr - yes', async () => {
    const response = isAddr("0xefd5a14409a8a129686114fc092525fddd508f1ea56d1b649a3a695d3a5b188c");   
    expect(response).toBe(true);
});

test('Is TON addr - no', async () => {
    const response = isAddr("d5a14409a8a129686114fc092525fddd508f1ea56d1b649a3a695d3a5b188c");   
    expect(response).toBe(false);
});
