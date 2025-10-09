import { Apple } from "lucide-react";

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
export const updateList = (apps) => {
  const AppList = LoadAppList();

  try {
    const isDuplicate = AppList.some((p) => p.id === apps.id);
    if (isDuplicate) return alert("Already Installed");
    const updateAppList = [...AppList, apps];
    localStorage.setItem("AppList", JSON.stringify(updateAppList));
  } catch (error) {
    console.log(error);
  }
};
// Remove from AppList
export const removeFromAppList = (id) => {
  const AppList = LoadAppList();
  try {
    const deleteAppList = AppList.filter((p) => p.id !== id);
    localStorage.setItem("AppList", JSON.stringify(deleteAppList));
  } catch (error) {
    console.log(error);
  }
};
