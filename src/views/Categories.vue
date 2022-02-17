<template>
    <div class="blog container">
        <vue-modal-2 name="modal-1" @on-close="close" modalSize="md" noFooter :headerOptions="{title:'Add Category'}">
            <category-add @categoryAdded="reloadCategories()"  />
        </vue-modal-2>
        <div class="category-list-container">
            <a href="#" @click="open()">Add Category <i class="fa-regular fa-plus"></i></a>
            <category-list style="float:left;width:100%;" @categoryDeleted="reloadCategories()" :reload="reload" />
        </div>
    </div>
</template>

<script>

import CategoryAdd from "@/components/categories/CategoryAdd.vue";
import CategoryList from "@/components/categories/CategoryList.vue";

export default {
    name: "Categories",
    components: {
        CategoryAdd,
        CategoryList,
    },
    data: function () {
        return {
            showAddPopupt: false,
            reload:false,
        };
    },
    methods: {
       open() {
            this.$vm2.open("modal-1");
        },
        close() {
            this.$vm2.close("modal-1");
        },
        reloadCategories : function(){
            this.close();
            this.reload = true;
        }
    },
};
</script>

<style lang="scss" scoped>
.container{
    margin-top : 10px;
}
.category-list-container{
    overflow: hidden;
    a{
        float: left;
        font-size: small;
        margin-top: 15px;
    }
}
</style>