const generateAllPathsAndIps = (
  viewData: string[]
): { path: string; ip: string }[] =>
  viewData.map((line: string) => {
    const [path, ip] = line.split(" ");
    if (path && ip) {
      return { path, ip };
    }
  });

const findUniqueIpsForPath = (
  path: string,
  allPathsAndIps: { path: string; ip: string }[]
) =>
  Array.from(
    new Set(
      allPathsAndIps.filter((obj) => obj.path === path).map((obj) => obj.ip)
    )
  );

export const generateUniquePaths = (viewData: string[]): string[] => {
  const allPathsAndIps = generateAllPathsAndIps(viewData);

  return Array.from(new Set(allPathsAndIps.map((obj) => obj.path)));
};

export const generateViews = (viewData: string[]): Map<string, number> => {
  const pathViewMap: Map<string, number> = new Map();

  for (let i = 0; i < viewData.length; i++) {
    const [path] = viewData[i].split(" ");
    if (path) {
      if (pathViewMap.has(path)) {
        pathViewMap.set(path, pathViewMap.get(path) + 1);
      } else {
        pathViewMap.set(path, 1);
      }
    }
  }

  return pathViewMap;
};

export const generateUniqueViews = (
  viewData: string[]
): Map<string, number> => {
  const uniqueViewsMap: Map<string, number> = new Map();
  const allPathsAndIps = generateAllPathsAndIps(viewData);
  const paths = generateUniquePaths(viewData);

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const ips = findUniqueIpsForPath(path, allPathsAndIps);

    if (path && ips?.length) {
      uniqueViewsMap.set(path, ips.length);
    }
  }

  return uniqueViewsMap;
};

export const formatViewsForTable = (
  paths: string[],
  views: { [key: string]: number },
  uniqueViews: { [key: string]: number }
): { path: string; view: number; uniqueView: number }[] => {
  return paths.map((path: string) => {
    const view = views[path] || 0;
    const uniqueView = uniqueViews[path] || 0;

    return { path, view, uniqueView };
  });
};
