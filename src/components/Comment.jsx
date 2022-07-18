const Comment = ({ userName, date, children }) => {
	return (
		<article className="comment">
			<header>
				<p>{userName || 'Unknown'}</p>
				<time>{date}</time>
			</header>
			<div className='content'>
				{children}
			</div>
		</article>
	)
}

export default Comment