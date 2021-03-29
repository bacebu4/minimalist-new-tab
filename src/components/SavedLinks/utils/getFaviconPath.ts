const FAVICON_BASE_NAME = "favicon.ico";

export function getFaviconPath(url: string): string {
  const Url = new URL(url);
  const { host } = Url;
  const hostSplitted = host.split(".");
  const hostLength = hostSplitted.length;
  let basePath: string;
  if (hostLength === 2) {
    basePath = host;
  } else {
    basePath = `${hostSplitted[1]}.${hostSplitted[2]}`;
  }
  const faviconPath = `${Url.protocol}//${basePath}/${FAVICON_BASE_NAME}`;
  return faviconPath;
}
