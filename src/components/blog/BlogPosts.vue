<template>
<div class="posts-container">
    <div class="blog-post">
        <div class="post-title">{{ post.post_title }}</div>
        <div class="author-category-date-container">
            <div class="author">
                <span class="post-views"
                    ><i class="fa-solid fa-at"></i> {{ post.post_author }}</span
                >
            </div>
            <div class="category">
                <span class="post-views"
                    ><i class="fa-solid fa-layer-group"></i> {{ post.post_category }}</span
                >
            </div>
            <div class="date">
                <div class="post-date">
                    <i class="fa-solid fa-calendar-days"></i> {{ post.post_date }}
                </div>
            </div>
        </div>
        <div class="post-content">
            {{ post.post_description | shorten }}
        </div>
    </div>
</div>
</template>

<script>


export default {
    name: "BlogPosts",
    props : ["post"],
    data: function () {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
.blog-post {
    text-align: left;
    padding: 10px;
    background-color: #fff;
    box-shadow:0 0 10px rgb(216, 216, 216);
    border-radius: 3px;
    margin:10px 0px 10px 0px;
    .post-title {
        font-size: 20px;
        font-weight: bold;
    }
    .author-category-date-container{
        overflow: hidden;
        color: #858585;
        font-size: small;
        margin: 5px 0px 20px 0px;
        .author {
            font-weight: bold;
        }
        .author,.category,.date{
            float:left;
        }
        .author,.category{
            border-right: 1px solid;
            padding-right: 10px;
        }
        .date,.category{
            padding-left: 10px;
        }
    }
    .post-content{
        font-size: 15px;
    }
}
</style>
