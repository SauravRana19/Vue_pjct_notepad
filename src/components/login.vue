<template
>
  <div class="container" style="margin: 2%;
     background-color: white; 
    margin-left: 30%;
    width: 26rem;
    border-radius: 20px;">
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
              type="email"
              v-model="email"
              class="form-control"
              placeholder="Email"
              style="margin-top: 10px;border-radius: 20px;"
            />
            <div class="error" v-if="errors.email">{{ errors.email }}
            </div>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              
              style="margin-top: 10px;border-radius: 20px;"
            />
            <div class="error" v-if="errors.password">{{ errors.password }}
            </div>
            <button type="submit" @click.prevent="signIn()">Sign in</button>
            <label class="checkbox pull-left">
              <input type="checkbox" value="remember-me" />
              Remember me
            </label><br>
            <a href="http://localhost:8080/register" class="text-center new-account"
            ><span style="color: black;" >Create an account</span> </a>
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
      errors:[],
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
            window.alert("Login");
            this.$router.push("/user");
          }
        }
        else{
          window.alert("Invalid-user");

        }
      }
    },
  },
};
</script>
<style>

.error{
  color: red;
  font-weight: bold;
  margin-left: 5rem;
}
button {
  border-radius: 10px;
  width: 50%;
  color: black;
  padding: 15px;
  margin: 10px 0px;
  border: none;

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
  border-radius: 20px;
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
