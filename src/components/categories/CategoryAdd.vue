<template>
    <div class="category-add container">
        <form @submit.prevent="addCategory">
            <div class="form-group">
                <label>Category Name <span style="color:red;">*</span></label>
                <input type="text" class="form-control" @keyup="isValid()" v-model="categoryName" />
                <span style="color:red;font-size:small;float:left;" v-show="showErrorMsg" v-text="validationMessage"></span>
            </div>
            <button class="btn btn-primary">Add</button>
        </form>
    </div>
</template>

<script>

import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";


export default {
    name : "categoryAdd",
    data : function(){
        return {
            categoryName : "",
            showErrorMsg : false,
            validationMessage : "",
        };
    },
    methods : {
        addCategory : function(){
            if(!this.isValid()){
                this.showErrorMsg = true;
                return;
            }

            var categoryObj = {
                name : this.categoryName,
            };

            var currentCategories = localStorage.getItem("categories");
            if(currentCategories){
                currentCategories = JSON.parse(currentCategories);
                currentCategories.push(categoryObj);
            }
            else{
                currentCategories = [categoryObj];
            }
            localStorage.setItem("categories", JSON.stringify(currentCategories));     
            toastr.success('Category added successfully', 'Success')
            this.reset();
            this.$emit("categoryAdded","someValue");

        },
        isValid : function(){
            var categoryName = this.categoryName;
            this.validationMessage = "";
            if(!categoryName || !categoryName.trim()){
                this.validationMessage = "Category name can not be empty or white space.";
                this.showErrorMsg = true;
                return false;
            }
            return true;
        },
        reset : function(){
            this.categoryName = "";
        },
    },
};

</script>

<style lang="scss" scoped>
    label,button{
        margin : 10px 0 10px 0;
    }
    label{
        float: left;
    }
    button{
        float:right;
    }
</style>