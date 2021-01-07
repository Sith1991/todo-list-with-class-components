import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;

        let nameOfClass = "todo-list-item";

        if (done) {
            nameOfClass += " done"
        }

        if (important) {
            nameOfClass += " important"
        }

        return (
            <span className={nameOfClass}>
            <span className="todo-list-item-label"
                  onClick={onToggleDone}>{label}</span>
            <button type={"button"}
                    className={"btn btn-outline-success btn-sm float-right"}
            onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/></button>
            <button type="button"
                    className={"btn btn-outline-danger btn-sm float-right"}
            onClick={onDeleted} >
                <i className="fa fa-trash-o"/></button>
        </span>
        )
    }
};