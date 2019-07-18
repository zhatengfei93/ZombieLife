<template>
	<div class="">
		{{demo}}
		<com-c></com-c>
	</div>
</template>

<script>
	import ComC from './componentCat.vue'
    export default {
        name: 'componentBanana',
        
        mixins: [],

				inject: ['for'],
        
        components: {
            ComC
				},
        
        props: {},
        
        data () {
            return {
                demo: this.for
						}
        },
        
        computed: {},
        
        watch: {},
        
        created () {
        },
        
        mounted () {
        },
        
        destroyed () {
        },
        
        methods: {}
    }
</script>

<style scoped>

</style>