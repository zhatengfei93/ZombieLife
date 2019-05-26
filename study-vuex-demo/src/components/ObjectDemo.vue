<template>
  <div class="object-demo">
    {{ userProfile.name }}
    <template v-if="userProfile.age">
      <span>{{ userProfile.age }}</span>
    </template>
    <template v-if="userProfile.favoriteColor">
      <span>{{ userProfile.favoriteColor }}</span>
    </template>
    <button @click="handleAdd">add</button>
    <div class="demo-one">
      <li v-for="(n, index) in event(numbers)" :key="index">{{ n }}</li>
    </div>
  </div>
</template>
<script>
export default {
  name: 'objectDemo',
  data() {
    return {
      userProfile: {
        name: 'Anika'
      },
      numbers: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    handleAdd() {
      // this.$set(this.userProfile, 'age', 27)
      this.userProfile = Object.assign({}, this.userProfile, {
        age: 27,
        favoriteColor: 'Green'
      })
    },
    event(numbers) {
      return numbers.filter(number => {
        return number % 2 === 0
      })
    }
  }
}
</script>
