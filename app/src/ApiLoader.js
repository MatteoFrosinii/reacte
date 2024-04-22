export default class ApiLoader {
    static #illegalConstructing = false;

    constructor(){
        if (!ApiLoader.#illegalConstructing) {
            throw new TypeError("ApiLoader is not constructable. Use get instance");
        } else {
            ApiLoader.#illegalConstructing = false
            return ApiLoader._instance;
        }
    }

    static getInstance() {
        ApiLoader.#illegalConstructing = true;
        if(!ApiLoader._instance){
            return new ApiLoader();
        }return ApiLoader._instance;
    }

    static testPrint () {
        console.log("palle")
    }
}   