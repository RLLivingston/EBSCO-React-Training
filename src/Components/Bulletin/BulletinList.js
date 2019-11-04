import React from "react";
import Bulletin from "./Bulletin";

export default class BulletinList extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
      };

      componentDidMount() {
        fetch("https://react-app-bulletins1.azurewebsites.net/api/bulletins")
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            error => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
      }

      handleBulletinUpvote = bulletinId => {
        const nextBulletins = this.state.items.map(item => {
          if (item.id === bulletinId) {
            return Object.assign(
              {},
              {
                title: item.title,
                description: item.description,
                avatarUrl: item.avatarUrl,
                bulletinImageUrl: item.bulletinImageUrl,
                id: item.id,
                votes: item.votes + 1
              }
            );
          } else {
            return item;
          }
        });
    
        this.setState({
          items: nextBulletins
        });
    
        var patchBody = nextBulletins.find(x => x.id === bulletinId);
    
        fetch(
          "https://react-app-bulletins1.azurewebsites.net/api/bulletins/" +
            bulletinId,
          {
            method: "PATCH",
            crossDomain: true,
            body: JSON.stringify(patchBody),
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
          .then(success => {
            console.log(success);
          })
          .then(error => {
            if (error) {
              console.log(error);
            }
          });
      };

      render() {
        const { error, isLoaded, items } = this.state;
        var bulletinComponents = [];
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded || items == null) {
          return <div>Loading...</div>;
        } else {
          const sortedItems = items.sort((a, b) => b.votes - a.votes);
          sortedItems.map(item => {
            bulletinComponents.push(
              <Bulletin
                key={"product-" + item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                url={item.url}
                votes={item.votes}
                avatarUrl={item.avatarUrl}
                bulletinImageUrl={item.bulletinImageUrl}
                onVote={this.handleBulletinUpvote}
              />
            );
          });
        }
    
        return <div className="ui unstackable items">{bulletinComponents}</div>;
      }
}