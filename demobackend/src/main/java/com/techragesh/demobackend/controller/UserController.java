package com.techragesh.demobackend.controller;

import com.techragesh.demobackend.model.User;
import com.techragesh.demobackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userService.getUserById(Long.parseLong(id));
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteUserById(@PathVariable String id){
        return userService.deleteUserById(Long.parseLong(id));
    }

    @PostMapping("/create")
    public User createUser(@RequestBody User user) throws Exception {
        return userService.saveUser(user);
    }
}
