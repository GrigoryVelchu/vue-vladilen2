const App = {
    data() {
        return {
            myHtml:`<h1>Vue 3 APP</h1>`,
            title:'Меня зовут Семён'
        }
    },
}

Vue.createApp(App).mount("#app")