<script setup>

import { useUserStore } from '../store/user.js'

const { users, fetchUsers } = useUserStore();

try {
  await fetchUsers();
} catch (error) {
  console.error('Error fetching users:', error);
}

</script>

<template>
  <table class="table table-stripped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>-</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.emailAdress }}</td>
        <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger" @click="handleDeleteUser()">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<style scoped>

</style>
