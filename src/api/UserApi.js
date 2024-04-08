import Api from "./BaseApi"

class UserApi {
    getAllUsers = () => {
        return Api.get("/users");
    }
}
const userApi = new UserApi();
export default userApi;