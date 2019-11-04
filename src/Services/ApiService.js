import React from "react";

class ApiService {
  async getBulletins() {
    const bulletins = await fetch(
      "https://react-app-bulletins1.azurewebsites.net/api/bulletins"
    );
    const toJson = bulletins.json();

    console.log(toJson);
    return toJson;
  }

  async patchUpvotes(bulletinId, patchBody) {
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
    );
  }
}

export default new ApiService();
