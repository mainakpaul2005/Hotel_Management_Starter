package com.hotelway.backend.controller;

import com.hotelway.backend.model.User;
import com.hotelway.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return authService.signUp(user);
    }

    @PostMapping("/login")
    public String signIn(@RequestParam String phoneNumber, @RequestParam String password) {
        return authService.signIn(phoneNumber, password);
    }
}