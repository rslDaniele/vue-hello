// Stampare a schermo in un h1 un messaggio tramite data Vue
var app = new Vue({
  el: '#app',
  data: {
    message: 'Test documentazione Vue'
  }
})

// Stampare messaggio dopo click bottone
var app = new Vue({
  el: '#contenitore',
  data: {
    name: 'Test documentazione Vue'
  },
  methods: {
    saluta: function (event) {
      document.getElementById('titolo').innerHTML = ('Ciao' + this.name + '!')
    }
  }
})
