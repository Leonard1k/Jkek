<template>
    <div class="conteiner">
        <div class="row">
        <div class="col">
        </div>
        <div class="col-10">
             <br/>
        Имя: {{user.name}}
        <br/>
        Логин: {{user.username}}
        <br/>
        Почта: {{user.email}}
        <br/>
        Дата регистрации: {{user.date}}
        <br/>
        </div>
        <div class="col">
        </div>
        </div>
    </div>

   

</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'Profile',
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            ...mapActions(['getProfile'])
        },
        created() {
            this.getProfile();
        }
    }
</script>