import {
  UserController,
  FlightSearchController,
  FlightController,
  LocationSearchController,
  PlaceController
} from 'controllers';

export default (app) => {
  app.post('/api/login', UserController.request.createUser);
  app.post('/api/flightsearch', FlightSearchController.request.search);
  app.post('/api/flight/', FlightController.request.getAll);
  app.post('/api/flight/get', FlightController.request.get);
  app.post('/api/flight/query', FlightController.request.query);
  app.post('/api/flight/queryAndCreate', FlightController.request.queryAndCreate);
  app.post('/api/flight/addUser', FlightController.request.addUser);
  app.post('/api/locationsearch', LocationSearchController.request.search);
  app.post('/api/place/', PlaceController.request.getAll);
  app.post('/api/place/get', PlaceController.request.get);
  app.post('/api/place/query', PlaceController.request.query);
  app.post('/api/place/queryAndCreate', PlaceController.request.queryAndCreate);
  app.post('/api/user/likePlace', UserController.request.addLikedPlace);
  app.post('/api/user/passPlace', UserController.request.addPassedPlace);
  app.post('/api/user/flights', UserController.request.getFlights);
};
