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
