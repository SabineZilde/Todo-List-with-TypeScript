import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';
import useLocalStorage from './hooks/use-local-storage';
import { Task } from './types';
import TaskContext from './contexts/task-store';
import styled from 'styled-components';
import { colors } from './styles';

const Nav = styled.nav`
  display: flex;
`;

const TabButton = styled(NavLink)`
  display: flex;
  justify-content: center;  
  align-items: center;
  width: 120px;
  height: 62px;
  background: #000;
  color: #fff;
  text-decoration: none;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  };

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  };

  &.active {
    background: ${colors.primary};
    color: #000;
  };
`;

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <Nav>
          <TabButton exact to='/' activeClassName='active'>List</TabButton>
          <TabButton to='/focus' activeClassName='active'>Focus</TabButton>
        </Nav>
        <br />
        <Switch>
          <Route exact path='/'><ListScreen /></Route>
          <Route path='/focus'><FocusScreen /></Route>
        </Switch>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
