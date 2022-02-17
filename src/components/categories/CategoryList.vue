<template>
    <div class="category-list">
        <div
            class="category"
            v-for="category in categoriesList"
            :key="category.name"
            :category="category">
            <span class="category-name">{{ category.name }}</span>
            <span class="category-delete" @click="deleteCategory(category.name)">
                <i class="fa-regular fa-trash-can"></i>
            </span>
        </div>
    </div>
</template>

<script>


import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";

export default {
    name: "categoryList",
    props: ["reload"],
    data: function () {
        return {
            categoriesList: [],
        };
    },
    watch: {
        reload: function () {
            debugger
            this.init();
        },
    },
    methods: {
        init: function () {
            var categories = localStorage.getItem("categories");
            if (categories && categories.length) {
                this.categoriesList = JSON.parse(categories);
            }
        },
        deleteCategory : function(name){
            var categories = localStorage.getItem("categories");
            if(categories && categories.length){
                categories = JSON.parse(categories);
                var categoryIndex = categories.findIndex(c => c.name.toLowerCase() == name.toLowerCase());
                categories.splice(categoryIndex, 1);
                localStorage.setItem("categories", JSON.stringify(categories));

                toastr.success('Category deleted successfully', 'Success')
                this.$emit("categoryDeleted");
            }
        },
    },
    created: function () {
        this.init();
    },
};
</script>

<style lang="scss" scoped>
.category-list {
    overflow: hidden;
    .category {
        float: left;
        box-shadow: 0 0 10px rgb(216, 216, 216);
        border-radius: 3px;
        margin: 10px 10px 10px 0;
        background-color: #fff;
        padding: 10px;
        overflow: hidden;
        min-width: 100px;
        .category-name {
            font-size: 15px;
            padding-right: 15px;
            float: left;
        }
        .category-delete {
            color: red;
            font-size: smaller;
            float: right;
            cursor: pointer;
        }
    }
}
</style>
