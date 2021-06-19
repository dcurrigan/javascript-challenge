# javascript-challenge
Week 14 Javascript Homework

> Created by Dale Currigan  
> June 2021  
  
![Javascript](/static/images/ufo.jpg)    

## Table of contents  
* [Project Intro](#Project-Intro)  
* [Project Structure](#Project-Structure)  
* [Setup](#Setup)  
* [Websites Scraped](#Websites-Scraped)  
* [Contributors](#Contributors)  
* [Status](#Status)  

# Project Intro
*WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.*  
  
*There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.*  
  
*That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.*  
  
*You can handle this... right? The planet Earth needs to know what we have found!*  
  
  
# Project Structure  
```
web-scraping-challenge   
|  
|    
|__ mission_to_mars.ipynb               # Jupyter Notebook for the project
|__ app.py                              # The Flask app for the project 
|__ scrape_mars.py                      # Scrape functionality for the Flask app
|__ README.md                           # This file
|
|__ templates/                          # Directory for html docs
|   |__ index.html                      # App homepage
|
|__ static/                              
|   |__css/                             # Directory for css stylesheets
|      |__ booststrap.css               # Boostswatch 'United' boostrap template 
|      |__ styles.css                   # Custom styles for the app           
|
|__ Screenshots/                        # Directory containing screenshots of the app
|   |__ screenshot_1.png
|   |__ screenshot_2.png
|   |__ screenshot_3.png
|
|__ Resources/                          # Directory for images contained in the Readme   
|   |__ meission_to_mars.png                  
|

``` 
  
# Setup 
  
##### Part 1 - Webscrape  
* Open mission_to_mars.ipynb as a Jupyter Notebook  
* Once opened, Select *Restart & Run All* from Kernel menu to view the results  
  
  
##### Part 2 - MongoDB and Flask Application  
* First initialise a Mongo databse by typing 'mongod' at the terminal (requires installation of MongoDB)
* Run app.py with the commond 'python app.py' from the terminal  
* The page will initially be empty except for the title and 'Get New Data' button as the Mongo database is not yet populated with data  
* Click the 'Get New Data' button to perform a scrape of the four sites  
* The App will load the data to the page once the scrape is complete
* The scrape cna be repeated as desired    

# Websites Scraped  
  
|No|Name|Link|
|-|-|-|
|1| NASA Mars News         |https://redplanetscience.com/| 
|2| JPL Mars Space Images  |https://spaceimages-mars.com/|
|3| Mars Facts             |https://galaxyfacts-mars.com/|  
|4| Mars Hemispheres       |https://marshemispheres.com/|  

   
# Contributors  
Dale Currigan  
[@dcurrigan](https://github.com/dcurrigan)  
<dcurrigan@gmail.com>


## Status
Project is: 
````diff 
+ Completed
````

