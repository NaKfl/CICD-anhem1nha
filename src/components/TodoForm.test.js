import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("Todo form define if not edit", () => {
  const dom = render(<TodoForm />);
  const form = dom.container.getElementsByClassName("todo-form");
  const todoInput = dom.container.getElementsByClassName("todo-input");
  const todoButton = dom.container.getElementsByClassName("todo-button");
  expect(form[0]).toBeDefined();
  expect(todoInput[0]).toBeDefined();
  expect(todoButton[0]).toBeDefined();
});

test("Todo form define if edit", () => {
  const dom = render(<TodoForm edit={{ id: 1, value: "test update" }} />);
  const form = dom.container.getElementsByClassName("todo-form");
  const todoForm = dom.container.getElementsByClassName("edit");
  expect(form[0]).toBeDefined();
  expect(todoForm[0]).toBeDefined();
  expect(todoForm[1]).toBeDefined();
});

test("Todo form content if edit", () => {
  const editValue = { id: 1, value: "test update" };
  const dom = render(<TodoForm edit={editValue} />);
  const button = dom.container.getElementsByClassName("todo-button");
  const input = dom.container.getElementsByClassName("todo-input");
  expect(input[0].getAttribute("value")).toBe(editValue.value);
  expect(button[0].textContent).toBe(`Update`);
});

test("Todo form content if not edit", () => {
  const dom = render(<TodoForm />);
  const button = dom.container.getElementsByClassName("todo-button");
  const input = dom.container.getElementsByClassName("todo-input");
  expect(input[0].getAttribute("value")).toBe("");
  expect(button[0].textContent).toBe(`Add Todo`);
});

test("Todo form change content input", () => {
  const dom = render(<TodoForm />);
  const input = dom.container.getElementsByClassName("todo-input");
  fireEvent.change(input[0], {
    target: { value: "norris" },
  });
  expect(input[0].getAttribute("value")).toBe("norris");
});

test("Todo form props", () => {
  const editValue = { id: 1, value: "test update" };
  const todoForm = <TodoForm edit={editValue} />;
  const props = todoForm.props.edit;
  expect(props.id).toBe(editValue.id);
  expect(props.value).toBe(editValue.value);
});

test("Todo form submit", () => {
  const editValue = { id: 1, value: "test update" };
  const handleSubmit = jest.fn();
  const dom = render(<TodoForm edit={editValue} onSubmit={handleSubmit} />);
  const button = getByTestId(dom.container, "todo-btn");
  fireEvent.click(button);
  expect(handleSubmit).toBeCalled();
});
