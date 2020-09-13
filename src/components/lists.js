import React, { useEffect } from 'react';
import ListElement from './list';
import AddNewList from './addtodo';

export default(props) => {

    useEffect(() => {
        props.getLists();
    }, [props])
    console.log("COMPONENTE", props.lists);
    return (
        <div className="container">
            <h1>LISTS</h1>
            <AddNewList addTodo = {props.addList} />
            <ul className="lists">
                {
                props.lists.map(element => {
                    return <ListElement key={
                            element.id
                        }
                        id={
                            element.id
                        }
                        List={element}
                        {...props}/>
            })
            } </ul>
        </div>

    )
}
