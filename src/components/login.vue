<template>
  <!-- <form @submit.prevent="signIn()">
    <div class="container">
      <h1>Login Page</h1>
      <label>Username : </label>
      <input
        type="text"
        placeholder="Enter Username"
        name="username"
        v-model="email"
      />
      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        v-model="password"
      />
      <button type="submit">Login</button>
    </div>
  </form> -->

  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4 col-md-offset-4">
        <h1 class="text-center login-title"></h1>
        <div class="account-wall">
          <img
            class="profile-img"
            src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
            alt=""
          />
          <form class="form-signin">
            <input
              type="text"
              v-model="email"
              class="form-control"
              placeholder="Email"
              required
              autofocus
            />
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            />
            <button type="submit" @click.prevent="signIn()">Sign in</button>
            <label class="checkbox pull-left">
              <input type="checkbox" value="remember-me" />
              Remember me
            </label><br>
            <a href="http://localhost:8080/register" class="text-center new-account">Create an account </a>
          </form>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "log-in",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn() {
      if ((this.email, this.password === "")) {
        window.alert("empty-fields");
      } else {
        let credential = {
          email: this.email,
          password: this.password,
        };
        let Users = localStorage.formData;
        console.log(Users);

        Users = JSON.parse(Users);
        let usernameIndex = Users.findIndex(
          (users) => users.email === credential.email
        );
        if (usernameIndex > -1) {
          let pswdIndex = Users.findIndex(
            (users) => users.password === credential.password
          );
          if (pswdIndex > -1) {
            this.$router.push("/user");
          }
        }
      }
    },
  },
};
</script>
<style>
/* h1 {
  font-size: vw;
}
button {
  width: 100%;
  color: black;
  padding: 15px;
  margin: 10px 0px;
  border: none;
  cursor: pointer;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  margin: 8px 0;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid green;
  box-sizing: border-box;
}
button:hover {
  opacity: 0.7;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  margin: 10px 5px;
} */
button {
  width: 100%;
  color: black;
  padding: 15px;
  margin: 10px 0px;
  border: none;
  cursor: pointer;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.account-wall {
  width: 25rem;
  margin-top: 20px;
  padding: 40px 0px 20px 0px;
  background-color: #5ed7ed;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.login-title {
  color: #555;
  font-size: 18px;
  font-weight: 400;
  display: block;
}
.profile-img {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.need-help {
  margin-top: 10px;
}
.new-account {
  display: block;
  margin-top: 10px;
}
</style>
