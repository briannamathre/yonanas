<template>
<div class="admin">
  <h1>Customize Your Yonana Recipes</h1>
   <div class="heading">
   </div>
   <div class="add">
     <h2>Add your own recipe</h2>
     <div class="form">
       <input v-model="title" placeholder="Title">
       <p></p>
       <input v-model="creator" placeholder="Creator">
       <p></p>
       <textarea v-model="ingredients" placeholder="List the Ingredients"></textarea>
       <p></p>
       <textarea v-model="directions" placeholder="List the Directions"></textarea>
       <p></p>
       <input type="file" name="photo" @change="fileChanged">
       <button @click="upload">Upload</button>
     </div>
     <div class="upload" v-if="addItem">
       <p>{{addItem.title}}</p>
       <p>{{addItem.creator}}</p>
       <p>{{addItem.ingredients}}</p>
       <p>{{addItem.directions}}</p>
       <img :src="addItem.path" />
     </div>
   </div>
   <div class="edit">
     <h2> Edit/Delete from your Favorites </h2>
     <div class="form2">
       <div class = "searchh">
         <input v-model="findTitle" placeholder="Search">
      </div>
       <div class = "suggestions">
         <div class="suggestion" v-for="y in yonanas" :key="y.id" @click="selectItem(y)">{{y.title}}
       </div>
     </div>
     </div>
      <div class="upload" v-if="findItem">
          <p>Name of Recipe: <input v-model="findItem.title"></p>

        <p>Name of Creator: <input v-model="findItem.creator"></p>
        <p>Ingredients: <textarea v-model="findItem.ingredients"></textarea></p>
        <p> Directions: <textarea v-model="findItem.directions"></textarea></p>

        <p></p>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
</div>

</template>
<style>
h1{
  width: auto;
  text-align: center;
  font-size: 35px;
  margin-left: 1px;
  margin-right: 1px;
  background-color:white;
  border-top: 1px solid gray;
  border-bottom: 2px solid gray;
  font-family: 'Fredericka the Great', cursive;
}
h2{
  width: auto;
  text-align: center;
  font-size: 28px;
  font-family: 'Fredericka the Great', cursive;
}
.form2{
  float:center;
  margin-bottom: 15px;
}
.upload{
  border-top: 1px solid gray;
  padding-top: 10px;
}
.textarea{
  width: 400px;
}
.upload img{
  border: 2px solid gray;
  height: 200px;
  width: 160px;
  object-fit: cover;
  padding: 2px;
}
.add img{
  border: 2px solid gray;
  height: 200px;
  width: 160px;
  object-fit: cover;
  padding: 2px;
}
.add {
  width:auto;
  text-align: center;
  background-color: #f5faf5;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.edit {
  width:auto;
  text-align: center;
  background-color: #f5faf5;
  border: 1px solid gray;
  border-radius: 10px;
  padding-bottom: 10px;
  float:center;
}
.searchh{
  margin-bottom: 8px;
}
@media only screen and (min-width: 0px) and (max-width: 500px) {
  .admin{
    width: 350px;
    padding: 0px;
  }

  h1{
    width: 350px;
    height: auto;
  }
  }
</style>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
   return {
     title: "",
     creator: "",
     ingredients: "",
     directions: "",
     file: null,
     addItem: null,
     items: [],
     findTitle: "",
     findItem: null,
   }
 },
 computed: {
   yonanas() {
     let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
     return items.sort((a, b) => a.title > b.title);
   }
  },
 created() {
    this.getItems();
  },
   methods: {
     selectItem(item) {
     this.findTitle = "";
     this.findItem = item;
   },
   async getItems() {
      try {
        let response = await axios.get("/api/items");
        let things = response.data;
        this.items = things.sort((a, b) => a.title > b.title);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async editItem(item) {
      try {
        console.log(item);
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          creator: this.findItem.creator,
          ingredients: this.findItem.ingredients,
          directions: this.findItem.directions,
          path : this.findItem.path,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        //console.log(error);
      }
    },

   fileChanged(event) {
     this.file = event.target.files[0]
   },
   async upload() {
     try {
       const formData = new FormData();
       formData.append('photo', this.file, this.file.name)
       let r1 = await axios.post('/api/photos', formData);
       let r2 = await axios.post('/api/items', {
         title: this.title,
         creator: this.creator,
         ingredients: this.ingredients,
         directions: this.directions,
         path: r1.data.path
       });
       this.addItem = r2.data;
     } catch (error) {
       console.log(error);
     }
   },
 }
}
</script>
