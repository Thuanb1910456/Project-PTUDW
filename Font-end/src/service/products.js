import createApiClient from "./service";
class Products {
    constructor(baseUrl = "/api/store") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async update(id,data){
        return (await this.api.put(`/${id}`,data)).data
    }
    async create(data){
        return (await this.api.post("/",data)).data
    }
    
}
export default new Products();