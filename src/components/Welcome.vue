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
    };
  },
  methods: {
    enterChat() {
      return console.log(this.name);
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
</style>
