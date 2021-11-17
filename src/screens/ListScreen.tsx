import { nanoid } from 'nanoid';
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

type Props = {};
type Task = {
    id: string;
    label: string;
    isComplete: boolean;
};

const ListScreen: React.FC<Props> = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
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

    const handleCompleteChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === handledTask.id)
                    return { ...task, isComplete: e.target.checked };
                return task;
            })
        );
    };

    console.log(tasks);

return (
    <div>
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <input
                        type='checkbox'
                        checked={task.isComplete}
                        onChange={handleCompleteChange(task)}
                    />
                    {task.label}
                </div>
            ))}
        </div>
        <input value={newTaskLabel} onChange={handleNewTskLabelChange} onKeyPress={handleNewTaskKeyPress} />
    </div>
);
};

export default ListScreen;
