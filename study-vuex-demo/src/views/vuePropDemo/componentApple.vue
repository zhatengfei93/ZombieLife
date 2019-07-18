<template>
	<div class="">
		<com-b></com-b>
	</div>
</template>

<script>
	import comB from './componentBanana.vue'
    export default {
        name: 'componentApple',
        
        mixins: [],

				provide: {
            for: 'demo'
				},
        
        components: {
            comB
				},
        
        props: {},
        
        data () {
            return {}
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