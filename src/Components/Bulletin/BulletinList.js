import React from "react";
import Bulletin from "./Bulletin";
import avatarImage from "../../images/avatars/daniel.jpg";
import productImage from "../../images/products/image-aqua.png";

const LocalData = [
    {
      "id": "b9277c30-8989-4f11-a005-437fc7854247",
      "description": "Actors to help with your Medival parties!",
      "title": "Fort Knights",
      "url": null,
      "votes": 222,
      "avatarUrl": "./images/avatars/daniel.jpg",
      "bulletinImageUrl": "./images/products/image-aqua.png"
    },
    {
      "id": "2f616e97-f848-4893-b36c-b747760d0bd1",
      "description": "Turning your car from blah to bling!",
      "title": "Drop Top Customs",
      "url": null,
      "votes": 19,
      "avatarUrl": "../../images/avatars/steve.jpg",
      "bulletinImageUrl": "../../images/products/image-steel.png"
    },
    {
      "id": "6161c1b6-d530-4b6b-9cd7-cbbedb4b1c3a",
      "description": "Fashionable headwear for the conspiracy theorist in you!",
      "title": "Tin Foil Hats",
      "url": null,
      "votes": 13,
      "avatarUrl": "../../images/avatars/jenny.jpg",
      "bulletinImageUrl": "../../images/products/image-rose.png"
    },
    {
      "id": "9c7205d7-93f9-4bb4-bc32-c951fdc886ea",
      "description": "The best food in the kingdom, brought to your door!",
      "title": "Gilded Rose Catering",
      "url": null,
      "votes": 21,
      "avatarUrl": "../images/avatars/kristy.png",
      "bulletinImageUrl": "../images/products/image-yellow.png"
    }
  ];

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
                avatarUrl={avatarImage}
                bulletinImageUrl={productImage}
                onVote={this.handleBulletinUpvote}
              />
            );
          });
        }

        
    
        return <div class="main ui text container">
        <div id="content">
            <div className="ui unstackable items">{bulletinComponents}</div>
        </div>
    </div>;
      }
}