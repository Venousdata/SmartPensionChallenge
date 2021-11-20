import { readFile } from "../utils/filesystem";
import {
  generateViews,
  generateUniqueViews,
  generateUniquePaths,
  formatViewsForTable,
} from "../helpers/webpage.helpers";

export const getWebsiteViews = async (path: string) => {
  if (!path) throw("Path is required");
  
  const viewData = await readFile(path);

  if (viewData) {
    const viewDataArray = viewData.split("\n")?.filter((line) => line);
    const paths = generateUniquePaths(viewDataArray);
    const views = Object.fromEntries(generateViews(viewDataArray));
    const uniqueViews = Object.fromEntries(generateUniqueViews(viewDataArray));
    const formattedViews = formatViewsForTable(paths, views, uniqueViews);

    return formattedViews;
  }
};
