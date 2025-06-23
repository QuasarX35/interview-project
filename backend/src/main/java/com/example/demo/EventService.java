package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventById(Long eventId) {
        return eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event", eventId));
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event updateEvent(Long eventId, Event updatedEvent) {
        Event existingEvent = eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event", eventId));

        existingEvent.setName(updatedEvent.getName());
        existingEvent.setDate(updatedEvent.getDate());
        existingEvent.setVenue(updatedEvent.getVenue());
        existingEvent.setAvailableTickets(updatedEvent.getAvailableTickets());
        existingEvent.setTicketPrice(updatedEvent.getTicketPrice());
        return eventRepository.save(existingEvent);
    }

    public void deleteEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Event", eventId));

        eventRepository.delete(event);
    }
}
