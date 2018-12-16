package com.hik.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hik.model.ClockIn;
@Mapper
public interface ClockInMapper {
    List<ClockIn> getclockin(@Param("eid") String eid);
}
