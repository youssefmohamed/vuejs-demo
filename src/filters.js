import Vue from "vue";

Vue.filter("shorten", function(value){
    if(value.length <= 200)
        return value;
    return value.substring(0,200) + "...";
});