// get the list from localstorage
export const LoadAppList = () => {
  try {
    const data = localStorage.getItem("AppList");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Save in local storage
export const updateList = (app) => {
  const AppList = LoadAppList();

  try {
    const updateAppList = [...AppList, app];
    localStorage.setItem("AppList", JSON.stringify(updateAppList));
    // console.log(updateAppList);
  } catch (error) {
    console.log(error);
  }
};
