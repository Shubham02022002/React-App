export function filterData(searchText, restaurantsData) {
    return restaurantsData.filter((resturant) =>
      resturant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }