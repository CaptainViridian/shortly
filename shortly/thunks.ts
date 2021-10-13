import {getShortenedLink} from "./connection";
import {LOCAL_STORAGE_LINKS_KEY} from "./constants";
import {Link} from "./model/Link";

export function getStoredLinks() {
    const storedObject = window.localStorage.getItem(LOCAL_STORAGE_LINKS_KEY);
    return JSON.parse(storedObject || '[]') as Array<Link>
}

export async function shortenLink(link: string): Promise<Link> {
    const shortenedLink = await getShortenedLink(link);

    const storedLinks = getStoredLinks();
    const newLink = {originalLink: link, shortenedLink};
    const updatedLinks: Array<Link> = [...storedLinks, newLink];
    localStorage.setItem(LOCAL_STORAGE_LINKS_KEY, JSON.stringify(updatedLinks));

    return newLink;
}