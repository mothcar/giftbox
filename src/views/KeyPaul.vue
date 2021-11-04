<template>
    <v-container>
        <v-row>
            <v-col>
            </v-col>
        </v-row>

        <v-row>
            <v-card flat>
                <v-card-title>Firebase Store</v-card-title>
                <v-card-text>
                    prepare : $ npm install firebase vuefire
                </v-card-text>
                <v-card-text>
                    1. Create firebase project - "Vue Key"
                </v-card-text>
                    
                <v-card-text>
                    2. Set in Firebase / Firestore Database / Start in Test Mode 
                </v-card-text>
                
                <v-card-text>
                    3. Set in Project Overview / Select Web     
                </v-card-text>

                <v-card-text>
                    4. Follow this Tut : <a href="https://www.youtube.com/watch?v=Htt8AKeF1Kw">Tut</a> / <a href="https://github.com/codingwithjustin/vue-firebase-crud">Source</a> 
                </v-card-text>

                <v-card-text>
                    5. change package.json firebase version : "firebase": "7.13.1"
                </v-card-text>
            </v-card>
        </v-row>

        <v-row class="ma-2">
            <v-text-field
                label="Insert to DB"
                hide-details="auto"
                v-model="name"
                ></v-text-field>

            <v-btn @click="submitName">Add</v-btn>
        </v-row>

        <v-row>
            {{ names }}
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
    // import {db} from '../firebase/db'
    // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
    import {createUser, useLoadUsers} from '@/firebase'

    export default {
        name: 'KeyPayl',

        components: {
        },

        data() {
            return{
                name : null, 
                names : null,
            }
        }, 

        watch: {
            names(newVal, oldVal) {
                console.log(`New : ${newVal}, old : ${oldVal}`)
            }, // names
        },

        async created() {
            const users = await useLoadUsers()
            console.log('All users : ', users)

        }, // created() 

        mounted() {
            
        }, // mounted() 

        methods: {
            goBack() {
                // this.$router.push('/')
                this.$router.go(-1)
                console.log('Go Back....')
            }, 

            

            async submitName() {
                // db.collection('names').add({name:this.name})
                // console.log('start...')
                // const citiesCol = collection(db, 'names');
                // const data = citiesCol.docs
                // console.log('data : ', data)

                // const res = await db.collection('names').add('paul');
                await createUser({name:this.name})
                this.name = null

                // async function getCities(db) {
                //     const citiesCol = collection(db, 'names');
                //     const citySnapshot = await getDocs(citiesCol);
                //     const cityList = citySnapshot.docs.map(doc => doc.data());
                //     return cityList;
                // }

                // console.log('city : ', await getCities(db))
                // console.log('city : ', res)
                
                //   const citySnapshot = await getDocs(citiesCol);
            },

        }, // methods 
        firebase : {
            names : useLoadUsers()
        }
    }
</script>
