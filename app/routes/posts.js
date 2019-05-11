import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('posts')
    },
    edit(post, params) {
      //debugger;
      post.save();
      this.transitionTo('posts');
    },

  }
});
