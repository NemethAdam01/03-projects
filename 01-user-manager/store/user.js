import { ref } from 'vue';
import { getUsers } from '../api/userAPI.js';
const users = ref([]);
export function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }
    
}