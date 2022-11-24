import createApiClient from "./service";
class User {
    constructor(baseUrl = "/api") {
        this.api = createApiClient(baseUrl);
    }
    async login(data){
        return (await this.api.post("/login",data)).data;
    }
}
export default new User();