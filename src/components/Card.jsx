const Card = ({children}) => {

    const style = {
        background: 'lightgray',
        padding: '0.5rem',
        margin: '0.5rem',
        borderRadius: '0.5rem'
    }

  return (
    <div style={style}>{children}</div>
  )
}

export default Card