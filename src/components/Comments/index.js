import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

class Comments extends Component {
  state = {
    nameInput: '',
    projectLink: '',
    commentInput: '',
    commentsList: [],
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem key={eachComment.id} commentDetails={eachComment} />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput, projectLink} = this.state
    const newComment = {
      name: nameInput,
      comment: commentInput,
      project: projectLink,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      projectLink: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeProjectInput = event => {
    this.setState({
      projectLink: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList, projectLink} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Add Project</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p>Project Name</p>
              <input
                type="text"
                className="name-input"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <p>Project Link</p>
              <input
                type="text"
                className="name-input"
                value={projectLink}
                onChange={this.onChangeProjectInput}
              />
              <p>Description</p>
              <textarea
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Project
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length + 2}</span>
            Projects
          </p>
          <div className="main_container">
            <div className="card">
              <h1>Food Munch</h1>
              <p>
                A responsive website that lets you browse through a wide range
                of food items with ease. ● Built with a mobile-first approach,
                this website features HTML structure elements and Bootstrap
                components to ensure seamless navigation. ● Get a clear view of
                the food items with product videos, available at your
                fingertips. Technologies used: HTML, CSS, Bootstrap
              </p>
              <a href="https://foodmunch8978.ccbp.tech">
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
          <div className="main_container">
            <div className="card">
              <h1>Todos Application</h1>
              <p>
                A comprehensive todo management tool designed to enhance
                productivity. User-friendly interface with HTML, CSS, and
                Bootstrap for ease of use. Effortless task management through
                JavaScript-based CRUD operations with dynamic UI updates. Your
                tasks are always safe with local storage methods to ensure task
                persistence
              </p>
              <a href="https://todolist8978.ccbp.tech">
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
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
