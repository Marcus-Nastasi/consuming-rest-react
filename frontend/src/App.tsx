import { FaEdit, FaTrash }  from 'react-icons/fa'
import { useState, useEffect } from 'react'

function App() {
   const [ todos, setTodos ] = useState([]);

   useEffect(() => {
      async function handleRead() {
         const getData = await fetch('http://localhost:3000/read');
         const data = await getData.json();
         return setTodos(data);
      };
      handleRead();
   }, []);

  return (
   <>
      <div className="flex p-5 min-h-screen max-h-fit bg-slate-200">
         <div className="flex flex-col items-center p-2 grow">

            <div>
               <h1 className='text-5xl mb-20 font-semibold'>Todos</h1>
            </div>

            <div className='flex p-3 mb-7 w-full rounded-lg bg-slate-300'>

               <form action="/insert" method='post' className='flex flex-col w-full items-center'>
                  <label htmlFor="description" className='text-2xl'>Descrição</label>
                  <input type="text" name="description" id="description" className='mb-5 mt-2 p-1 rounded-md' />
                  <button type="submit" className='px-5 py-2 rounded-md text-slate-100 bg-blue-700'>ADICIONAR</button>
               </form>

            </div>

            <div className='w-full h-fit flex flex-col justify-between items-center'>
               <div className='w-full text-center mb-10'>
                  <h2 className='text-3xl p-7 rounded-md border-2 border-slate-900'>Lista</h2>
               </div>

               <div className='flex flex-col-reverse items-center justify-between w-full rounded-lg px-2 mb-8 border-2 border-slate-900'>

               {todos.map(todo => {
                  return(
                     <>
                        <div className='flex justify-between p-3 py-10 w-full border-b-2 border-slate-800'>

                           <p className='text-2xl'>
                              { todo.description }
                           </p>

                           <div className='flex text-lg'>

                              <FaEdit className='m-2' />

                              <a href={`/delete/${ todo.id }`}>
                                 <FaTrash className='m-2' />
                              </a>

                           </div>

                        </div>
                     </>
                  );
               })}

               </div>

            </div>

         </div>
      </div>
   </>
  );
};

export default App;



