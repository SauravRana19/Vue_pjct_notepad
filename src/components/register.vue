<template>
  <div>
    <form @submit="Signup()">
      <div class="container">
        <h1 class="h1">Register Page</h1>
        <p
          style="
            line-height: 36px;
            font-family: Arial, Helvetica, sans-serif;
            color: #008f7a;
          "
        >
          Please fill in this form to create an account.
        </p>
        <hr />

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" v-model="email" />
        <div class="error" v-if="errors.email">{{ errors.email }}</div>

        <label><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
        />
        <div class="error" v-if="errors.password">{{ errors.password }}</div>

        <label><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          v-model="pswrepeat"
        />
        <div class="error" v-if="errors.pswrepeat">{{ errors.pswrepeat }}</div>
        <hr />
        <p>
          By creating an account you agree to our
          <a href="#">Terms & Privacy</a>.
        </p>

        <button type="submit" class="registerbtn">Register</button>
      </div>

      <div class="container signin">
        <p>
          Already have an account?
          <a href="http://localhost:8080/login">Sign in</a>.
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import validateRegister from "@/validation/validateRegister.js";
// import { useStorage } from "vue3-storage-secure";
// import signupvalidation from "@/javascript/signupvalidation";
// import { EncryptStorage } from 'encrypt-storage';
// import ls from "localstorage-slim";
// import encUTF8 from 'crypto-js/enc-utf8';
// import AES from 'crypto-js/aes';
export default {
  name: "regi-ster",
  data() {
    return {
      email: "",
      password: "",
      pswrepeat: "",
      users:[],
      errors: {},
      
      // envryptedObject:'',
      // EncryptStorage:'',
    };
  },
  
  methods: {
    Signup() {
        let formData = {
          email: this.email,
          password: this.password,
          pswrepeat: this.pswrepeat,
          // envryptedObject: this.envryptedObject,
          // EncryptStorage:this.EncryptStorage,
        };
        const { isInvalid, errors } = validateRegister(formData);
        if (isInvalid) {
          this.errors = errors;
        } else {
          this.errors = {};
          this.users.push(formData);
          localStorage.setItem("formData", JSON.stringify(this.users));
          window.alert("Registerd Now Sign In.. ");
        }

        // localStorage.setItem(encryptStorage(JSON.encryptString('formData')));

        // localStorage.setItem(AES.encrypt(JSON.stringify(this.users)));

        // ls.config.encrypt = true;
        // ls.set("formData", { bar: "baz" }, { encrypt: true });
        // ls.get("formData"); // °··ºk¢º½·¯
        // ls.get("formData", { decrypt: true });
        // EncryptStorage('secret-key-value', {
        //  storageType: 'localstorage',});

     
      // let validations = new signupvalidation(
      //   this.email,
      //   this.password,
      //   this.pswrepeat
      // );
      // this.errors = validations.checkValidation();
      // if (this.errors.lenght) {
      //   return false;
      // } 
    
    },
  },
  // setup() {
  //   const storage = useStorage();

  //   storage?.setStorageSync("test-key", "testdata22");
  //   return {};
  // },
};
</script>
<style>
h1 {
  font-size: 4vw;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}
h1 {
  font-size: 3vw;
}

/* Add padding to containers */
.container {
  margin-left: 30%;
  width: 30rem;
}

/* Full-width input fields */
input[type="text"],
input[type="password"],
input[type="pswrepeat"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
.h1 {
  color: #2c73d2;
  font-family: monospace;
  font-size: 3vw;
}
</style>
