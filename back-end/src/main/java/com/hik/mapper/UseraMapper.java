package com.hik.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.hik.model.Usera;

@Mapper
public interface UseraMapper {
   List<Usera> getalluser();
}
