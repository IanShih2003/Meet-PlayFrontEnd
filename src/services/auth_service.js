import axios from "axios";

export class AuthService {
  async loginWithEmailPassword(email, password) {
    console.log(email);
    console.log(password);
    var token = true;
    axios
      .post("http://54.84.239.17:3000/api/login", {
        body: {
          email: "matias@gmail.com",
          password: "matias20",
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(
        (result) => {
          console.log(result);
          // switch (result.statusCode) {
          //     case 200:
          //         token = JSON.parse(result.body)['token']
          //         console.log(token)
          //         break;

          //     case 401:
          //         console.log(result)
          //         throw 'unauthorized'

          //     default:
          //         console.log('error')
          // }
        },
        (error) => console.log(error)
      );

    return token;
  }

  async register(
    user,
    age,
    email,
    password,
    repeatpass,
    description,
    lang,
    games,
    rol,
    rank,
    nat
  ) {
    var leng = []
    leng.push(lang)
    var juegos = []
    juegos.push({
        game: games,
        rol: rol,
        rank: rank,
    })
      
    var registro = false;
    axios
      .post("http://18.209.105.43:3000/api/register", {
        data: {
          username: user,
          email: email,
          password: password,
          age: age,
          games: juegos,
          lenguages: leng,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",        
        },
      })
      .then(
        (result) => {
          console.log(result);
          registro = true;
        },
        (error) => console.log(error.response.data)
      );

    return registro;
  }
}
