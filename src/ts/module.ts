    import { v4 as uuidv4 } from 'uuid';
class TestModule{
    value: string
    constructor(){
        this.value = "Test value";
    }
    make(){
        let a = uuidv4();
        console.log(a)
        console.log(this.value);
    }
}
export {TestModule};