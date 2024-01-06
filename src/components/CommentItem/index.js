import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment, initialClassName, project} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
      </div>
      <hr className="comment-line" />
      <div className="main_container">
        <div className="card">
          <h1>{name}</h1>
          <p>{comment}</p>
          <a href={project}>
            <button type="button" className="button">
              View project
            </button>
          </a>
        </div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/z/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg?ct=jpeg"
            alt="img"
            className="image"
          />
        </div>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
