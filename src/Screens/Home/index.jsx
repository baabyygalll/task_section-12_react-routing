import React, {useState} from "react";
// Component
import Form from "../../Component/Form";
import Navbar from "../../Component/Navbar";
import TodoList from "../../Component/TodoList";

const Home = () => {

    const [data, setData] = useState([
        {
          id: 1,
         title : "Mengerjakan Exercise",
         completed : true
         },
         {
          id: 2,
          title : "Mengerjakan Assignment",
          completed : false
         }
    ])
    
    
    const createTodo = (todo) => {
      setData(data.concat(todo));
     
    }
    
    
    
    
      return (
        <section className="container_app">
          <div className="container_wrapper">
          <div className="form_container">
            <Navbar />
            <h1> todos </h1>
            <Form  createTodo={createTodo} />
            <TodoList dataTodos={data} />
          </div>
          </div>
        </section>
      );
}

export default Home;