import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
    // const [input,setInput] =useState("")
    
    const [isTodoEditable,setisTodoEditable]=useState({})
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
      id: '', text: '', textError: null
     });
     const onEditToggle = ( id, text) => {
      // setisTodoEditable((id)=>(isTodoEditable[id]=true));
      setisTodoEditable({ ...isTodoEditable, [id]: true });
      // setInput({ ...input, id, text});
      setInput({ id, text, textError: null });
      edit();
     }
     const handleChange = (e) =>{
      setInput({...input, text : e.target.value,  
         textError: null })
     }
     const { text, textError, id } = input;
     const edit = () =>{
      if(text === ''){
        setInput({...input, textError: 'You must write something!'});
       return;
      }
      dispatch((updateTodo({text, id})));
      // setisTodoEditable(false);
      setisTodoEditable({ ...isTodoEditable, [id]: false });
     }
    return <div>
    {
      <ul >
       {
         todos.map(({id, text})=> {
           return <li key={id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
             {/* <span className=' text-white'>{text}</span> */}
             <input type='text' value={text} name='text' 
            onChange={handleChange}
            readOnly={!isTodoEditable[id]}
            />
             <span > 
               <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                 onClick={() =>onEditToggle(id, text)} 
               >{isTodoEditable[id] ? "📁" : "✏️"}</button>
                <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 ml-4"
                 onClick={() => dispatch(removeTodo({id}))}
               >👋</button>
             </span>
          </li>
        })
       }
     </ul>
     }
   </div>;
  //  return <div>
  //  {
  //    isTodoEditable ?
  //     <div>
  //       <h2>Update your plan for today</h2>
  //       <input type='text' value={text} name='text' 
  //          onChange={handleChange}>
  //       </input>
  //       <button type='button'
  //         onClick={edit}>Edit
  //      </button>
  //      {textError ? 
  //        <div>{textError}</div>: null
  //      }
  //    </div> :
  //    <ul >
  //     {
  //       todos.map(({id, text})=> {
  //         return <li key={id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
  //           <span className=' text-white'>{text}</span>
  //           <span > 
  //             <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
  //               onClick={() =>onEditToggle(id, text)} 
  //             >{isTodoEditable ? "📁" : "✏️"}</button>
  //              <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 ml-4"
  //               onClick={() => dispatch(removeTodo({id}))}
  //             >👋</button>
  //           </span>
  //        </li>
  //      })
  //     }
  //   </ul>
  //   }
  // </div>
  // return (
  //   <>
  //   <ul className="list-none">
  //       {todos.map((todo) => (
  //         <li
  //           className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
  //           key={todo.id}
  //         >
  //           <input className=' text-black' 
  //           value={ todo.text} 
  //           onChange={(e) => setInput(e.target.value)}
  //           readOnly={!isTodoEditable}/>
  //           <button
  //               className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
  //               onClick={() => handleEdit(todo.id, input)}
  //           >
  //               {isTodoEditable ? "📁" : "✏️"}
  //           </button>
  //           <button
  //            onClick={() => dispatch(removeTodo(todo.id))}
  //             className="text-white  bg-slate-400 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
  //           >👋
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // )

  
}

export default Todos


{/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg> */}