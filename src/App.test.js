import { render } from '@testing-library/react';
import TodoList from './components/TodoList';

test('title Todo List', () => {
  const dom = render(<TodoList />);
  const title = dom.container.getElementsByClassName('title-todo-list');
  expect(title[0].textContent).toBe(`What's the Plan for Today`);
});
