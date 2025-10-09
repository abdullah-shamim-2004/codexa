import { Apple } from "lucide-react";

export const LoadAppList = () => {
  try {
    const data = localStorage.getItem("AppList");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error loading AppList:", error);
    return [];
  }
};

export const updateList = (app) => {
  try {
    const AppList = LoadAppList();

    const isDuplicate = AppList.some((p) => p.id === app.id);

    if (isDuplicate) {
      alert("Already Installed");
      return AppList;
    }

    const updatedAppList = [...AppList, { ...app, installed: true }];
    localStorage.setItem("AppList", JSON.stringify(updatedAppList));
    return updatedAppList;
  } catch (error) {
    console.log("Error updating AppList:", error);
    return [];
  }
};

export const removeFromAppList = (id) => {
  try {
    const AppList = LoadAppList();
    const updatedList = AppList.filter((p) => p.id !== id);
    localStorage.setItem("AppList", JSON.stringify(updatedList));
    return updatedList;
  } catch (error) {
    console.log("Error removing from AppList:", error);
    return [];
  }
};
