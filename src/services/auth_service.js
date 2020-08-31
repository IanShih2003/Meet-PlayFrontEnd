import react from 'react'
import axios from 'axios'

export class AuthService {

    async loginWithEmailPassword(email, password) {
        var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWYwYzU0ZDIzNGMwN2MyOGNjN2MyZTc4IiwiaWF0IjoxNTk4NTY1MDY3LCJleHAiOjE1OTkwMjU4Njd9.0ZQcpM0pZwpenlxut5BzH3W97Ky3YYA237DrTnUzXnQ';
        axios.post('http://54.84.239.17:3000/api/login', {
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json)
            .then(result => {
                console.log(result);
                switch (result.statusCode) {
                    case 200:
                        token = JSON.parse(result.body)['token']
                        console.log(token)
                        break;

                    case 401:
                        console.log(result)
                        throw 'unauthorized'

                    default:
                        console.log('error')
                }


            }, error => console.log(error))

        return token;
    }

    async register(user, age, email, password, repeatpass, description, lang, games, nat) {
        var registro = false;
        axios.post('http://54.84.239.17:3000/api/register', {
            body: JSON.stringify({
                username: user,
                email: email,
                password: password,
                age: age,
                games: games,
                languages: lang
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWYwYzU0ZDIzNGMwN2MyOGNjN2MyZTc4IiwiaWF0IjoxNTk4NTY1MDY3LCJleHAiOjE1OTkwMjU4Njd9.0ZQcpM0pZwpenlxut5BzH3W97Ky3YYA237DrTnUzXnQ'

            }
        })
            .then(response => response.json)
            .then(result => {
                console.log(result.body);
                switch (result.statusCode) {
                    case 200:
                        /* token = JSON.parse(result.body)['token'] */
                        registro = true
                        console.log(registro)
                        break;

                    case 401:
                        console.log(result)
                        throw 'unauthorized'

                    default:
                        console.log('poop')
                }


            }, error => console.log(error))

        return registro;
    }

}