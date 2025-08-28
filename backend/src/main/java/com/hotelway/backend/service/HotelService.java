package com.hotelway.backend.service;

import com.hotelway.backend.model.Hotel;
import com.hotelway.backend.repository.HotelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelService {

    private final HotelRepository hotelRepo;

    public List<Hotel> getAllHotels() {
        return hotelRepo.findAll();
    }

    public Hotel getHotel(Integer id) {
        return hotelRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
    }

    public Hotel createHotel(Hotel hotel) {
        return hotelRepo.save(hotel);
    }

    public Hotel updateHotel(Integer id, Hotel hotelDetails) {
        Hotel hotel = getHotel(id);
        hotel.setName(hotelDetails.getName());
        hotel.setLocation(hotelDetails.getLocation());
        return hotelRepo.save(hotel);
    }

    public void deleteHotel(Integer id) {
        Hotel hotel = getHotel(id);
        hotelRepo.delete(hotel);
    }
}
