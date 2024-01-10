import { Component } from "react";
import './ToDo.css'

export default class ToDo extends Component{


    constructor(){
        super()
        this.state={
            text:"",
            todo:[]
        }
    }

    render(){
        // destructuring this.state.text=text & this.state.todo=todo
        let{text,todo}=this.state;

       let handleChange=(event)=>{
            this.setState({text:event.target.value})
            console.log(text)
        }

        let handleClick = ()=>{
            this.setState({
                todo:[...todo,text]
            })
        }

        let handleUpdate=(index)=>{
            let updatedText = prompt("Enter a new ToDO")

            let filterTodo = todo.map((element,i)=>{
                if(i == index){
                    return updatedText;
                }
                return element
            })

            this.setState({
                todo:filterTodo
            })
        }

        let handleDelete = (index)=>{
            // let deleteData = todo.filter((element,i)=> i !== index)
            todo.splice(index,1)
            this.setState({
                todo:todo
            })
        }

        return(
            <>
                <div className="todo">

                    <h1>TODO - LIST</h1>
                <div className="content">
                    <input type="text" placeholder="ENTER NEW TEXT"  onChange={handleChange} id="enter"/>
                    <button onClick={handleClick} id="add">ADD TO DO</button>
                </div>

                <div>
                    {todo.map(
                        (element,i) => (
                            <div key={i}>
                                <p>{element}</p>
                                <div className="buttons">
                                <button className="but" onClick={()=>handleUpdate(i)  }>Update Todo</button>
                                <button className="but" onClick={()=>handleDelete(i)}>Delete Todo</button>
                                </div>                           
                            </div>
                        )
                    )

                    }
                </div>
                </div>
            </>

        )
    }


}