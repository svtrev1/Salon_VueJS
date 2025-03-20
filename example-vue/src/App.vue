<template>
  <Menubar :model="items">
    <template #start>
      <span>
        <img src="@/assets/logo.png" alt="LOGO" width="50"/>
      </span>
    </template>
    <template #item="{ item, props, hasSubmenu, root}">
      <a class="flex items-center ml-6 p-4">
        <router-link v-if="item.route" :to="item.route">
          <span :class="item.icon"></span>
          <span class="ml-1">{{ item.label }}</span>
        </router-link>
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-2">
        <div v-if="isAuthenticated && user">
          <span class="pi pi-fw pi-user mr-4"></span>
          {{ user.name }}
          <Button @click="logout" class="ml-4">Выйти</Button>
        </div>
        <div v-else>
          <form @submit.prevent="login">
            <InputText v-model="email" type="email" id="email" required placeholder="Логин" class="m-2 sm:w-auto" :class="{'p-invalid': authError}"/>
            <InputText v-model="password" type="password" id="password" required placeholder="Пароль" class="m-2 sm:w-auto" :class="{'p-invalid': authError}"/>
            <Button type="submit">Войти</Button>
            <div class="ml-2"> <small v-if="authError" class="error">{{ authError }}</small> </div>
          </form>
        </div>
      </div>
    </template>
  </Menubar>
  <router-view /> 
</template>

<script>
import { useAuthStore } from '@/stores/authStore';
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import ToastService from 'primevue/toastservice';

export default {
  components: {Button, Menubar, InputText},
  data() {
    return {
      date: '',
      email: '',
      password: '',
      authStore: useAuthStore(),
      items: [
        {
          label: 'Главная страница',
          icon: 'pi pi-fw pi-home',
          route: '/',
          shortcut: 'Ctrl + H',
          submenu: [
            //items
          ],
        },
        {
          label: 'Косметологи',
          icon: 'pi pi-fw pi-user',
          route: '/cosmetologists',
        },
        {
          label: 'Клиенты',
          icon: 'pi pi-fw pi-users',
          route: '/clients',
        },
        {
          label: 'Сеансы',
          icon: 'pi pi-fw pi-calendar-clock',
          route: '/sessions',
        },
        {
          label: 'Услуги',
          icon: 'pi pi-fw pi-users',
          route: '/services',
        },
      ],
    };
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated;
    },
    user() {
      return this.authStore.user;
    },
    authError() {
      return this.authStore.errorMessage;
    },
  },
  methods: {
    logout() {
      this.authStore.logout();
    },
    login() {
      this.authStore.login({email: this.email, password: this.password});
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authStore.isAuthenticated = true;
      this.authStore.getUser();
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>