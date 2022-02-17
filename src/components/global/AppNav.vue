<template>
    <div class="app-nav">
        <div class="logo">Youssef Mohamed</div>
        <ul id="nav">
            <router-link to="/" tag="li" exact="">
                <a>Blog</a>
            </router-link>
            <router-link to="/categories" tag="li">
                <a>Categories</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppNav",
};
</script>

<style lang="scss" scoped>
.app-nav {
    background-color: #333;
    color: #fff;
    overflow: hidden;
    .logo {
        float: left;
        font-size: 24px;
        padding: 20px;
        width: 300px;
    }
    ul {
        margin:0px;
        list-style: none;
        float: left;
        width: calc(100% - 300px);
        li {
            padding: 24px;
            float: left;
        }
        a {
            color: #fff;
            text-decoration: none;
        }
        .router-link-exact-active {
            text-decoration: underline;
        }
    }
}
</style>
