package com.springboot.react.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.react.entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Integer>{
	UserEntity findById(int id);
}
