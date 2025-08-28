package com.hotelway.backend.controller;

import com.hotelway.backend.model.Room;
import com.hotelway.backend.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    // Get all rooms of a hotel
    @GetMapping("/hotel/{hotelId}")
    public List<Room> getRoomsByHotel(@PathVariable Integer hotelId) {
        return roomService.getRoomsByHotel(hotelId);
    }

    // Add a room to a specific hotel
    @PostMapping("/hotel/{hotelId}")
    public Room addRoomToHotel(@PathVariable Integer hotelId, @RequestBody Room room) {
        return roomService.addRoomToHotel(hotelId, room);
    }

    // Update room details
    @PutMapping("/{roomId}")
    public Room updateRoom(@PathVariable Integer roomId, @RequestBody Room roomDetails) {
        return roomService.updateRoom(roomId, roomDetails);
    }

    // Delete a room
    @DeleteMapping("/{roomId}")
    public void deleteRoom(@PathVariable Integer roomId) {
        roomService.deleteRoom(roomId);
    }
}
