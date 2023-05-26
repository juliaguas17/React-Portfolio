import { v4 as uuidv4 } from 'uuid';
import DailyScheduler from '../images/daily-schedule-img.jpg';
import WeatherDashboard from '../images/weather-dash-img.jpg';
import Bookstore from '../images/bookstore_img.jpg';
import TechBlog from '../images/tech-blog-img.jpg';

const projects = [
  {
    id: uuidv4(),
    // https://github.com/juliaguas17/Daily-Scheduler
    name: 'Daily Scheduler',
    desc:
      'A simple calendar application that allows a user to save events for each hour of the day. This application runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
    img: DailyScheduler,
  },
  {
    id: uuidv4(),
    // https://github.com/juliaguas17/Weather-Dashboard
    name: 'Weather Dashboard',
    desc:
      'This application uses the OpenWeather API to store persistent weather data. It allows the user to search for a city and retrieve current and 5-day weather forecasts. It displays weather condition, temperature, wind speeds, and humidity.',
    img: WeatherDashboard,
  },
  {
    id: uuidv4(),
    // https://github.com/jengle-dev/JJR-Bookstore
    name: 'Bookstore',
    desc:
      'This an e-commerce website for a hypothetical local book shop, showcasing featured book recommendations.',
    img: Bookstore,
  },
  {
    id: uuidv4(),
    // https://github.com/juliaguas17/Tech-Blog
    name: "Tech Blog",
    desc:
      'This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer posts. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
    img: TechBlog,
  },
];

export default projects;
