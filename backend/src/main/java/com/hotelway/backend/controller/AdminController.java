package com.hotelway.backend.controller; // Assuming this is the correct package

import com.hotelway.backend.model.Hotel;
import com.hotelway.backend.repository.HotelRepository;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final HotelRepository hotelRepo;

    @GetMapping("/hotels/pending")
    public List<Hotel> getPendingHotels() {
        return hotelRepo.findAll().stream()
                .filter(h -> h.getStatus().equals("PENDING"))
                .toList();
    }

    @PutMapping("/hotels/approve/{hotelId}")
    public Hotel approveHotel(@PathVariable Integer hotelId) {
        Hotel hotel = hotelRepo.findById(hotelId).orElseThrow();
        hotel.setStatus("APPROVED");
        return hotelRepo.save(hotel);
    }
}