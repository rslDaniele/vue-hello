// Stampare a schermo in un h1 un messaggio tramite data Vue

// Stampare messaggio dopo click bottone

var app = new Vue({
  el: '#contenitore',
  data: {
    message: 'Test documentazione Vue',
    h1: ''

  },
  methods: {
    saluta: function (event) {
      this.h1 = 'Test Vue event';
    }
  }
})
