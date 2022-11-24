<template>
    <div>
        <div class="logo"><img src="../assets/images/logo.jpg" alt="..."></div>
        <div class="container">
            <div class="head">
                <div v-if="this.userStore.user.name != null">
                    <div>
                        <p>Hello: {{this.userStore.user.name}} <button class = "btn btn-warning" @click="this.logout()" ><i class="fa-solid fa-right-from-bracket" ></i></button></p>
                    </div>
                </div>
                <router-link v-else :to="{ name: 'login' }" class="text-decoration-none link"><i
                        class="fa-solid fa-user-plus"></i> đăng nhập</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { useUserStore } from "@/store/userStore.js";
export default {
    data() {
        const userStore = useUserStore();
        return {
            userStore,
        };
    },
    methods: {
        async logout() {
            this.userStore.user = {};
        },
    },
};
</script>
<style>
p {
    font-size: large;
    font-weight: bold;
    color: crimson;
    text-transform: uppercase;
}

.logo {
    text-align: center;
}

.logo img {
    width: 200px;
}

.head {
    text-align: center;
    font-weight: bold;
}

.link {
    color: rgb(236, 10, 104);
    font-size: large;
    text-transform: uppercase;
}
</style>