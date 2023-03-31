class TestModule{
    value: string
    constructor(){
        this.value = "Test value";
    }
    make(){
        console.log(this.value);
    }
}
export {TestModule};