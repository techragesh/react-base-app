package com.techragesh.demobackend.service.impl;

import com.techragesh.demobackend.model.User;
import com.techragesh.demobackend.repository.SequenceDao;
import com.techragesh.demobackend.repository.UserRepository;
import com.techragesh.demobackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MongoOperations mongoOperations;

    @Autowired
    private SequenceDao sequenceDao;


    @Override
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    public User saveUser(User user) throws Exception {
        if(user.getUserId() == null) {
            user.setUserId(Long.valueOf(sequenceDao.getNextSequenceId("UserHyper")));
        }
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean deleteUserById(Long userId) {
        userRepository.deleteById(userId);
        return true;
    }
}

