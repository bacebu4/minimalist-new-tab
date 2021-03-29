const FAVICON_BASE_NAME = "favicon.ico";

export function getFaviconPath(url: string): string {
  const splittedUrl = url.split(".");
  const faviconPath = `${splittedUrl[splittedUrl.length - 2]}.${
    splittedUrl[splittedUrl.length - 1]
  }/${FAVICON_BASE_NAME}`;
  return faviconPath;
}
