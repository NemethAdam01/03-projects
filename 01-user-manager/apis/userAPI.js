import apiClient from "../utils/apiClient";

const urlFragment = "users";

export async function getUsers() {
    const response = await apiClient.get(urlFragment);
    return response.data;
}

export async function deleteUser(Id) {
    const response = await apiClient.delete(`${urlFragment}/${Id}`);
}

    