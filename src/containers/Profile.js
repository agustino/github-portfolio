import React, { Component } from "react";
// import Link from "../components/Link/Link";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    };
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/agustino");
    const profileJSON = await profile.json();

    if (profileJSON) {
      this.setState({
        data: profileJSON,
        loading: false
      });
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading…</div>;
    }
    return (
      <div className="profile">
        <img
          className="profile__avatar"
          src={data.avatar_url}
          alt="profile avatar"
        />
        <ul className="profile__list">
          <li className="profile__item">
            <strong>html_url:</strong>
            <a href={data.html_url}>{data.html_url}</a>
          </li>
          <li className="profile__item">
            <strong>repos_url:</strong> {data.repos_url}
          </li>
          <li className="profile__item">
            <strong>name:</strong> {data.name}
          </li>
          <li className="profile__item">
            <strong>company:</strong> {data.company}
          </li>
          <li className="profile__item">
            <strong>location:</strong> {data.location}
          </li>
          <li className="profile__item">
            <strong>email:</strong> {data.email}
          </li>
          <li className="profile__item">
            <strong>bio:</strong> {data.bio}
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
