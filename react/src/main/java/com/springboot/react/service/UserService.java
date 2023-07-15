package com.springboot.react.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.react.entity.UserEntity;
import com.springboot.react.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;

	public UserEntity addUser(UserEntity userEntity) {
		return userRepo.save(userEntity);
	}

	public List<UserEntity> getAllUsers() {
		return userRepo.findAll();
	}

	public UserEntity getUser(int id) {
		return userRepo.findById(id);
	}

	public void deleteUser(int id) {
		userRepo.deleteById(id);;
	}

	public UserEntity updateUserDetails(int id, UserEntity userEntity) {
        Optional<UserEntity> existingUser = Optional.of(userRepo.findById(id));
        
            UserEntity updatedUser = existingUser.get();
            updatedUser.setName(userEntity.getName());
            updatedUser.setEmail(userEntity.getEmail());
            updatedUser.setPhone(userEntity.getPhone());
            
            return userRepo.save(updatedUser);
    }

}
