import './index.css'

const PasswordItem = props => {
  const {item, check, buttonOfDelete, resultantColor} = props
  const {website, passwordText, userName, id} = item

  const deleteButt = () => {
    buttonOfDelete(id)
  }

  return (
    <li className="item-container">
      <div className="list-item-container">
        <p className={`first-letter ${resultantColor}`}>
          {website[0].toUpperCase()}
        </p>
        <div className="inner-list">
          <p className="para-2-list">{website}</p>
          <p className="para-2-list">{userName}</p>
          {check ? (
            <p className="para-2-list">{passwordText}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="list-img"
            />
          )}
        </div>
        <button type="button" className="list-button" onClick={deleteButt}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
