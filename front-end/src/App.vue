<template>
  <div id="app">
  <div id="menu">
    <div id="side">
      <router-link to="/admin">
        <div class="menu-item browse">
          <img src="/edit.png">
          <p>EDIT</p>
        </div>
      </router-link>
      <router-link to="/">
        <div class="menu-item browse">
          <img src="/recipes.png">
          <p>FAVS</p>
        </div>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/all">
        <img src="/logo.png">
      </router-link>
    </div>
  </div>
    <p> **Please note: all information was taken from the official <a href="http://yonanas.com">YONANAS</a> website. This website is for education purposes ONLY **.  </p>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/briannamathre/cp4.git">GitHub</a>

  </div>
</div>

</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}
p{
  font-size: 12px;
}
/* Header */
.content {
  padding: 20px 100px;
  min-height: 500px;
}
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "side brand none";
  background-color:#abd4ab;
  border: 5px solid gray;
  border-style: double;
  margin-bottom: 50px;
}

#menu a {
  color: white;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  padding-top: 4px;
  padding-bottom: 4px;
  height: 75px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: left;
  flex-wrap:wrap;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:9px;
  color: white;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
  justify-content:center;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
  text-align: center;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
