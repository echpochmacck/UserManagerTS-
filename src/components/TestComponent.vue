<script setup lang="ts">
interface Props {
  test: string,
  id: string
}

const {test = "default value"} = defineProps<Props>()


</script>

<template>
  <div class="my-class">
    <div class="test-text">
      {{ test }}
    </div>
    <div class="id-test">
      {{ id }}
    </div>
  </div>
</template>

<style scoped>
my-class {
  background-color: blue;
}
</style>