"use client"

import { useState } from "react";
import {TodoItem} from "@/types/TodoItem";

const Page = () => {

  const [inputList, setInputList]= useState('');
  const [list, setList]= useState<TodoItem[]>([
    {label: 'Make cake', checked :false    },
    {label: 'Make coffe', checked :false   }
  ]);

    const adicionarTodo= () =>{
      setList([...list, {label: inputList , checked : false}]);
      setInputList('');
    }

  return(
    <div className="w-screen h-screen flex  flex-col items-center ">
      <h1 className="text-4xl  mt-5 ">To do </h1>
      <div className="flex w-full  max-w-lg  my-3 p-3  rounded-md  bg-gray-700 border-2 border-gray-700">
        <input type="text"
         placeholder="What do you would to do?" 
         className="flex-1 border border-black p-3 text-1xl text-black rounded-md mr-3  " 
         value={inputList}
         onChange={e => {setInputList(e.target.value)}}
         />
         <button onClick={adicionarTodo}>Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(
          item => ( <li> {item.label} - <button className="hover:underline">[Deletar]</button> </li>)
        )}
      </ul>
    </div>
  );
}

export default Page;