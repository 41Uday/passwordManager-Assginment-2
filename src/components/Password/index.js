import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const bgColor = ['orange', 'green', 'red', 'l-green', 't-green']

class Password extends Component {
  state = {
    passwordList: [],
    website: '',
    userName: '',
    passwordText: '',
    check: false,
    input: '',
  }

  enterWebsiteName = event => {
    this.setState({website: event.target.value})
  }

  enterUserName = event => {
    this.setState({userName: event.target.value})
  }

  enterPassword = event => {
    this.setState({passwordText: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {website, userName, passwordText} = this.state

    const newItem = {
      id: uuidv4(),
      website,
      userName,
      passwordText,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      website: '',
      userName: '',
      passwordText: '',
    }))
  }

  checkboxMethod = event => {
    console.log(event.target.value)
    this.setState(prevState => ({
      check: !prevState.check,
    }))
  }

  buttonOfDelete = id => {
    const {passwordList} = this.state
    const deleteList = passwordList.filter(e => e.id !== id)
    this.setState({passwordList: deleteList})
  }

  searchResults = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {
      passwordList,
      check,
      website,
      userName,
      passwordText,
      input,
    } = this.state

    const filteredResults = passwordList.filter(e =>
      e.website.toLowerCase().includes(input.toLowerCase()),
    )

    const len = filteredResults.length
    const res = len > 0

    const newColor = Math.ceil(Math.random() * 4)
    const resultantColor = bgColor[newColor]

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="img-1"
        />
        <form onSubmit={this.addButton}>
          <div className="card-1">
            <div className="card-2">
              <h1 className="card-2-head-1">Add New Password</h1>
              <div className="inner-card-2">
                <div className="card-2-cont-1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="card-2-img-1"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="website"
                  onChange={this.enterWebsiteName}
                  value={website}
                />
              </div>
              <div className="inner-card-2">
                <div className="card-2-cont-1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="card-2-img-1"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="website"
                  onChange={this.enterUserName}
                  value={userName}
                />
              </div>
              <div className="inner-card-2">
                <div className="card-2-cont-1">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="card-2-img-1"
                  />
                </div>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="website"
                  onChange={this.enterPassword}
                  value={passwordText}
                />
              </div>
              <div className="card-2-butt-cont">
                <button type="submit" className="card-2-butt">
                  Add
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="img-2"
            />
          </div>
          <div className="card-3">
            <div className="inner-card-3">
              <div className="double-inner-card-3">
                <h1 className="head-card-3">Your Passwords</h1>
                <p className="para-card-3">{len}</p>
              </div>
              <div className="double-inner-card-3">
                <button type="button" className="card-3-butt">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="card-3-img-2"
                  />
                </button>
                <input
                  type="search"
                  placeholder="Search"
                  className="card-3-search"
                  onChange={this.searchResults}
                  value={input}
                />
              </div>
            </div>
            <hr />
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox"
                onChange={this.checkboxMethod}
              />
              <label htmlFor="checkbox" className="checkbox">
                Show Passwords
              </label>
            </div>
            {res ? (
              <ul className="list-container">
                {filteredResults.map(e => (
                  <PasswordItem
                    key={e.id}
                    item={e}
                    check={check}
                    buttonOfDelete={this.buttonOfDelete}
                    resultantColor={resultantColor}
                  />
                ))}
              </ul>
            ) : (
              <div className="card-3-img-container">
                <div className="n-pass">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="l-img"
                  />
                  <p className="l-3-head">No Passwords</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default Password
