<template>
	<transition>
		<slot></slot>
	</transition>
</template>

<script>
  export default {
    name: 'TransitionFade'
  }
</script>

<style lang="stylus" scoped>
	.v-enter, .v-leave-to
		opacity: 0
	.v-enter-active, .v-leave-active
		transition: opacity .4s
</style>
