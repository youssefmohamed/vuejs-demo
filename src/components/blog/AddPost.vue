<template>
    <div class="container">
        <form @submit.prevent="submitPost">
            <div class="form-group">
                <label for="">Title</label>
                <input type="text" class="form-control" v-model="post.post_title" @keyup="validate()">
                <span class="error" v-show="!validationData.title.isValid">{{validationData.title.msg}}</span>
            </div>
            <div class="form-group">
                <label for="">Author</label>
                <input type="text" class="form-control" v-model="post.post_author" @keyup="validate()">
                <span class="error" v-show="!validationData.author.isValid">{{validationData.author.msg}}</span>
            </div>
            <div class="form-group">
                <label for="">Category</label>
                <select name="" id="" class="form-control" v-model="post.post_category" @change="validate()">
                    <option value="" disabled>Select category</option>
                    <option v-for="category in categories" :key="category.name" :value="category.name" >{{category.name}}</option>
                </select>
                <span class="error" v-show="!validationData.category.isValid">{{validationData.category.msg}}</span>
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <textarea class="form-control" v-model="post.post_description" @keyup="validate()"></textarea>
                <span class="error" v-show="!validationData.description.isValid">{{validationData.description.msg}}</span>
            </div>
            <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";

export default {
    name : "addPost",
    data : function(){
        return {
            post : {
                post_category : "",
                post_date : new Date().toLocaleDateString(),
            },
            categories : this.getGategories(),
            validationData : {
                title : {
                    isValid : true,
                    msg : "",
                },
                author : {
                    isValid : true,
                    msg : "",
                },
                category : {
                    isValid : true,
                    msg : "",
                },
                description : {
                    isValid : true,
                    msg : "",
                },
            },
        };
    },
    methods : {
        submitPost : function(){
            if(!this.validate()){
                return ;
            }

            var posts = [];
            var currentPosts = localStorage.getItem("BlogPosts");
            if(currentPosts){
                posts = JSON.parse(currentPosts);
            }
            posts.push(this.post);

            localStorage.setItem("BlogPosts", JSON.stringify(posts));
            toastr.success('Post added successfully', 'Success')
            this.reset();
            this.$emit("postAdded");
        },
        validate : function(){
            var retBool = true;
            if(!this.post.post_title || !this.post.post_title.trim()){
                this.validationData.title.isValid = false;
                this.validationData.title.msg = "post title can not be empty";
                retBool &= false;
            }
            else{
                this.validationData.title.isValid = true;
                this.validationData.title.msg = "";
            }

            if(!this.post.post_author || !this.post.post_author.trim()){
                this.validationData.author.isValid = false;
                this.validationData.author.msg = "post author can not be empty";
                retBool &= false;
            }
            else{
                this.validationData.author.isValid = true;
                this.validationData.author.msg = "";
            }

            if(!this.post.post_category || !this.post.post_category.trim()){
                this.validationData.category.isValid = false;
                this.validationData.category.msg = "post category can not be empty";
                retBool &= false;
            }
            else{
                this.validationData.category.isValid = true;
                this.validationData.category.msg = "";
            }

            if(!this.post.post_description || !this.post.post_description.trim()){
                this.validationData.description.isValid = false;
                this.validationData.description.msg = "post description can not be empty";
                retBool &= false;
            }
            else{
                this.validationData.description.isValid = true;
                this.validationData.description.msg = "";
            }

            return retBool;
        },
        getGategories : function(){
            var categories = [];
            var categoriesDataSet = localStorage.getItem("categories");
            if(categoriesDataSet){
                categories = JSON.parse(categoriesDataSet);
            }
            return categories;
        },
        reset : function (){
            this.post = {
                post_category : "",
                post_date : new Date().toLocaleDateString(),
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.form-group{
    margin-bottom: 10px;
    overflow: hidden;
    label{
        float: left;
    }
}
button{
    float: right;
}
.error{
    color:red;
    font-size: small;
    float: left;
}
</style>
