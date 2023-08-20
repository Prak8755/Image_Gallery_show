import React from 'react'

const Cards = ({props}) => {
const {downloads,comments,largeImageURL,user}=props;


  return (
    <div className='h-[200px] w-[200px] shadow-md m-6'>
<img src={largeImageURL} alt='p'/>
<h1>{user}</h1>
<p>Downloads:{downloads}</p>
<p>{comments}</p>

    </div>
  )
}

export default Cards