<template>
  <div class="chat contaier">
    <h2 class="center-align teal-text">
      Chat {{this.name}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {};
  },
};
</script>

<style>
</style>
