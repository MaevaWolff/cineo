import React, { createContext, Component, createRef } from 'react';

const SessionContext = createContext({});

export class SessionContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      mailAlreadyExist: false,
      wrongLogin: false,
    };
  }

  signIn = (mail, password, e) => {
    e.preventDefault();
    let infosUsers = {};
    infosUsers.mail = mail;
    infosUsers.password = password;

    fetch('http://18.191.118.60:80/signIn.php', {
      method: 'POST',
      body: JSON.stringify(infosUsers),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          this.setState({
            user: {
              id: data.infos[0].id,
              name: data.infos[0].name,
              lastName: data.infos[0].last_name,
              pseudo: data.infos[0].pseudo,
              mail: data.infos[0].mail,
              signUpDate: data.infos[0].date_inscription,
            },
            movieList: [],
          });
        } else {
          this.setState({ wrongLogin: true });
        }
      });
  };

  signUp = (name, firstName, mail, password, pseudo, e) => {
    e.preventDefault();

    let data = {};

    data.name = name;
    data.firstName = firstName;
    data.mail = mail;
    data.password = password;
    data.pseudo = pseudo;

    fetch('http://18.191.118.60:80/signUp.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.message) {
          this.setState({ mailAlreadyExist: true });
        } else {
          this.setState({
            user: {
              id: data.user[0].id,
              name: data.user[0].name,
              lastName: data.user[0].last_name,
              pseudo: data.user[0].pseudo,
              mail: data.user[0].mail,
              signUpDate: data.user[0].date_inscription,
            },
          });
        }
      });
  };

  changeWarningStates = () => {
    this.setState({ mailAlreadyExist: false, wrongLogin: false });
  };

  deleteUser = () => {
    let data = {};
    data.mail = this.state.user.mail;

    fetch('http://18.191.118.60:80/deleteUser.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        this.setState({ user: null });
      });
  };

  logOut = () => {
    this.setState({ user: null });
  };

  addMovie = (filmId) => {
    let data = {};
    data.idUser = this.state.user.id;
    data.idFilm = filmId.toString();

    fetch('http://18.191.118.60:80/addFilm.php', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let movieList = [];
        data.forEach((movie) => {
          movieList.push(movie.id_movie);
        });
        this.setState({ movieList: movieList });
      });
  };

  render() {
    const value = {
      ...this.state,
      signIn: this.signIn,
      signUp: this.signUp,
      changeWarningStates: this.changeWarningStates,
      deleteUser: this.deleteUser,
      logOut: this.logOut,
      addMovie: this.addMovie,
    };
    console.log(value.movieList);

    return (
      <SessionContext.Provider value={value}>
        {this.props.children}
      </SessionContext.Provider>
    );
  }
}

export const SessionContextConsumer = SessionContext.Consumer;
