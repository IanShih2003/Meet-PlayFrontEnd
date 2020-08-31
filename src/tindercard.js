import React, { useState, useEffect } from 'react'
import TinderCard from './react-tinder-card/index'
import Card from './components/Carta'
import { CardsService } from './services/cards_service'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
  },
  {
    name: 'Monica Hall',
  },
  {
    name: 'Jared Dunn'
  },
  {
    name: 'Dinesh Chugtai',
  }
]

const desc = [

  {
    description: 'Hola! Soy nuevo en esta plataforma y me encantaria jugar contigo',
  }

]



function Tinder() {
  const characters = db
  const description = desc
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  /* const getcards = async () => {
    const service = new CardsService()
    service.getcards();
  } */

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  /* useEffect(()=>{
    getcards();
  }) */

  return (
    <div>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Card user={character} />
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Tinder;