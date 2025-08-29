package com.hotelway.backend.service;

import com.hotelway.backend.model.Role;
import com.hotelway.backend.model.User;
import com.hotelway.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public User signUp(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // By default, new sign-ups are customers
        user.setRole(Role.CUSTOMER);
        return userRepository.save(user);
    }

    public String signIn(String phoneNumber, String password) {
        User user = userRepository.findByPhoneNumber(phoneNumber)
                .orElseThrow(() -> new RuntimeException("Invalid phone number or password"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid phone number or password");
        }

        return jwtService.generateToken(user.getUsername());
    }
}