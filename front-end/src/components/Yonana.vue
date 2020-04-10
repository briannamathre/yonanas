<template>
<div class="wrapper">
  <div class="yonanas">
    <div class="yonana" v-for="item in yonanas" :key="item.id">
      <div class="title">
        <h1>{{item.name}}</h1>
      </div>
      <div class ="bar">
        <div class="image">
          <img :src="'/images/yonanas/'+item.image">
        </div>
        <div class = "ingredients">
        <p>Ingredients</p>
        <li> {{item.ingredients}} </li>
      </div>
      </div>
      <div class = "otherStuff">
        <p>Directions</p>
        <li> {{item.directions}} </li>
      </div>
      <button class="auto" v-on:click="upload(item)">Add to Favorites</button>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Yonana',
  props: {
    yonanas: Array
  },
  data() {
    return {
      items: 0,
      file: null,
      additem: null,
    }
  },
  computed: {
  },
  methods: {
    async upload(item) {
      try {
        //how to I get the image as file?
        let r2 = await axios.post('/api/items', {
          title: item.name,
          creator: item.creator,
          ingredients: item.ingredients,
          directions: item.directions,
          path: '/images/yonanas/'+item.image,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.thing{
  display: flex;
  justify-content: center;
}
.yonanas {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.yonana {
  margin: 8px;
  margin-top: 50px;
  width: 400px;
  border: 5px solid #gray;
  border-style: double;
  background-color: #f5faf5;
  position:relative;
}
.otherStuff{
  width: 390px;
  list-style-type: none;
  padding-bottom: 50px;
  margin-left: 12px;
}
.otherStuff li {
  width: auto;
    list-style-type: none;
    display: flex;
    font-family: 'Lora', serif;
    flex-wrap: wrap;
    margin: 5px;
    padding: 15px;
}
li{
  width: 180px;
  font-family: 'Lora', serif;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
  padding: 2px;
  justify-content: space-around;
}
.image img {
  border: 2px solid gray;
  height: 200px;
  width: 160px;
  object-fit: cover;
}

.image {
  display: flex;
  justify-content: left;
  flex-wrap:wrap;
  margin-bottom: 5px;
}

.info{
  width: 210px;
  margin-left: 5px;
}

.bar{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #f5faf5;
  margin: 3px;
}
.ingredients {
  padding-left: 4px;
  text-align: right;
  width: 200px;
}
.ingredients p{
  text-align: center;
  padding-left: 10px;
  width: 180px;
  font-size: 20px;
  border-bottom: 2px solid gray;
  font-family: 'Fredericka the Great', cursive;
}
.otherStuff p{
  text-align: center;
  padding-left: 15px;
  font-size: 20px;
  width: 360px;
  border-bottom: 2px solid gray;
  font-family: 'Fredericka the Great', cursive;
}

.title h1 {
  width: 388px;
  text-align: center;
  font-size: 35px;
  margin-left: 1px;
  margin-right: 1px;
  background-color:white;
  border-top: 1px solid gray;
  border-bottom: 2px solid gray;
  font-family: 'Fredericka the Great', cursive;
}

.title h2 {
  font-size: 14px;
}

.title{
  display: flex;
  justify-content: center;
}


.price {
  display: flex;
}

button {
  height: 40px;
  width: auto;
  background:white ;
  color: black;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  margin-top:5px;
  font-family:'Lora', serif;
  font-size: 16px;
  float:right;
  position:absolute;
  bottom:0;
  justify-content: center;
}

.auto {
  margin-left: auto;
}
</style>
