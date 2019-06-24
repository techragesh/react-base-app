package com.techragesh.demobackend.service;

import com.techragesh.demobackend.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    Optional<User> getUserById(Long userId);

    User saveUser(User user) throws Exception;

    List<User> getAllUsers();

    boolean deleteUserById(Long userId);
}
