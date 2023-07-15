package com.springboot.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.react.entity.UserEntity;
import com.springboot.react.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService ;
	
	//add new user
	@PostMapping("/post")
	public UserEntity addUser(@RequestBody UserEntity userEntity) {
		return userService.addUser(userEntity);
	}
	
	//get list of all users
	@GetMapping("/getAll")
	public List<UserEntity> getUsers() {
		return userService.getAllUsers();
	}
	
	//get user by id
	@GetMapping("/getById/{id}")
	public UserEntity getUser(@PathVariable int id ) {
		return userService.getUser(id);
	}
	
	//delete user
	@DeleteMapping("/deleteById/{id}")
	public void deleteUser(@PathVariable int id ) {
	 userService.deleteUser(id);
	}
	
	//update user details
	@PutMapping("/update/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable int id, @RequestBody UserEntity userEntity) {
        UserEntity updatedUser = userService.updateUserDetails(id, userEntity);
        return ResponseEntity.ok(updatedUser);
    }
	
}
