import React, { Component } from "react";
import Link from "../components/Link";
import List from "../components/List";

import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repositories: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    try {
      const profile = await fetch("https://api.github.com/users/agustino");
      const profileJSON = await profile.json();

      if (profileJSON) {
        const repos = await fetch(profileJSON.repos_url);
        const reposJSON = await repos.json();

        this.setState({
          data: profileJSON,
          repositories: reposJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { data, loading, repositories, error } = this.state;

    if (loading || error) {
      return <div>{loading ? "Loading…" : error}</div>;
    }

    const items = [
      {
        label: "html_url",
        value: (
          <a href={data.html_url} title="Github URL">
            {data.html_url}
          </a>
        ),
      },
      { label: "repos_url", value: data.repos_url },
      { label: "name", value: data.name },
      { label: "company", value: data.company },
      { label: "location", value: data.location },
      { label: "email", value: data.email },
      { label: "bio", value: data.bio },
    ];

    const projects = repositories.map((repository) => ({
      label: repository.name,
      value: <Link url={repository.html_url} title="Github URL" />,
    }));

    return (
      <div className="profile">
        <img
          className="profile__avatar"
          src={data.avatar_url}
          alt="profile avatar"
        />
        <List title="Profile" items={items} />
        <List title="Projects" items={projects} />
      </div>
    );
  }
}

export default Profile;
