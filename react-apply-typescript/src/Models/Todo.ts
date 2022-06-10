class Todo {
  //properties
    id: string;
    text: string;
  //constructor
    constructor(todoText: string){
      this.text = todoText;
      this.id = new Date().toISOString();
    }
  }
  
  export default Todo;
  