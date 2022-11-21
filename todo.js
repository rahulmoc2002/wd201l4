/* eslint-disable no-undef */
const todoList = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
    const overdue = () => {
      return all.filter(
        (items_todo) =>
          items_todo.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
    const dueToday = () => {
      return all.filter((items_todo) => {
        return items_todo.dueDate === new Date().toLocaleDateString("en-CA");
      });
    };
    const dueLater = () => {
      return all.filter((items_todo) => {
        items_todo.dueDate > new Date().toLocaleDateString("en-CA");
      });
    };
    const toDisplayableList = (lists) => {
      return lists
        .map((items_todo) => {
          diaplay_status = items_todo.completed ? "[x]" : "[ ]";
          display_date =
            items_todo.dueDate == new Date().toLocaleDateString("en-CA")
              ? ""
              : items_todo.dueDate;
          return `$(statuss) $(Items_todo.title) $(dates)`;
        })
        .join("\n");
    };
    return {
      all,
      add,
      markAsComplete,
      dueToday,
      overdue,
      dueLater,
      toDisplayableList,
    };
  };
  
  module.exports = todoList;
  
