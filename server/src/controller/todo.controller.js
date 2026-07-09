import Todo from "../model/todo.model.js";

export const savetodo = async (req, res) => {
  try {
    const Data = req.body;
    // console.log(Data);

    // const resultTodo = await Todo.insertOne({
    //  title: Data.title,
    //  description: Data.description,
    //  isComplete: Data.isComplete,
    // });

    const TodoData = new Todo();

    TodoData.title = Data.title;
    TodoData.description = Data.description;
    TodoData.isComplete = Data.isComplete;

    await TodoData.save();

    console.log(TodoData);
    return res.send(TodoData);

    res.json({
      result: resultTodo,
    });
  } catch (error) {
    res.json({
      succes: false,
      errorMessage: error.message,
    });
  }
};
