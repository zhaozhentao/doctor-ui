<template>
  <div>
    <div class="navbar navbar-default topnav">
      <div class="container">
        <div class="navbar-header">
          <router-link :to="'/'" class="navbar-brand">
            Doctor
          </router-link>
        </div>
      </div>
    </div>

    <div class="container content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  @import "~bootstrap-sass/assets/stylesheets/_bootstrap";

  body {
    background: #eee;
  }

  .navbar {
    background-color: #fff;
    border: 0;
    margin-bottom: 0;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 0;
  }

  .content {
    padding-top: 20px;
  }

  .van-skeleton {
    margin: 20px;
  }

  a {
    text-decoration: none !important;
  }
</style>
