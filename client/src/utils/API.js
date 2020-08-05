import axios from "axios";

export default {
  // Gets all events
  getEvents: function() {
    return axios.get("/api/event");
  },
  // Deletes the book with the given id
  // deleteEvent: function(id) {
  //   return axios.delete("/api/event/" + id);
  // },
  // Saves a book to the database
  // saveEvent: function(eventData) {
  //   return axios.post("/api/event", eventData);
  // }
};