/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Testing the TodoList", () => {
  beforeAll(() => {
    add({
      title: "Learning  ML ",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });
  test("Adding a new Items_todo in the Lists ", () => {
    const todoItemCount = all.length;
    add({
      title: "Learning  Analytics",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("Checking the completion of Items ", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Overdue Items to do Retrieving", () => {
    let Items_overdue = overdue();
    expect(
      Items_overdue.every((Items_todo) => {
        return Items_todo.dueDate < new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
  test("retrive all Items_todo that are on dueToday", () => {
    let Items_dueToday = dueToday();

    expect(
      Items_dueToday.every((Items_todo) => {
        return Items_todo.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueLater", () => {
    let Items_dueLater = dueLater();

    expect(
      Items_dueLater.every((Items_todo) => {
        return Items_todo.dueDate > new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });
});
