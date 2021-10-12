import {API_URL} from "./constants";

export async function getShortenedLink(link: string): Promise<string> {
    const response = await fetch(`${API_URL}?url=${link}`);
    const result = await response.json();

    return result.result['full_short_link'];
}