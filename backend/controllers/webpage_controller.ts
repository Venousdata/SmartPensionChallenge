import { readFile } from "../utils/filesystem";
import {
  generateViews,
  generateUniqueViews,
  generateUniquePaths,
  formatViewsForTable,
} from "../helpers/webpage.helpers";

export const getWebsiteViews = async (
  path: string,
  sortBy: string,
  order?: string
) => {
  if (!path || !sortBy) throw new Error("Path or sortBy is missing");

  const viewData = await readFile(path);

  if (viewData) {
    const viewDataArray = viewData.split("\n")?.filter((line) => line);
    const paths = generateUniquePaths(viewDataArray);
    const views = Object.fromEntries(generateViews(viewDataArray));
    const uniqueViews = Object.fromEntries(generateUniqueViews(viewDataArray));
    const formattedViews = formatViewsForTable(paths, views, uniqueViews);

    return formattedViews.sort(
      (a: { [key: string]: any }, b: { [key: string]: any }) =>
        order && order === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
    );
  }
};
