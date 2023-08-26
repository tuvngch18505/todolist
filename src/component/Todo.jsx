// Todo.js
import React from 'react';
import { Button, Checkbox } from 'antd';

const Todo = ({ text, completed, onToggle, onDelete, onDeleteAll}) => {
    return (
        <div>
            <Checkbox checked={completed} onChange={onToggle}>
                {text}
            </Checkbox>
            <Button type='primary' onClick={onDelete} style={{ marginLeft: '10px' }}>
                Delete
            </Button>
        </div>
    );
};

export default Todo;
