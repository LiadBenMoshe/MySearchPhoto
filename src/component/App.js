import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { admin: 0, time: new Date().toLocaleTimeString(), image: [] };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  onSearchSubmit = async (term) => {
    if (term == "liad") {
      this.setState({ admin: 1 });
    } else {
      const response = await unsplash.get("/search/photos", {
        params: {
          query: term,
          per_page: "14",
        },
      });
      console.log(response);
      this.setState({ image: response.data.results });
    }
  };

  render() {
    if (this.state.admin === 1) {
      return (
        <div>
          <p style={{ textAlign: "center" }}>
            <img
              height="500"
              width="650"
              src="//img1.wsimg.com/isteam/ip/a869f1ab-31ef-40fc-bd1f-e5d9c144935f/_DSC0162%20(2).jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:620,h:600,cg:true,m/cr=w:620,h:600,ax:50%25,ay:50%25"
            />
          </p>
          <h1 style={{ textAlign: "center" }}>The one and only</h1>
          <h3 style={{ textAlign: "center" }}>
            <a style={{ textAlign: "center" }} href="https://liadbenmoshe.com/">
              liadbenmoshe.com
            </a>
          </h3>
        </div>
      );
    } else
      return (
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar WhenUserSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.image} />
          <div>number of image: {this.state.image.length}</div>
          <div className="time" style={{ textAlign: "center" }}>
            <h1>time is:{this.state.time}</h1>
          </div>
        </div>
      );
  }
}

export default App;
