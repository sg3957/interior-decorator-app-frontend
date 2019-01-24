import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {logOut} from '../actions/user'



const Nav = (props) => {

  const handleClick = () => {
    props.history.push('/login')
    props.logOut()
  }

  // console.log(props)
  return (
    <>
    {props.loggedIn ? (
   <Menu pointing secondary style={{ marginBottom: "0%"}}>
      <Fragment>
        <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
}} as={NavLink} to="/profile" name="Profile" />
        <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
}} as={NavLink} to="/RoomIndex" name="Your Rooms" />
        <Menu.Menu position="right">
            <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
    }} name="Logout" onClick={()=>handleClick()}/>
          {/* <Menu.Item to="/logout" name="Logout" onClick={logout} /> */}
        </Menu.Menu>
      </Fragment>
  </Menu>
) : null}
</>
 )
}
// { user: { loggedIn }, location: { pathname } }
const mapStateToProps = state => {
  // debugger
  return(
    {loggedIn: state.usersReducer.loggedIn,
    pathname:state.location}
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
