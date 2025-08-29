package com.hotelway.backend.service;

import com.hotelway.backend.model.Booking;
import com.hotelway.backend.repository.BookingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking createBooking(Booking booking) {
        // In a real app, you'd add validation here to prevent double bookings
        return bookingRepository.save(booking);
    }
}