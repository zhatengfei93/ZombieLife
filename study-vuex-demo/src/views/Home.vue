<template>
  <div class="home">
    <div @click="handleToggle">
      <button>base demo</button>
    </div>
    <template v-if="toogleData">
      <span v-bind:title="message"
        >鼠标悬停几秒钟查看此处动态绑定的提示信息！</span
      ><br />
      <a v-on:[eventName]="dosomething">domething</a><br />
      <button
        @click.stop.prevent="warn('form cannot be submitted yet.', $event)"
      >
        Submit</button
      ><br />
      <input v-model.lazy="msg" /> {{ msg }} <br />
      <div :style="{ fontSize: postFontSize + 'px' }">
        <blog-post
          @enlarge-text="postFontSize += 1"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        ></blog-post>
      </div>
      <input :value="searchText" @input="searchText = $event.target.value" />
      {{ searchText }}
    </template>
    <router-link to="/computed">Go to computed</router-link><br />
    <router-link to="/arrayDemo">Go to arrayDemo</router-link><br />
    <router-link to="/objectDemo">Go to objectDemo</router-link><br />
    <router-link to="/formDemo">Go to formDemo</router-link><br />
    <router-link to="/nexttick">Go to NextTick</router-link><br />
    <hello-world v-model="inputValue"></hello-world><br />
    <base-input label="说明:" v-model="baseValues"></base-input>{{ baseValues }}
    <!-- <hallo :filteredTodos="posts">
      <template v-slot:todo="{ todo: item }">
        <span v-if="item.isComplate">✅</span>
        {{ item.title }}
      </template>
    </hallo> -->
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost'
import HelloWorld from '@/components/HelloWorld'
import BaseInput from '@/components/BaseInput'
// import Hallo from '@/components/Hallo'
export default {
  name: 'home',
  components: {
    BlogPost,
    HelloWorld,
    BaseInput
    // Hallo
  },
  data() {
    return {
      message: '页面加载于 ' + new Date().toLocaleString(),
      eventName: 'click',
      msg: 'you are pig',
      posts: [
        {
          id: '123',
          title: '体坛风云',
          content: '; and 1=1 and 1=2',
          isComplate: true
        },
        {
          id: '456',
          title: '监狱风云',
          content: 'and 0<(select count(*) from admin)'
        },
        {
          id: '789',
          title: '体坛风云',
          content: 'and 1=(select count(*) from admin where len(*)>0)'
        }
      ],
      postFontSize: 12,
      searchText: '',
      toogleData: false,
      inputValue: '',
      baseValues: 'base'
    }
  },
  created() {
    console.log(this.toogleData)
  },
  methods: {
    dosomething() {
      console.log('1111')
    },
    warn(message, event) {
      console.log(event)
      alert(message)
    },
    handleToggle() {
      this.toogleData = this.toogleData ? false : true
      console.log(this.toogleData)
    }
  }
}
</script>
