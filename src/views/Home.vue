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

        <v-row class="d-flex ml-0 mb-2" > 
            <v-btn
            elevation="2"
            @click="goSlot"
            >Slot</v-btn>
        </v-row>

        <v-row class="d-flex ml-0 mb-2" > 
            <v-btn
            elevation="2"
            @click="goKey"
            >Firebase</v-btn>
        </v-row>

        <v-row class="d-flex ml-0 mb-2" > 
            <v-btn
            elevation="2"
            @click="goProps"
            >Props</v-btn>
        </v-row>

        <v-row class="d-flex ml-0 mb-2" > 
            <v-btn
            elevation="2"
            @click="getDataByAxios"
            >Get by Axios</v-btn>
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

            goSlot() {
                this.$router.push('/slotPaul').catch(()=>{})
                console.log('Go Slot ....')
            }, 

            goKey() {
                this.$router.push('/keyPaul').catch(()=>{})
                console.log('Go Key ....')
            }, 

            goProps() {
                this.$router.push('/goProps').catch(()=>{})
                console.log('Go Props ....')
            }, 

            async getDataByAxios() {
                // this.$router.push('/goProps').catch(()=>{})
                // this.$axios.get('https://fakestoreapi.com/products')
                // .then(function(response) {
                // console.log(response);
                // })
                // .catch(function(error) {
                // console.log(error);
                // });
                // console.log('Go Axios ....')
                let url = 'https://fakestoreapi.com/products'
                let response = await fetch(url);

                if (response.ok) { // HTTP 상태 코드가 200~299일 경우
                    // 응답 몬문을 받습니다(관련 메서드는 아래에서 설명).
                    let json = await response.json();
                    console.log('return : ', json)
                } else {
                alert("HTTP-Error: " + response.status);
                }
            }, 

        }, // methods 
    }
</script>
