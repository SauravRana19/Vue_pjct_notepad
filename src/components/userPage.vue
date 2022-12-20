<template>
  <div>
    <h1>User Notepad</h1>
    <ol>
      <li v-for="(elem, index) in list" :key="index">{{ elem }}</li>
    </ol>
    <input class="input1" type="text" v-model="new_list" />
    <button class="btn1" v-alert type="success" @click="add_list(),storeData()">add</button>
    <div>
      <button @click="delete_item(index)" class="btn">delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-page",
  data() {
    return {
      new_list: "",
      list: [],
      storedata: [],
    };
  },
  methods: {
    delete_item(index) {
      this.list.splice(index, 1);
    },

    add_list() {
      if (this.new_list) {
        this.list.push(this.new_list);
        this.list("");
      }
      if (!this.new_list) {
        window.alert("field is empty");
      }
    },
    storeData() {
      let store_data = {
        storedata: this.storedata,
        
      };
      console.log(store_data);
      this.list.push(store_data);
      localStorage.setItem("storedata", JSON.stringify(this.list));
      console.log(localStorage);
     
    },
  },
};
</script>
<style>
h1 {
  margin-left: 35%;
  font-size: 2vw;
}
.input1 {
  font-size: 2vw;
  width: 20px;
  height: auto;
}
li {
  font-family: Georgia, "Times New Roman", Times, serif;
  text-transform: uppercase;
  color: black;
}

.btn {
  margin-left: 30rem;
  font-size: 2vw;
  color: aliceblue;
  background-color: rgba(246, 25, 25, 0.782);
  width: 20rem;
}
.btn1 {
  margin-left: 30rem;
  font-size: 2vw;
  color: black;
  background-color: rgba(25, 246, 47, 0.782);
  width: 20rem;
}
</style>
