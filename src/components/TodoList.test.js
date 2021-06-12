import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";

test("Todo form define", () => {
  const dom = render(<TodoList />);
  const title = dom.container.getElementsByClassName("title-todo-list");
  const todoForm = dom.container.getElementsByClassName("todo-form");
  expect(title[0]).toBeDefined();
  expect(todoForm[0]).toBeDefined();
  expect(<Todo />).toBeDefined();
});

test("title Todo List", () => {
  const dom = render(<TodoList />);
  const title = dom.container.getElementsByClassName("title-todo-list");
  // expect(title[0].textContent).toBe(`What's the Plan for Today?`);
  expect(title[0].textContent).toBe(`What's the Plannnn?`);
});

test("prop Todo List", () => {
  const todoList = <TodoList />;
  const props = todoList.props;
  // expect(props).toMatchObject({});
  expect(props).toMatchObject({
    todos: [1,2,3],
  });
});
