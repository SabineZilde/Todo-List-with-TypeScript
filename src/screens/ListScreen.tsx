import { nanoid } from 'nanoid';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

type Props = {};
type Task = {
    id: string;
    label: string;
};

const ListScreen: React.FC<Props> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTskLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskLabel(e.target.value);
    };

    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            setTasks(tasks => [...tasks, { id: nanoid(), label: newTaskLabel }])
    };

    return (
        <div>
            <ul>
                {tasks.map(task => <li key={task.id}>{task.label}</li>)}
            </ul>
            <input value={newTaskLabel} onChange={handleNewTskLabelChange} onKeyPress={handleNewTaskKeyPress} />
        </div>
    );
};

export default ListScreen;