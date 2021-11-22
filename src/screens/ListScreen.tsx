import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Task } from '../types';
import useTaskStore from '../hooks/use-task-store';
import styled from 'styled-components';
import TextButton from '../components/TextButton';
import Spacer from '../components/Spacer';
import DeleteIcon from '../Icons/DeleteIcon';
import IconButton from '../components/IconButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 460px;
`;

const List = styled.div`
    border-radius: 15px;
    background: rgb(255, 255, 255, 0.1);
    padding: 45px 24px;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.label`
    display: flex;
    margin-bottom: 8px;
`;

const Input = styled.input`
    background: rgb(0, 0, 0.5);
    border: none;
    border-radius: 15px;
    color: #fff;
    padding: 20px 24px;
`;

type Props = {};

const ListScreen: React.FC<Props> = () => {
    const {
        addTask,
        tasks,
        setTasks,
        updateTaskCompletion,
    } = useTaskStore();

    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTskLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskLabel(e.target.value);
    };

    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTaskLabel !== '') {
            addTask({ label: newTaskLabel })
            setNewTaskLabel('');
        };
    };

    const handleTaskCompleteChange =
        (task: Task) =>
            (e: ChangeEvent<HTMLInputElement>) => {
                updateTaskCompletion(task.id, e.target.checked);
            };

    const handleTaskDeleteClick = (hanledTask: Task) => () => {
        setTasks((tasks) => tasks.filter((task) => task.id !== hanledTask.id));
    };

    const handleClearClick = () =>
        setTasks((tasks) => tasks.filter((task) => !task.isComplete));

    console.log(tasks);

    return (
        <Container>
            <List>
                {tasks.map((task) => (
                    <ListItem key={task.id}>
                        <input
                            type='checkbox'
                            checked={task.isComplete}
                            onChange={handleTaskCompleteChange(task)}
                        />
                        {task.label}
                        <Spacer flex={1} />
                        <IconButton onClick={handleTaskDeleteClick(task)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Spacer height={30} />
            <Input
                value={newTaskLabel}
                onChange={handleNewTskLabelChange}
                onKeyPress={handleNewTaskKeyPress}
            />
            <Spacer height={45} />
            <TextButton
                onClick={handleClearClick}
                style={{ alignSelf: 'center' }}
            >
                Clear completed
            </TextButton>
        </Container>
    );
};

export default ListScreen;
