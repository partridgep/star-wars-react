# React Star Wars

A simple React app for displaying Star Wars Data from the Star Wars API. V1 only includes starship data.

## Technologies

* React
* JS
* HTML
* CSS
* [SWAPI](https://swapi.dev/) (Star Wars API)

## Screenshots

*Starship List Page:*
![Starship List Page](https://i.imgur.com/2XxqUic.jpg)

*Starship Details Page:*
![Starship Detail Page](https://i.imgur.com/e0GDDvC.png)

## Functioning

The App class components holds four properties in `state`: the starships, the selected starship, the ship background, and the ship pilots. All four are initially empty values.

At `ComponentDidMount()`, once all the starship data has been loaded from the Star Wars API, we set state so that the starships array contains that data.

At this point, on the Starship details page, we map through this starship array and create a button for each that links to their individual Starship detail page.

On user click on one of these buttons, we set state so that the selected starship property matches the clicked item. Additionally, we call a function to select a corresponding background image for the ship page (often randomly selecting from an array of multiple possible backgrounds, like for the Star Destroyer.) We set state for the ship background property to the result of that function. Finally, we load the pilot data from the API for each of the pilot links in the starship object.

We then load the Starship Detail page, passing down the starship object, the background image, and the array of pilots as props, so that they may be rendered on the page.

## Animations & Transitions

This app uses `react-transition-group` to enable transitions between pages and sets up animation in timelines from `gsap`.

![App Transitions](https://i.imgur.com/DWCr5Da.gif)

## Icebox

* More Star Wars Data Visualization