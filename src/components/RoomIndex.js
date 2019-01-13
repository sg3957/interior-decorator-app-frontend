import React, { Component } from 'react'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'
import RoomContainer from './RoomsContainer'
import { Search } from 'semantic-ui-react'
import AllFurnitureContainer from './AllFurnitureContainer'




class RoomIndex extends Component {

  state={
    rooms: [],
    furniture: [],
    clickedRoomId: '',
    clickedFurnitureId:'',
    term: '',
    chosenFurniture: [{id: 2, name: "Chair", category: "seating", description: "glossy red finish", color: "red", img: "molded-plastic-wire-base-side-chair.png",
img_sketch: "molded-plastic-wire-base-side-chair-sketch.png", dimension1: 18,
dimension2: 22}]
  }

  //fetch room data and set state
  componentDidMount() {
  fetch(`http://localhost:3000/api/v1/users/1/rooms`)
    .then(r => r.json())
    .then(roomData => {
      this.setState({ rooms: roomData })
    })
    fetch(`http://localhost:3000/api/v1/furnitures`)
      .then(r => r.json())
      .then(furnitureData => {
        this.setState({ furniture: furnitureData })
      })
  }

  //find room by id
  getRoomId = clickedRoomId => {
    this.setState({
      clickedRoomId: clickedRoomId
    }, ()=>console.log('clicked room id is',clickedRoomId))
  }

  //find room object with the id that matches the clickedRoomId
  findCurrentRoom() {
    return this.state.rooms.find(r =>{
      return r.id === this.state.clickedRoomId
    })
  }

  addRoom = (room) => {
    this.setState({
      rooms: [room, ...this.state.rooms]
    })
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  }

  //find furniture by id
  getFurnitureId = clickedFurnitureId => {
    this.setState({
      clickedFurnitureId: clickedFurnitureId
    },()=>console.log("clicked furniture id is",this.state.clickedFurnitureId))
  }

  //find furniture object with the id that matches the clickedFurnitureId
  findCurrentFurniture() {
    return this.state.furniture.find(f =>{
      return f.id === this.state.clickedFurnitureId
    })
  }
    // let clickedFurniture = this.state.furniture.find(f =>{
    //    return f.id === this.state.clickedFurnitureId
    // })
    // this.setState({
    //   chosenFurniture: [...this.state.chosenFurniture, clickedFurniture]
    // })
    // if (this.state.clickedFurnitureId){
    //   let clickedFurniture = this.state.furniture.map(f =>{
    //     // debugger
    //      return f.id === clickedFurnitureId
    //   })
    // }

    // this.setState({
    //   chosenFurniture: [...this.state.chosenFurniture, clickedFurniture]
    // },()=>console.log(this.state.chosenFurniture))




render() {
  // debugger
  const filteredFurniture = this.state.furniture.filter(f => {
  return f.name.toLowerCase().includes(this.state.term.toLowerCase()) || f.color.toLowerCase().includes(this.state.term.toLowerCase())
})
  return(
    <div>
      <h1>RoomIndex</h1>
      <h2>Your Rooms</h2>
      <div>
        {this.state.rooms.map(r => {
          return <RoomCard key={r.id} room={r} getRoomId={this.getRoomId}/>
        })}
      </div>

      <RoomForm addRoom={this.addRoom}/>
      <RoomContainer rooms={this.state.rooms} currentRoom={this.state.clickedRoomId} currentFurniture={this.state.clickedFurnitureId} findCurrentRoom={this.findCurrentRoom()}
      findCurrentFurniture={this.findCurrentFurniture()} chosenFurniture={this.state.chosenFurniture}/>
      <Search onSearchChange={this.handleSearch} open={false} />
      <AllFurnitureContainer getFurnitureId={this.getFurnitureId} allFurniture={filteredFurniture}
      clickedFurnitureId={this.state.clickedFurnitureId}/>



    </div>
  )
}


}

export default RoomIndex;
