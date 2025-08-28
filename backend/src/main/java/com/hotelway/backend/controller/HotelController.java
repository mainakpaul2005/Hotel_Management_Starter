package com.hotelway.backend.controller;

import com.hotelway.backend.model.Hotel;
import com.hotelway.backend.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@RequiredArgsConstructor
public class HotelController {
    private final HotelService hotelService;

    @GetMapping
    public List<Hotel> getHotels() { return hotelService.getAllHotels(); }

    @GetMapping("/{hotelId}")
    public Hotel getHotel(@PathVariable Integer hotelId) { return hotelService.getHotel(hotelId); }

    @PostMapping
    public Hotel createHotel(@RequestBody Hotel hotel) { return hotelService.createHotel(hotel); }

    @PutMapping("/{hotelId}")
    public Hotel updateHotel(@PathVariable Integer hotelId, @RequestBody Hotel hotel) {
        return hotelService.updateHotel(hotelId, hotel);
    }
}