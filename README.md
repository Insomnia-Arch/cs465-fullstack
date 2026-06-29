# cs465-fullstack
full stack development


`Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).`

The full stack used three related but different frontent develpmental approaches, Express HTML, JavaScript and Angular. The Express portion of the project used HTML templates stored in Handlebars files to generate pages on the server. When a user would navigate to a webpage, Express gathered the needed data, inserted it into these templates, and then returned the complete HTML docuemnt to the browser. It is a simple, lightweight method for webpages such as this that just simply display the information. These templates were essentially the bones of the webpage. 

In order to read those clicks through the webpage, JavaScript was used to define the functionality between the pages. If Express HTML was the bones of the webpage, this would be the blood and nervous system. JavaScript controlls how the page reacts to the user actions and passes that logic back to Express HTML so that it knows what needs to be done. The bones only know what do do if a nervous system commands muscles to move those bones. 

Then lastly Angular provided the richest front-end expreience by loading once, and then switching between components without the need for completely reloading the web page. Angular routing handled navigation, components organized the interface into reusable sections, services communicated with the Express API, and reactive forms enabled the data entry and validation. Where Express puts the burden of loading the webpages onto the server, Angular builds and updates the interface in the browser. 

`Why did the backend use a NoSQL MongoDB database?`

MongoDB is a flexible but powerful method for storing and interacting with data like this. If you were operating a database with hundreds of thousands of items, with dozens of columns in each table and several seperate relational database tables, you would want to use a SQL option, but for rendering a webpage, MongoDB is the applications's data fit naturally into a document-based database. In MongoDB the items are stored as objects similar to JSON, which match closely with the language of JavaScript, and that is one of the reasons that it is a classic fit for the MEAN stack. The data is flexible, fields can be added or adjusted without having to completely rebuild database tables, and Mongoose adds structure on top of MongoDB by defining schemas validation rules, and model methods making it easy to work with. 

`How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.`

JavaScript is a programming language that is mainly used to create logic in applications. It allows the developers to create variables, function, classes, conditions, loops, event handling, and anything else that an application might need. In comparison JSON is just JavaScript Object Notation, a tex-based data format that is used to store or transfer data, but not used to execute instructions. JavaScript is a whole language with complete creative capability, and JSON is just another way of storing data about something. 

During the full stack process we refactored the code serveral times, such as refactoring for efficiency like moving repeated API communication into the TripData service through Angular. Instead of putting the GET, POST, and PUT logic directly in each of the components, those components instead call on public reusable service methods. This not only made the code smaller, more efficient, and more consistent, but it also made it easier to maintain and scale the code, instead of having to copy and paste sections of the code we could just simply import those methods and call on them when needed. 

`Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.`

In the full stack application, HTTP methods are used in any interaction between the client and the server. GET retrieves data, POST creates new data, PUT or PATCH, updates data, and DELETE removes the data. In this application Angular or Postman were acting as the client, while the Express API receives the request, and uses Mongoose to handle the interaction between MongoDB. The endpoint is the specific API URL that the request was sent with, and the entire request is both the method and the endpoint. GET /api/trips would return the list of all of the trips, but DELETE /api/trips/GALR210214 would remove just that one trip from the database. 

This main method for improving security for this application was by utilizing JSON Web Token or JWT token. A user is given a JWT upon registering an account and then that JWT is used to validate every request before sending it to the Angular API. 

'How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?'

I think this course has done a good job at giving me a better understanding about how many of these tools work together to provide a seamless web experience. We go to a website and just think of that website as a standalone thing, where all of the data and function just 'lives on the website' but that myopic view takes each of the components for granted. By having us create the sequence diagram, I had to research how exactly the information came from point A to point B. The explanation of how everything was organized made everything clicked. The routers handled the interaction between the browser and the user, the controller interacted with the HTTP client, the Express router then took that interaction and passed it to the Mongoose Controller, and then the Mongoose controller sent that request to MongoDB for it to travel back through the chain all over again. It is a complicated process but has answered some questions that I've had before, like 'how does the HTML know how to talk to the database?' or 'how does the JavaScript decide what CSS to display?'

While the tools have changed, and not every full-stack project will utilize the MEAN stack, it is a template that I'm sure I will run into the same or similar sytems throughout my career. 
