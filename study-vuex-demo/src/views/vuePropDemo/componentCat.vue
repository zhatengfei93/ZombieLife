<template>
	<div class="">
		{{demo}}
	</div>
</template>

<script>
    export default {
        name: 'componentCat',

        inject: ['for'],
        
        mixins: [],
        
        components: {},
        
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