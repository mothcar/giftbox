<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="mt-2">
                <NoticeCard v-for="(row, i) in notice_datas"
                            :key="i"
                            :toChild="row"
                            @childs-event="showOneNotice"
                >
                </NoticeCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // import HelloWorld from '../components/HelloWorld'

    export default {
        name: 'Props',

        components: {
            NoticeCard: () => import("@/components/NoticeCard"),
        },

        data() {
            return{
                test : 'This is Props.....', 
                notice_datas: [
                    {
                        id: '0',
                        title: 'I am showed from Child',
                        date: '2021.11.08'
                    },
                    {
                        id: '1',
                        title: 'I am from Child too!!',
                        date: '2021.11.08'
                    },
                ],
            }
        }, 

        created() {

        }, // created() 

        mounted() {

        }, // mounted() 

        methods: {
            showOneNotice(val) {
                console.log('Val : ', val)
            }, //

        }, // methods 
    }
</script>
