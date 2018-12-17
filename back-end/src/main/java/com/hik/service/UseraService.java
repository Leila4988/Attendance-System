package com.hik.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.UseraMapper;
import com.hik.model.Usera;

@Service
public class UseraService {
@Autowired
private UseraMapper usermapper;
public List<Usera> getalluser(){
	return  usermapper.getalluser();
}
}
