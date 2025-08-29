// src/main/java/com/hotelway/backend/controller/AdminController.java
package com.hotelway.backend.controller;

import com.hotelway.backend.model.Hotel;
import com.hotelway.backend.model.HotelStatus; // Make sure this is imported
import com.hotelway.backend.repository.HotelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final HotelRepository hotelRepo;

    @GetMapping("/hotels/pending")
    public List<Hotel> getPendingHotels() {
        return hotelRepo.findAll().stream()
                .filter(h -> h.getStatus() == HotelStatus.PENDING) // Use == for enums
                .collect(Collectors.toList());
    }

    @PutMapping("/hotels/approve/{hotelId}")
    public Hotel approveHotel(@PathVariable Integer hotelId) {
        Hotel hotel = hotelRepo.findById(hotelId).orElseThrow();
        hotel.setStatus(HotelStatus.APPROVED); // Use the enum value
        return hotelRepo.save(hotel);
    }
}