const aa = 'Hello';

const tasks = {
   getTasksToDo: () => {
      // console.log(this);
      // return tasks.tasks.map(item => item.completed ? item.text : null);
      return tasks.tasks.filter(item => !item.completed);
   },
   tasks: [{
      text: 'Grocery shopping',
      completed: true
   }, {
      text: 'Clean yard',
      completed: false
   }, {
      text: 'Film course',
      completed: false
   }]
}

console.log(tasks.getTasksToDo())