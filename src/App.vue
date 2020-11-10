<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>>
  <router-view/>
</template>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  display: block;
  width: 100%;
  height: 100%;
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color:  $color1;
  }
}
</style>
