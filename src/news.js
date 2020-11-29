import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: "https://test.spaceflightnewsapi.net/api/v2/articles",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          news: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="boxWhite">
          <center>
            <h1>Spaceflight News</h1>
          </center>

          {this.state.news.map((results, index) => {
            return (
              <div className="card p-5" key={results.id}>
                <a href={results.url}>
                  <div className="card-body">
                    <h3 className="card-title">{results.title}</h3>
                    <img
                      alt={"kosong"}
                      className="my-2"
                      src={results.imageUrl}
                      style={{ width: "25%", height: "auto" }}
                    ></img>
                    <h6 className="card-subtitle my-2 text-muted">
                      {results.publishedAt}
                    </h6>
                    <p className="card-text ">{results.summary}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
