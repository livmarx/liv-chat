<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">
        New Message (enter to add)
      </label>
      <p v-if="feedback" class="feedback">{{feedback}}</p>
      <input type="text" name="new-message" v-model="newMessage">
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init';
export default {
  name: 'NewMessage',
  props: ['name'],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      console.log(this.name, ': ', this.newMessage, Date.now());
      if (this.newMessage) {
        db
          .collection('messages')
          .add({
            name: this.name,
            content: this.newMessage,
            timestamp: Date.now(),
          })
          .catch(err => {
            console.error(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = 'Must enter a message';
      }
    },
  },
};
</script>

<style>
</style>
