<template>
  <div class="computed">
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
      {{ nowDate }}
      <hr />
      <div class="demo-one">
        <div @click="changeData">{{ firstName }} {{ lastName }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'computedName',
  data() {
    return {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar'
    }
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    nowDate() {
      return Date.now()
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(value) {
        let names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    changeData() {
      this.firstName = 'John Doe'
      setTimeout(() => {
        this.firstName = 'Benjamin Joe'
      }, 500)
    }
  }
}
</script>
