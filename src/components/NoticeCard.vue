<template>
    <v-card class="notice_card pa-3" @click="detailEvent">
        <v-col cols="12">
            <h6 class="notice_title font-weight-regular ellipsis">
                {{ toChild.title }}
            </h6>
            <span class="reg_date grey--text">
                {{ toChild.date}}
            </span>
        </v-col>
    </v-card>
</template>

<script>
    export default {
        name: "giftcard",
        props: {
            toChild: {
                type: Object,
                require: false
            }
        },
        methods:{
            formatPrice(value) {
                try {
                    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+'원';
                }
                catch{
                    return value+'원';
                }
            },
            detailEvent(){
                this.$emit('childs-event', this.$props.toChild.id);
            }
        }
    }
</script>

<style lang="scss">
    .notice_title{
        font-size: 0.825rem;
        letter-spacing: -0.05em;
    }
    .reg_date{
        font-size: 0.7rem;
        letter-spacing: -0.03em;
    }
    .notice_card{
        border-bottom: .8px solid rgb(0 0 0 / 12%) !important;
    }
    .ellipsis{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<style lang="scss" scoped>
    .v-sheet.v-card:not(.v-sheet--outlined) {
        box-shadow: none !important;
    }
    .v-sheet.v-card{
        border-radius: initial !important;
    }
</style>