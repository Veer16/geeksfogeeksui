import React from "react";
interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface IState {
  users: IUser[];
  isLoading: boolean;
  searchString: string;
}
export default class UsersClass extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      searchString: "",
    };
  }
  public async componentDidMount() {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    this.setState({ users: json.data, isLoading: false });
  }
  public render(): JSX.Element {
    if (this.state.isLoading) {
      return <div>Loading</div>;
    }
    return (
      <>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => this.setState({ searchString: e.target.value })}
        />
        <div className="grid-container">
          {this.state.users
            .filter(
              (x) =>
                x.first_name
                  .toLowerCase()
                  .includes(this.state.searchString.toLowerCase()) ||
                x.last_name
                  .toLowerCase()
                  .includes(this.state.searchString.toLowerCase())
            )
            .map(this.renderUser)}
        </div>
      </>
    );
  }
  private renderUser(user: IUser): JSX.Element {
    return (
      <div className="grid-item">
        <img src={user.avatar} alt="" />
        <div>{user.email}</div>
        <div>{`${user.first_name} ${user.last_name}`}</div>
      </div>
    );
  }
}
