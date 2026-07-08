import Todo from "../model/todo.model.js";

export const savetodo = async (req, res) => {
  const Data = req.body;

  const resultTodo = await Todo.insertOne({ Data });

  res.json({
    result: resultTodo,
  });
};
