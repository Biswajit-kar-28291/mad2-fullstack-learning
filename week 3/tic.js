Vue.component('tic', {
  props: ['val'],
  template: `
    <button 
      @click="$emit('click')" 
      class="btn btn-outline-dark fw-bold fs-3 d-flex align-items-center justify-content-center"
      style="width:80px; height:80px;"
    >
      <span :class="val">{{ val }}</span>
    </button>
  `
})

Vue.component('board', {
  data: function () {
    return {
      board: [0,0,0,0,0,0,0,0,0],
      x_w:0,
      o_w:0,
      x_l:0,
      o_l:0,
      draw:0,
      next: 1
    }
  },

  template: `
    <div>

      <!-- Status -->
      <div v-html="headmsg" class="mb-3"></div>
      <h5 class="text-primary">
  x_wins: {{ x_w }} , x_losts: {{ x_l }} , x_draw: {{ draw }}
</h5>

      <!-- Board -->
      <div class="d-grid gap-2" style="grid-template-columns: repeat(3, 80px); justify-content:center;">
        <div v-for="(n,i) in 9" :key="i">
          <tic :val="v2c(board[i])" @click="update(i)"></tic>
        </div>
      </div>

      <!-- Restart -->
      <button class="btn btn-primary mt-3 w-100" @click="reset">
        Restart Game
      </button>

    </div>
  `,

  methods: {
    v2c(r) {
      return (r == 1) ? "X" : (r == -1) ? "O" : "";
    },

    update(i) {
  if (this.result == 0 && this.board[i] == 0) {
    Vue.set(this.board, i, this.next);
    
 
    this.next = -this.next;
  }
},

    reset() {
      this.board = [0,0,0,0,0,0,0,0,0];
      this.next = 1;
    }
  },

  computed: {
    headmsg() {
      switch (this.result) {
        case 0:
          return `<h5>Next: <span class="fw-bold">${this.v2c(this.next)}</span></h5>`;
        case 1:
          return `<h5 class="text-danger">X Wins 🎉</h5>`;
        case -1:
          return `<h5 class="text-primary">O Wins 🎉</h5>`;
        case 2:
          return `<h5 class="text-secondary">Draw 😐</h5>`;
      }
    },

    result() {
      let patts = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];

      for (let p of patts) {
        const sum = p.reduce((a, i) => a + this.board[i], 0);
        if (sum == 3) {
           this.o_l=this.o_l+1;
          this.x_w=this.x_w+1;
          return 1;
        }
        if (sum == -3) {
          this.o_w=this.o_w+1;
          this.x_l=this.x_l+1;
          return -1;}
      }

      if (this.board.includes(0)) return 0;
      this.draw=this.draw+1;
      return 2;
    }
  }
})

new Vue({
  el: '#app'
});