package com.hotelway.backend.service;

import com.hotelway.backend.model.Hotel;
import com.hotelway.backend.model.Room;
import com.hotelway.backend.repository.HotelRepository;
import com.hotelway.backend.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepo;
    private final HotelRepository hotelRepo;

    public List<Room> getRoomsByHotel(Integer hotelId) {
        Hotel hotel = hotelRepo.findById(hotelId)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
        return hotel.getRooms();
    }

    public Room addRoomToHotel(Integer hotelId, Room room) {
        Hotel hotel = hotelRepo.findById(hotelId)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
        room.setHotel(hotel);
        return roomRepo.save(room);
    }

    public Room updateRoom(Integer roomId, Room roomDetails) {
        Room room = roomRepo.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        room.setRoomType(roomDetails.getRoomType());
        room.setPrice(roomDetails.getPrice());
        return roomRepo.save(room);
    }

    public void deleteRoom(Integer roomId) {
        Room room = roomRepo.findById(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));
        roomRepo.delete(room);
    }
}
