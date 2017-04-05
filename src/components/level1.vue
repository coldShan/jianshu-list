<template>
    <div>
        <div class="menu-left fl">
            <div class="to-home"><a href="/">重置</a></div>
            <div class="add-folder" @click="addFolder"><i></i>新建文集</div>
            <div class="folder-list">
                <ul>
                    <li v-for="(folder, index) in folders" @click="toFolder"><router-link :to="'/folder' + (index + 1)">{{folder.name}}</router-link></li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Folder1 from './folder1'
    import Article1 from './article'
    export default {
        name: 'level1',
        data () {
            return {
                folders: [
                    {name: '我的文集一'},
                    {name: '我的文集二'},
                    {name: '我的文集三'}
                ]
            }
        },
        methods: {
            addFolder () {
                console.log('新建文集')
            },
            toFolder () {
                
            }
        },
        components: {
            Folder1,
            Article1
        }
    }
</script>

<style scoped>
    a {
        color: #fff;
        margin-left: 30px;
    }
    .to-home, .add-folder, .menu-left .img {
        text-align: center;
    }
    .menu-left .img {
        width: 220px;
        height: 50px;
    }
    .menu-left img {
        width: 50px;
        height: 50px;
    }
    .menu-left {
        width: 220px;
        height: 985px;
        background: #3f3f3f;
        color: #fff;
    }
    .menu-left li {
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
    }
    .menu-left li:hover {
        background: #646464;
    }
</style>