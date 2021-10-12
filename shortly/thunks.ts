import {getShortenedLink} from "./connection";
import {LOCAL_STORAGE_LINKS_KEY} from "./constants";
import {Link} from "./model/Link";

function getStoredLinks() {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_LINKS_KEY) || '[]') as Array<Link>
}

export async function shortenLink(link: string): Promise<Link> {
    const shortenedLink = await getShortenedLink(link);

    const storedLinks = getStoredLinks();
    const newLink = {originalLink: link, shortenedLink};
    const updatedLinks: Array<Link> = [...storedLinks, newLink];
    localStorage.setItem(LOCAL_STORAGE_LINKS_KEY, JSON.stringify(updatedLinks));

    return newLink;
}