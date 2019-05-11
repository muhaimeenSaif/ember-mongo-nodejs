import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({

  actions: {
    delete: function (name,post) {

      $('.ui.'+name+'.modal').modal({
        closable: true,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          this.sendAction('destroyPost', post);
          return true;
        }
      })
        .modal('show');
      // delet5e(post){
      //   if (confirm('Are you sure you want to delete this Post')) {
      //     this.sendAction('destroyPost', post);
      //   }
      // }
    },
  }
});
