Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      //Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title) { return false; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });
      //Clear the "New Todo" text field
      this.set('newTitle', '');

      todo.save();
    }
  },

  remaining: function() {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'todo' :'todos';
  }.property('remaining')
});
