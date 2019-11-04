/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class Bulletin extends React.Component {
    handleUpVote = () => {
      this.props.onVote(this.props.id);
    };
  
    render() {
      return (
        <div className="item">
          <div className="image">
            <img src={this.props.bulletinImageUrl} alt="User" />
          </div>
          <div className="middle aligned content">
            <div className="header">
              <a onClick={this.handleUpVote}>
                <i className="large caret up icon" />
              </a>
              {this.props.votes}
            </div>
            <div className="description">
              <a href={this.props.url}>{this.props.title}</a>
              <p>{this.props.description}</p>
            </div>
            <div className="extra">
              <span>Submitted by:</span>
              <img className="ui avatar image" src={this.props.avatarUrl} alt="Avatar" />
            </div>
          </div>
        </div>
      );
    }
  }