<template>
  <main>
    <!-- 🔹 Секция: фильтр -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-700">Фильтрация пользователей</h2>
      <select
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
      >
        <option value="all">Все</option>
        <option value="admin">Админ</option>
        <option value="user">Пользователь</option>
        <option value="guest">Гость</option>
      </select>
    </section>

    <!-- 🔹 Секция: список пользователей -->
    <section class="space-y-4" v-if="users">
      <h2 class="text-xl font-semibold text-gray-700">Список пользователей</h2>
      <ul class="space-y-3">
        <li class="p-4 border rounded-lg shadow-sm flex justify-between items-center"
            v-for="(user, index) in users"
            :key="index"
        >
          <div class="space-y-1">
            <p><span class="font-medium">Имя:</span> {{ user.name }}</p>
            <p><span class="font-medium">Email:</span> {{ user.email }}</p>
            <p><span class="font-medium">Роль:</span> {{ user.role }}</p>
          </div>
          <div class="flex gap-3 items-center gap-3">
            <button
                class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
                @click.prevent="selectUser(user)"
            >
              Редактировать
            </button>
            <button
                class="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
                @click.prevent="deleteUser(index)"
            >
              Удалить
            </button>
          </div>
        </li>
      </ul>
    </section>

    <!-- 🔹 Секция: форма добавления -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold text-gray-700">Добавить пользователя</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-600">Имя</label>
          <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              v-model="name"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Email</label>
          <input
              type="email"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              v-model="email"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-600">Роль</label>
          <select
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
              v-model="role"
          >
            <option :value="role" v-for="(role, index) in roles">{{ role }}</option>
          </select>
        </div>
        <div class="flex items-center gap-3">

          <button
              type="submit"
              class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              @click.prevent="addUser"
          >
            Добавить
          </button>
          <button
              id="counter-button"
              type="submit"
              class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              @click.prevent="count++"
          >
            Counter
          </button>
        </div>
        {{count}}

      </form>
    </section>

    <test-component id="1"></test-component>
  </main>
</template>
<script setup lang="ts">
import {Roles} from '@/types/Roles';
import type {User} from '@/types/User.ts'
import {ref} from 'vue';
import TestComponent from "@/components/TestComponent.vue";

// типизация моделек
const email = ref<string>('');
const count = ref<number>(0);
const name = ref<string>('');
const role = ref<Roles | null>(Roles.ADMIN);
const users = ref<User[]>([]);
const isEdit = ref<boolean>(false);
const selectedUser = ref<number | null>(null);
const roles: object = Object.values(Roles)

// метод добавления юзера
function addUser(): void {
  if (email.value && name.value && role.value) {
    users.value.push({
      email: email.value,
      name: name.value,
      role: role.value
    })

    role.value = Roles.USER;
    email.value = '';
    name.value = '';

    console.log(users.value)
  }


}

function selectUser(index: number): void {
  isEdit.value = true;
  selectedUser.value = index

}

function deleteUser(index: number): void {
  users.value.splice(index, 1);
}

</script>