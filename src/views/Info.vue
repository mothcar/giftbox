<template>
    <v-container>
        <v-row>
            <v-col>
                This is My Info
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-btn
                elevation="2"
                @click="goBack"
                >Back</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'Contact',

        components: {
        },

        data() {
            return{
                test : 'This is test.....', 
            }
        }, 

        created() {

        }, // created() 

        mounted() {

        }, // mounted() 

        methods: {
            goBack() {
                // this.$router.push('/')
                this.$router.go(-1)
                console.log('Go Back....')
            }, 

        }, // methods 
    }
</script>
