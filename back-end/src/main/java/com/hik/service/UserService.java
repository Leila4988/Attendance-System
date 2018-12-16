package com.hik.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.UserMapper;
import com.hik.model.User;

@Service
public class UserService {
@Autowired
private UserMapper usermapper;
public List<User> getalluser(){
	return  usermapper.getalluser();
}
}
