import axios from 'axios'
import react from 'react'

export class CardsService {

    async getRequest() {
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWYwYzU0ZDIzNGMwN2MyOGNjN2MyZTc4IiwiaWF0IjoxNTk4NTY1MDY3LCJleHAiOjE1OTkwMjU4Njd9.0ZQcpM0pZwpenlxut5BzH3W97Ky3YYA237DrTnUzXnQ';
        var cardsList = []
        axios.get('http://54.84.239.17:3000/api/match', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': token
            }
        })
            .then(response => {
                console.log(response.data)
                return response.data
            })
            .catch(error => {
                console.log(error)
            })
    }
    async getCards() {
        var cardsList = this.getRequest()[0][0]
        console.log(cardsList)
        return cardsList;
    }
}