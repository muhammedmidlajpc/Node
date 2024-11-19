let todos = require("../data");
module.exports.getTodos = async (req, res) => {
  try {
    res.send(todos);
  } catch (error) {
    console.log(error);
  }
};
module.exports.addTodo = (req, res) => {
  try {
    todos.push(req.body);
    res.send("todo added succesfully:");
  } catch (error) {
    console.log(error);
  }
};
module.exports.getTodoById = (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const todo = todos.find((ele) => {
      return ele.id === todoId;
    });
    res.send({ todo });
  } catch (error) {
    console.log(error);
  }
};
module.exports.editTodo = (req, res) => {
  try {
    const todoId = Number(req.params.id);
    const edit = req.body;
    const todo=todos.find((todo)=>{
        return todo.id===todoId
    })
    if (todo) {
        const nTodo=todos.map((element)=>{
            if (element.id===todoId) {
                element=edit
            }
            return element
        })
        todos=nTodo
        res.send({message:"todo updated",data:todos})
    }else
    res.send("todo canot be found!")
  } catch (error) {
    console.log(error);
  }
};
module.exports.deletTodo=(req,res)=>{
    try {
        const todoId=Number(req.params.id)
        const nTodo=todos.filter((todo)=>{
            return todo.id!==todoId
        })
        todos=nTodo
        res.send({message:"todo deleted",data:todos})
    } catch (error) {
        console.log(error)
    }
}
