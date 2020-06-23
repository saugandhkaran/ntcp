<template>
  <div class="header">
    <div class="flex-container between">
      <div class="flex-container brand-banner" @click="goToPage()">
        <div>
          <img class="brand" src="../assets/jh_logo.png" />
        </div>
        <div>
        <h3>NTCP</h3><p>Government of Jharkhand</p>
        </div>
      </div>
      <div class="menu-items flex-container main">
        <p>Login</p>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blogs</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Header',
  components: {
    
  },
  data () {
    return {
      districts : []
    }
  },
  methods: {
    goToPage () {
      this.$router.push(`/`)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid grey;
  text-align: left;
  padding: 0px 10px;
}
.brand-banner {
  cursor: pointer;
  .brand {
    width: 50px;
    margin-right: 10px;
  }
}

.menu-items {
  p {
    margin-right: 10px;
    padding: 10px 0px;
  }
}

@media screen and (max-width: 508px){
  .main {
    justify-content: space-around;
    width: 100%;
  }
}
</style>