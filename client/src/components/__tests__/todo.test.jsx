import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import configureStore from "redux-mock-store"
import { Provider } from 'react-redux';

import Task from '../Task';

afterEach(() => {
    cleanup();
})

// test('first test', () => {
//     expect(true).toBe(false);
// })

test('should render todo component', () => {
    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    render(
        <Provider store={store}>*
            <Task />
        </Provider>
    );
    
    const taskElement = screen.getByTestId('task-test');
    expect(taskElement).toBeInTheDocument();
})

test('should render our todos', () => {
    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    const task = { data: 'This is a task', done: true, createdAt: ''}
    render(
        <Provider store={store}>
            <Task task={task} />
        </Provider>
    );
    
    const taskElement = screen.getByTestId('task-test');

    expect(taskElement).toHaveTextContent('This is a task');

    expect(taskElement).toContainHTML('</form>');

    expect(taskElement).not.toContainHTML('<ul>');
});


test('matches snapshot', () => {
    const todo = { data: 'This is a task', done: true, createdAt: ''}

    const initialState = { state: [] };
    const mockStore = configureStore();

    const store = mockStore(initialState);

    const tree = renderer.create(
        <Provider store={store}>
            <Todo todo={todo} />
        </Provider>
    ).toJSON();

    console.log(tree)

    expect(tree).toMatchSnapshot();
})

