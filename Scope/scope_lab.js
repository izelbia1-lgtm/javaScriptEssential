// Global scope
var globalVar = "I am a var variable";
let globalLet = "I am a let variable";
const globalConst = "I am a const variable";

console.log("Global scope:");
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

function scopeTest() {
    // Function scope
    var functionVar = "I am function-scoped var";
    let functionLet = "I am function-scoped let";
    const functionConst = "I am function-scoped const";

    console.log("Inside function:");
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);

    if (true) {
        // Block scope
        var blockVar = "I am block-scoped var (actually function-scoped)";
        let blockLet = "I am block-scoped let";
        const blockConst = "I am block-scoped const";

        console.log("Inside block:");
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }

    // var is accessible here, let/const are not
    console.log("After block:");
    console.log(blockVar);
}

scopeTest();
