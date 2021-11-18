import { nanoid } from 'nanoid';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Task, TasksProps } from '../types';

type Props = TasksProps & {};

const ListScreen: React.FC<Props> = ({ tasks, setTasks, updateTaskCompletion }) => {
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTskLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskLabel(e.target.value);
    };

    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTaskLabel !== '') {
            setTasks(tasks => [
                ...tasks,
                { id: nanoid(), label: newTaskLabel, isComplete: false },
            ]);
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
        <div>
            <div>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <input
                            type='checkbox'
                            checked={task.isComplete}
                            onChange={handleTaskCompleteChange(task)}
                        />{' '}
                        {task.label}
                        <button onClick={handleTaskDeleteClick(task)}>Delete</button>
                    </div>
                ))}
            </div>
            <input
                value={newTaskLabel}
                onChange={handleNewTskLabelChange}
                onKeyPress={handleNewTaskKeyPress}
            />
            <div>
                <button
                    onClick={handleClearClick}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
};

export default ListScreen;
