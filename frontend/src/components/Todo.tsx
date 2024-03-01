import { FaEdit, FaTrash } from "react-icons/fa";

export default function Todo({ todo }) {
   return(
      <>
         <div key={ todo.id } className='flex justify-between p-3 my-5 w-full rounded-lg bg-slate-300'>

            <p className='text-2xl'>
               { todo.description }
            </p>

            <div className='flex text-lg'>

               <a className='m-2' href={`/edit/${ todo.id }`}>
                  <FaEdit className='text-slate-600 hover:text-slate-900' />
               </a>

               <a className='m-2' href={`/delete/${ todo.id }`}>
                  <FaTrash className='text-slate-600 hover:text-slate-900' />
               </a>

            </div>

         </div>
      </>
   );
};


