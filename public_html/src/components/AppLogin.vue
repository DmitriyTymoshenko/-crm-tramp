<template lang="pug">
    #user_login
        form#regForm.d-flex.flex-column(v-on:submit.prevent='onSubmit')

            .form-group.d-flex.flex-column.align-center
                label(for='login') Login
                input#login.form-control.p-2(type='text',
                aria-describedby='emailHelp',
                placeholder='Enter login',
                v-model='login')
            .form-group.d-flex.flex-column
                label(for='password') Password
                input#password.form-control(type='password',
                placeholder='Password',
                v-model='password'
                )
            router-view
            router-link(to='/Home')
                v-btn.btn.primary(type='submit')
</template>
<script>
    export default {
        data(){
            return {
                login : '',
                password : '',
                projectId : 11,
                url : 'http://192.168.0.138:8080/api/v1/auth/login',
                link : '/Home'
            }
        },
        methods : {
            onSubmit(){
                this.axios.post(this.url , {
                    login : this.login,
                    password : this.password,
                    projectId : this.projectId
                })


            }
        }
    }
</script>
<style lang="sass" scoped>
    #user_login
        width: 100%
        height: 100vh
        display: flex
        justify-content: center
        align-items: center
        #regForm
            border: 1px solid #e2e2e2
            border-radius: 8px
            padding: 20px
            min-width: 320px
            flex-direction: column
            text-align: center
            font-size: 20px
            .form-group
                flex-direction: column
                text-align: center
                padding: 10px 0
                input
                    border : 1px solid lightblue
                    width:  100%
                    padding : 10px
                    margin : 5px 0
                    border-radius: 5px
                    ::placeholder
                        text-align: center
            .btn
                width: 100%
                margin: 15px 0
                font-size: 20px
                border: none
                outline: none

</style>