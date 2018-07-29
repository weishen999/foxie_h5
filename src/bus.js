import Vue from 'vue';

export default new Vue({
  data() {
    return {
      title:null,
      user: {},
      EVENTS: {
        TITLE_UPDATE:'TITLE_UPDATE',
        USER_UPDATE: 'USER_UPDATE',
      },
    }
  }
});

