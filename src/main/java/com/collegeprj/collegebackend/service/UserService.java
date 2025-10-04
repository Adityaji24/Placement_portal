package com.collegeprj.collegebackend.service;

import com.collegeprj.collegebackend.entity.User;
import com.collegeprj.collegebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User register(User user) {
        // TODO: hash password
        return userRepository.save(user);
    }

    public User login(String email, String password) {
        User existing = userRepository.findByEmail(email);
        if(existing != null && existing.getPassword().equals(password)) {
            return existing;
        }
        return null;
    }
}
