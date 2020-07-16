const baseUrl = 'https://swapi.dev/api/'

export function getAllStarships() {
    return fetch(`${baseUrl}starships/`, {mode: 'cors'}).then(res => res.json())
}