import Vue from "vue";

Vue.directive("fontSize", {
    bind : function(el, binding){
        el.style.fontSize = binding.value  + "px";
    }
});