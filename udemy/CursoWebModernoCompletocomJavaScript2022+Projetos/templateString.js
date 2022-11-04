var a = 5;
var b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world "
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50

    return "Bazinga!";
}
//tag`Hello ${ a + b } world ${ a * b}`;
//console.log(`Hello ${ a + b } world ${ a * b}`);
// "Bazinga!"


function tag(strings, ...values) {
    return strings.raw[0];
}

tag`string text line 1 \n string text line 2`;
  // "string text line 1 \\n string text line 2"