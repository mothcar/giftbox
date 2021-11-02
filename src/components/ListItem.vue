<template>
    <v-container>
        <v-row class="d-flex flex-column">
            <v-col>
                <slot name="slotOne">This is slot One</slot>
            </v-col>
            <v-col>
                <slot name="slotTwo">This is slot Two</slot>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'ListItem',

        components: {
        },

        data() {
            return{
                test : 'This is ListItem.....', 
            }
        }, 

        created() {

        }, // created() 

        mounted() {

        }, // mounted() 

        methods: {

        }, // methods 
    }
</script>
