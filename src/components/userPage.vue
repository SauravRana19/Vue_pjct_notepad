<template >
  <h1>{{ title }}</h1>
  <h1>{{ elem }}</h1>
  <input
    type="text"
    v-model="new_item"
    @input="check"
    :placeholder="msg"
    style="width: 50rem; height: auto"
  />
  <button class="button1" @click="add_item" :disabled="new_item.length == 0">
    add
  </button>
  <ul v-if="list.length > 0">
    <ol v-for="(elem, index) in list" :key="index">
      {{
        elem
      }}
      <button
        @click="delete_item(index)"
        style="
        border-radius: 10px;
          font-size: large;
          height: 45px;
          width: auto;
          margin-left: 5rem;
          background-color: rgb(233 28 28);
          color: antiquewhite;
        "
      >
        delete
      </button>
    </ol>
  </ul>

  <div v-for="(item, index) in user" :key="index">
    <h2>{{ item.email }}</h2>
    <h2>{{ item.password }}</h2>

    <!-- <input type="text" v-model="item.email" /> -->
    <!-- <button @click="updateData" class="buuton1">ADD</button> -->
    <div>
      <input
        type="text"
        v-model="item.email"
        style="width: 50rem; height: auto"
      />

      <button
        @click="updateData()"
        style="
          width: auto;
          margin-left: 5rem;
          background-color: rgb(21 21 141);
          color: antiquewhite;
        "
      >
        Update Email
      </button>

      <input
        type="text"
        v-model="item.password"
        style="width: 50rem; height: auto"
      />
      <button
        @click="updateData()"
        style="
          width: auto;
          margin-left: 5rem;
          background-color: rgb(45 82 86);
          color: antiquewhite;
        "
      >
        Update Password
      </button>
      <div>
        <button
          @click="deletData(index)"
          style="
            width: auto;
            background-color: rgb(233 28 28);
            color: antiquewhite;
          "
        >
          Delete All
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-page",
  data() {
    return {
      title: "Notepad",
      new_item: "",
      list: [],
      userNote: [],
      Data: [],
      user: null,
      userData: null,
    };
  },
  computed: {
    msg() {
      if (this.list.length == 0) {
        return "add a new item";
      } else if (this.list == 1) {
        return "one item";
      } else {
        return this.list.length + " items";
      }
    },
  },
  methods: {
    add_item() {
      if (this.new_item.length == 0) return;
      this.list.push(this.new_item);

      this.Data.push(this.list);
      localStorage.setItem("userData", JSON.stringify(this.Data));

      this.new_item = "";
    },
    delete_item(index) {
      this.list.splice(index, 1);
      this.Data.splice(index, 1);
    },
    check() {
      if (this.new_item.length > this.max) {
        this.new_item = this.new_item.substring(0, this.max);
      }
    },
    deletData() {
      localStorage.removeItem("formData", this.Data[0]);
    },
    updateData() {
      this.Data.push(this.user);
      localStorage.setItem("formData", JSON.stringify(this.Data));
    },
  },
  created() {
    this.userData = localStorage.getItem("formData");
  },
  mounted() {
    if (this.userData?.length > 0) {
      this.user = JSON.parse(this.userData);
    }
  },
};
</script>
<style>
body,
p,
span,
ul,
li {
  padding: 0;
  margin: 0;
}
body {
  padding: 10px;
}

.button1 {
  width: auto;
  margin-left: 5rem;
  background-color: #1ce959;
}
span {
  font-size: 2vw;
  margin-left: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #0081cf;
}

ul {
  margin: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: #2c73d2;
}
ol {
  width: 20%;
  border: 2px solid rgb(56, 94, 246);
  border-radius: 10px;
  line-height: 30px;
  font-size: 2vw;
}
</style>
