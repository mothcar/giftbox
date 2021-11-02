<template>
    <v-container>
        <v-row> 
            <v-col>
                <v-btn
                elevation="2"
                @click="goHome"
                >Home</v-btn>
            </v-col>
        </v-row>

        <v-row> 
            <v-col>
                <v-btn
                elevation="2"
                @click="goSell"
                >Sell</v-btn>
            </v-col>
        </v-row>

        <v-row> 
            <v-col>
                <v-btn
                elevation="2"
                @click="goContact"
                >Contact</v-btn>
            </v-col>
        </v-row>

        <v-row> 
            <v-col>
                <v-btn
                elevation="2"
                @click="goInfo"
                >MyInfo</v-btn>
            </v-col>
        </v-row>

        <v-row> 
            <v-col>
                <v-btn
                elevation="2"
                @click="goWatch"
                >Watch</v-btn>
            </v-col>
        </v-row>



    </v-container>
</template>

<script>
    // import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'Home',

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
            goHome() {
                this.$router.push('/').catch(()=>{})
                console.log('Go Home ....')
            }, 

            goSell() {
                this.$router.push('/sell').catch(()=>{})
                console.log('Go Sell ....')
            }, 

            goContact() {
                this.$router.push('/contact').catch(()=>{})
                console.log('Go Contact ....')
            }, 

            goInfo() {
                this.$router.push('/info').catch(()=>{})
                console.log('Go Info ....')
            }, 

            goWatch() {
                this.$router.push('/watch').catch(()=>{})
                console.log('Go Info ....')
            }, 

        }, // methods 
    }
</script>
