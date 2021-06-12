import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('Todo define', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: false,
    },
  ];
  const dom = render(<Todo todos={todos} />);
  const todoRow = dom.container.getElementsByClassName('todo-row');
  const deleteIcon = dom.container.getElementsByClassName('delete-icon');
  const editIcon = dom.container.getElementsByClassName('edit-icon');
  expect(todoRow[0]).toBeDefined();
  expect(deleteIcon[0]).toBeDefined();
  expect(editIcon[0]).toBeDefined();
});

test('Todo define if complete', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: true,
    },
  ];
  const dom = render(<Todo todos={todos} />);
  const todoRow = dom.container.getElementsByClassName('complete');
  expect(todoRow[0]).toBeDefined();
});

test('Todo content if complete', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: true,
    },
  ];
  const dom = render(<Todo todos={todos} />);
  const todoRow = dom.container.getElementsByClassName('complete');
  expect(todoRow[0].textContent).toBe(todos[0].text);
  // expect(todoRow[0].textContent).toBe(todos[0].id);
});

test('Todo content if not complete', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: false,
    },
  ];
  const dom = render(<Todo todos={todos} />);
  const todoRow = dom.container.getElementsByClassName('todo-row');
  expect(todoRow[0].textContent).toBe(todos[0].text);
  // expect(todoRow[0].textContent).toBe(todos[0].id);
});

test('Todo props', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: false,
    },
  ];
  const completeTodo = jest.fn();
  const removeTodo = jest.fn();
  const updateTodo = jest.fn();
  const todo = (
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  );
  const props = todo.props.todos;
  expect(props.length).toBe(1);
  // expect(props.length).toBe(3);
});

test('Todo form define if click edit', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: true,
    },
  ];
  const dom = render(<Todo todos={todos} />);
  const editIcon = dom.container.getElementsByClassName('edit-icon');
  const todoForm = dom.container.getElementsByClassName('todo-form');
  fireEvent.click(editIcon[0]);
  expect(todoForm[0]).toBeDefined();
});

test('Todo click icon remove', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: false,
    },
  ];
  const completeTodo = jest.fn();
  const removeTodo = jest.fn();
  const updateTodo = jest.fn();
  const todo = render(
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  );
  const deleteIcon = todo.container.getElementsByClassName('delete-icon');
  fireEvent.click(deleteIcon[0]);
  expect(removeTodo).toBeCalled();
  // expect(updateTodo).toBeCalled();
});

test('Todo click row to complete', () => {
  const todos = [
    {
      id: 1,
      text: 'row1',
      isComplete: false,
    },
  ];
  const completeTodo = jest.fn();
  const removeTodo = jest.fn();
  const updateTodo = jest.fn();
  const todo = render(
    <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    />
  );
  const rowClickComplete =
    todo.container.getElementsByClassName('click-complete');
  fireEvent.click(rowClickComplete[0]);
  expect(completeTodo).toBeCalled();
  // expect(removeTodo).toBeCalled();
});
