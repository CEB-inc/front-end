function ShowEntry({ entry }) {
  return entry ? (
    <>
    <div className='px-3 py-2'>
      <h5>{entry.entry}</h5>
      <p>Posted in {entry.category}</p>
      <div classType='btn-toolbar'>
      </div>    
    </div>
    </>
  ) : (
    <p>Loading ...</p>
  )
}

export default ShowEntry