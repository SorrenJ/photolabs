# react-photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. Uses an API to build a frontend user experience for users to interact with photos

# Photolabs

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Functionalities

### Default page

![Screenshot_1](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_main_page.png)


### Photo details

Upon clicking on a photo, user can see additional information of the taken photo, as well as similar photos.

![Screenshot_2](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_overlay.png)


### Favoriting a photo

As seen in the image below a user can heart a photo they choose to favorite.

![Screenshot_3](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_favorite_1.png)


On the top navigation bar, the user is notified that a favorite has been saved.

![Screenshot_4](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_favorite_2.png)

### Selecting a topic

On the top navigation bar, the user can also select a photo category they wish to see on the page.

![Screenshot_5](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_topics_1.png)

As seen in the image below, if the user selected "Animals" as the topic, the page will only display the photos listed as animals.

![Screenshot_6](https://github.com/SorrenJ/photolabs/blob/main/docs/photolabs_topics_2.png)


## References

This project uses the photolabs-starter repo as it's template, provided by Lighthouse Labs.

[photolabs-starter](https://github.com/lighthouse-labs/photolabs-starter)