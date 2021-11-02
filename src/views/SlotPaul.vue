<template>
    <v-container>
        <v-row>
            <v-col>
                This is Slot
            </v-col>
        </v-row>

        <v-row>
            <ListSlot>
                <template v-slot:slotOne>
                    Here You can change child data
                </template>

                <template #slotTwo>
                    This is Slot
                </template>
            </ListSlot>
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
    import ListSlot from '../components/ListItem'

    export default {
        name: 'SlotPaul',

        components: {
            ListSlot,
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
