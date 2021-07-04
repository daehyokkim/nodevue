<template>
    <div>

        <table>
            <tr>
                <th>글쓴이</th>
                <th>제목</th>
            </tr>
            <tr v-for="(item,index) in items" :key="index" @click="detail(index)">
                <td>{{item.writer}}{{index}}</td>
                <td>{{item.title}}</td>
            </tr>
        </table>
       
        <button @click="write()">글쓰기</button>
    </div>
</template>

<script>
import items from "@/data";
export default {
    data(){
        return{
            items : items
        }
    },
    methods: {
        write(){
            this.$router.push({
                path:"create"
            })
        },
        detail(index){
            this.$router.push({
                name:"Detail",
                params:{
                    contentId : index
                }
            })
        },
    },
}
</script>