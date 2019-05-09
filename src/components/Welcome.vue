<template>
  <div class="welcome container">
   <h1 class="center-align">Liv Chat App</h1>
   <div class="card">
     <div class="card-content center-align">
       <h2 class="teal-text">
         Welcome
       </h2>
       <form @submit.prevent="enterChat">
         <label for="name">Enter your name:</label>
         <input type="text" name="name" v-model="name">
         <p v-if="feedback" class="feedback">{{this.feedback}}</p>
         <button class="btn teal">Enter Chat</button>
       </form>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name } });
      } else {
        this.feedback = 'Must enter a name to join ';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.welcome {
  max-width: 400px;
}
h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px;
}
.feedback {
  color: red;
}
</style>
