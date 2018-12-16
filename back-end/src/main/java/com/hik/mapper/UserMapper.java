package com.hik.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hik.model.User;

@Mapper
public interface UserMapper {
   List<User> getalluser();
}
