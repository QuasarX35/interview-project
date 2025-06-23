package com.example.demo;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private String date;

    @Column(name = "venue")
    private String venue;

    @Column(name = "available_tickets")
    private int availableTickets;

    @Column(name = "ticket_price")
    private int ticketPrice;
}
