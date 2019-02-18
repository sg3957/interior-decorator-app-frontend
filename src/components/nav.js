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

  return (
    <>
    {props.loggedIn ? (
   <Menu pointing secondary style={{ marginBottom: "0%"}}>
      <Fragment>
<<<<<<< HEAD
        <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
        }} as={NavLink} to="/profile" name="Profile" />
        <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
        }} as={NavLink} to="/RoomIndex" name="Your Rooms" />
        <Menu.Menu position="right">
            <Menu.Item style={{fontFamily: `'Sarabun', sans-serif`, fontSize:'1.3em'
            }} name="Logout" onClick={()=>handleClick()}/>
=======
        <Menu.Item as={NavLink} to="/profile" name="Profile" />
        <Menu.Menu position="right"><button onClick={()=>handleClick()}>logout</button>
>>>>>>> 00189701ab76921cc1f4e53629e0cf1030bbafe4
        </Menu.Menu>
      </Fragment>
  </Menu>
  ) : null}
  </>
 )
}

const mapStateToProps = state => {
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
