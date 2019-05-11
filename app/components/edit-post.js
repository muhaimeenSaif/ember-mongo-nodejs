import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery';


export default Component.extend({
  DS : service('store'),
  actions: {

    editPost: function(name ,post) {
      this.set('title',post.title);
      this.set('body',post.body);
      $('.ui.'+name+'.modal').modal({
        closable : true,
        detachable : false,

        onDeny : ()=>{
          return true;
        },
        onApprove : ()=> {
          var title = this.get('title');
          var body = this.get('body');
          post.set('title', title);
          post.set('body', body);
          post.save();

        }
      })
        .modal('show');
    },
  }
});
