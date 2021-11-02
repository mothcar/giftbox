<template>
    <v-container>
        <v-row>
            <v-col>
                This is Watch Test
            </v-col>
        </v-row>

        <!-- <v-row>
            <v-col>
                and Rules
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                and Rules
            </v-col>
        </v-row> -->

        <v-row class="d-flex flex-column mb-6">
            <v-container>
                <v-card flat min-height="30">and input Rules</v-card>
                <v-card flat min-height="30"> 
                    <v-card-title>Conclusion :</v-card-title>
                    <!-- <v-card-subtitle>subtitle :</v-card-subtitle> -->
                    <v-card-text>1. It must be a <span class="font-weight-bold">DATA</span></v-card-text>
                    <v-card-text>2. It must implement with <span class="font-weight-bold">METHOD</span> in watch </v-card-text>
                </v-card>
            </v-container>
        </v-row>

        <v-row>
            <v-col>
                <!-- <v-input
                    error-count="2"
                    :error-messages="['Fatal error', 'Another error']"
                    error
                    v-model="inputData"
                >
                    Input
                </v-input> -->
                <v-text-field
                    label="Watch test for here"
                    :rules="rules"
                    hide-details="auto"
                    v-model="inputData"
                    ></v-text-field>
            </v-col>
        </v-row>




        <!-- End ********************************************** -->
        <v-row>
            <v-col>
                <v-btn
                elevation="2"
                @click="goBack"
                >Back</v-btn>
            </v-col>
        </v-row>
        <!-- End ********************************************** -->
        

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
                inputData: 'If you test here',
                rules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 3) || 'Min 3 characters',
                ],
            }
        }, 

        watch: {
            inputData(newVal, oldVal){
                console.log(`New is ${newVal} , and old is ${oldVal} `)
            },
        }, // watch

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
