<template>
    <div class="blog">
        <div class="container" style="margin-top:20px;">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area" v-if="posts.length">
                        <blog-posts  v-for="post in posts" :post="post" :key="post.id"  />
                    </div>
                    <div v-else>
                        There are no posts.
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <h2>Add new blog post</h2>
                        <add-post @postAdded="reload()" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BlogPosts from "@/components/blog/BlogPosts.vue";
import AddPost from "@/components/blog/AddPost.vue";

export default {
    name: "Blog",
    components : {
        BlogPosts,
        AddPost
    },
    data: function () {
        return {
            posts : this.getBlogPosts(),
        };
    },
    methods : {
        getBlogPosts : function(){
            var posts = [];
            var postsDataSet = localStorage.getItem("BlogPosts");
            if(postsDataSet){
                posts = JSON.parse(postsDataSet);
            }
            return posts;
        },
        reload : function(){
            this.posts = this.getBlogPosts();
        }
    },
};
</script>
