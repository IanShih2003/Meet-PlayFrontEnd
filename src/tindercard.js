import React, { useState, useEffect } from 'react'
import TinderCard from './react-tinder-card/index'
import Card from './components/Carta'
import { CardsService } from './services/cards_service'
import axios from "axios"

function Tinder() {
  const [cardsList, setCards] = useState([])
  const [requestCalled, setReq] = useState(false)
  const characters = cardsList
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  // const getcards = async () => {
  //   const service = new CardsService()
  //   service.getcards();
  // }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  useEffect(()=>{
    if(requestCalled === false){
      cardRequest();
    }
  }) 

  
  
  const cardRequest = async() => {
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWYwYzU0ZDIzNGMwN2MyOGNjN2MyZTc4IiwiaWF0IjoxNTk4NTY1MDY3LCJleHAiOjE1OTkwMjU4Njd9.0ZQcpM0pZwpenlxut5BzH3W97Ky3YYA237DrTnUzXnQ';
    
    await axios.get('http://18.209.105.43:3000/api/match', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': token
        }
    })
        .then(response => {
            if(response.data){
              setCards(response.data)
            }
        })
        .catch(error => {
            console.log(error)
        })
  }
  console.log(cardsList)

  return (
    <div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.email} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Card user={character.username} language={character.lenguages} games={character.games}/>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Tinder;