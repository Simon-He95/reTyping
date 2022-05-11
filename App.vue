<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark();
function toggleDark() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <nav class="nav" :style="isDark ? 'color:rgb(229, 231, 235)' : 'rgb(55, 65, 81)'">
    <div class="right">
      <a href="https://github.com/Simon-He95/reTyping" target="_blank" title="GitHub">
        <span class="iconify-inline" data-icon="uil:github-alt"></span>
      </a>
      <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
        <span v-show="isDark">
          <span class="iconify-inline" data-icon="ri:moon-line"></span>
        </span>
        <span v-show="!isDark">
          <span class="iconify-inline" data-icon="ri:sun-line"></span>
        </span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
