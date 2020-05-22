<template>
    <div class="bg-dark nav">

        <router-link to="/">
            <button class="btn btn-primary">
                home
            </button>
        </router-link>

        <router-link to="/about">
            <button class="btn btn-primary">
                about
            </button>
        </router-link>

        <router-link v-if="!isLoggedIn" to="/login">
            <button class="btn btn-primary">
                login
            </button>
        </router-link>

        <router-link v-if="!isLoggedIn" to="/register">
            <button class="btn btn-primary">
                register
            </button>
        </router-link>
        
        <router-link v-if="isLoggedIn" to="/tests">
            <button class="btn btn-primary">
                Тесты
            </button>
        </router-link>

        <router-link v-if="isLoggedIn" to="/profile">
            <button class="btn btn-primary">
                profile
            </button>
        </router-link>

        <a class="" v-if="isLoggedIn" to="/logout">
            <button class="btn btn-primary" @click.prevent="logoutUser">
                logout
            </button>
        </a>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Navigation',
        computed: {
            ...mapGetters(['isLoggedIn'])
        },
        methods: {
            ...mapActions(['logout']),
            logoutUser() {
                this.logout()
            }
        }
    }
</script>
<style module>
div{
    height: 44px;
}
a{
    margin-top: 3px;
    margin-left: 15px;
}
</style>