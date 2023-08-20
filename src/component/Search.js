import React, { useState } from 'react'

const Search = ({searchText}) => {
const [search,setSearch]=useState('');



function onSubmit(e){
setSearch(e.target.value)
searchText(search)
}

  return (
    <div className='flex items-center justify-center mt-10'>
        <form>
<input className='border outline-none' type='text' value={search} onChange={onSubmit}/>
<button className='px-10 py-1 bg-slate-700 text-white'>Search</button>
        </form>
    </div>
  )
}

export default Search