function ShowEntry({ entry }) {
  return entry ? (
    <>
    <div className='px-3 py-2'>
      <h5>{entry.entry}</h5>
      <p>Posted in {entry.category}</p>
      <div classType='btn-toolbar'>
          <button id='editbutt' className='btn px-4 fw-semibold'>Edit</button>
          <button id='dltbutt' className='btn px-4 btn-danger fw-semibold'>Delete</button>
      </div>    
    </div>
    </>
  ) : (
    <p>Loading ...</p>
  )
}

export default ShowEntry