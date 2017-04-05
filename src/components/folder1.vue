<template>
    <div>
        <div class="menu-mid fl">
            <div class="add-article" @click="addArticle"><i></i>新建文章</div>
            <div class="article-list">
                <ul>
                    <li class="article-name" v-for="(item, index) in items"><router-link :to="'/folder1/article' + (index + 1)"> {{ item.name }}</router-link></li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>    
</template>

<script>
    export default {
        name: 'folder1',
        data () {
            return {
                items: [
                    {name:'文集一我的文章一'},
                    {name:'文集一我的文章二'}
                ]
            }
        },
        components: {
        },
        methods: {
            addArticle () {
                console.log('新建文章')
            },
            toArticle (index) {

            }
        }
    }
</script>

<style scoped>
    a {
        color: #333;
        margin-left: 30px;
    }
    .menu-mid {
        height: 985px;
        width:320px;
    }

    .menu-mid .article-name {
        box-sizing: border-box;
        width: 320px;
        height: 80px;
        line-height: 80px;
        font-size: 20px;
        border-top: 1px solid #dcdcdc;
    }
    .menu-mid .article-name:hover {
        background:#ececec;
    }
</style>