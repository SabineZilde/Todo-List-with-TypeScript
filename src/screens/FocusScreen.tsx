import React from 'react';
import useTaskStore from '../hooks/use-task-store';
import TextButton from '../components/TextButton';
import styled from 'styled-components';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const Task = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 32px;
    padding-bottom: 45px;
`;

type Props = {};

const FocusScreen: React.FC<Props> = () => {
    const {
        focusedTask: task,
        shuffleFocusedTask,
        updateTaskCompletion
    } = useTaskStore();

    const handleMarkCompleted = () => {
        if (task)
            updateTaskCompletion(task.id, true);
    };

    return task ? (
        <Container>
            <Task>{task.label}</Task>
            <Button onClick={handleMarkCompleted}>Mark completed</Button>
            <Spacer height={45} />
            <TextButton onClick={shuffleFocusedTask}>Nope</TextButton>
        </Container>
    ) : (
        <div>No incomplete tasks.</div>
    );
};

export default FocusScreen;
