import React, { useState, useEffect } from "react";
import Bulletin from "./Bulletin";
import avatarImage from "../../images/avatars/daniel.jpg";
import productImage from "../../images/products/image-aqua.png";

const BulletinListFC = () => {
  const [ourState, setOurState] = useState({
    error: null,
    isLoaded: false,
    items: []
  });

  useEffect(() => {
    loadData();
  });

  const loadData = () => {
    fetch("https://react-app-bulletins1.azurewebsites.net/api/bulletins")
      .then(res => res.json())
      .then(
        result => {
          setOurState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          setOurState({
            isLoaded: true,
            error
          });
        }
      );
  }

  const handleBulletinUpvote = bulletinId => {
    const nextBulletins = ourState.items.map(item => {
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

    setOurState({
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

  const { error, isLoaded, items } = ourState;
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
          onVote={handleBulletinUpvote}
        />
      );
    });

    return (
      <div class="main ui text container">
        <div id="content">
          <div className="ui unstackable items">{bulletinComponents}</div>
        </div>
      </div>
    );
  }
};

export default BulletinListFC;
