
<template>
  <div class="users">
    <h1>Users</h1>
    <form action="#" v-on:submit.prevent="addUser">
      <input title="" type="text" v-model="newUser.name" placeholder="Enter your name">
      <br>
      <input title="" type="text" v-model="newUser.email" placeholder="Enter your email">
      <br>
      <input type="submit" value="Submit">
    </form>
    <br>
    <ul>
      <li v-for="user in users">
        <input title="" type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data(){
      return{
        newUser:{},
        users:[
//          {
//            name: 'John Doe',
//            email: 'jdoe@gmail.com',
//            contacted: false
//          },
//          {
//            name: 'Bill Gates',
//            email: 'bgates@hotmail.com',
//            contacted: false
//          },
//          {
//            name: 'Steve Jobs',
//            email: 'jobs@apple.com',
//            contacted: false
//          }
        ]
      }
    },
    methods:{
      addUser: function () {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
      },
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user),1);
      }
    },
    created: function(){
      this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
          this.users = response.data;
        });
    }

  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .contacted{
    text-decoration: line-through;
    color: darkred;
  }
</style>
