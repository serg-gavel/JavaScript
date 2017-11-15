
<template>
  <div class="test">
    <input title="input" type="text" v-model="title"><br>
    <h1>{{title}}</h1>
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else="showName">User not found!</p>
    <!--<p v-text="user.firstName"></p>-->
    <ul class="ul-blue">
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <!--<ul class="ul-red">-->
      <!--<li v-for="item in items">{{item.title}}</li>-->
    <!--</ul>-->
    <button v-on:click="greet('Master '+user.firstName)">Say Greeting {{user.firstName}}</button>
    <input type="text" title="" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
    <hr>
    <label>First Name: </label><input type="text" title="" v-model="user.firstName">
    <label>Last Name: </label><input type="text" title="" v-model="user.lastName">
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props:{
      msg:{
        type: String,
        default:'Foobar'
      }
    },
    data(){
      return{
        title: 'Hello my Lord!',
        user:{
          firstName: 'Serg',
          lastName: 'Gavel'
        },
        showName: true,
        items:[
          {title: 'Item One'},
          {title: 'Item Two'},
          {title: 'Item Three'}
        ]
      }
    },
    methods:{
      greet:(greeting)=> alert(greeting),
      pressKey: (e)=> console.log(e.target.value),
      enterHit: ()=> {console.log('You hit enter');
                      alert('Olololo')
      }
    },
    computed:{
      fullName:({user})=> {
        return user.firstName+' '+user.lastName
      }
    }

  }
</script>

<style scoped>
  ul.ul-blue{
    height:35vh;
    width:50vw;
    background: rgba(8, 15, 149, 0.53);
    list-style: none;
    font-size: 2rem;
    color: #fff;
  }
  ul.ul-red{
    list-style: none;
    background: red;
    height:35vh;
    width:50vw;
    font-size: 2.5rem;
    color: #fff;
  }
</style>
