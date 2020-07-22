const baseUrl = 'https://swapi.dev/api/'

export function getAllStarships() {
    return fetch(`${baseUrl}starships/`, {mode: 'cors'}).then(res => res.json())
}

export async function getAllPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
}