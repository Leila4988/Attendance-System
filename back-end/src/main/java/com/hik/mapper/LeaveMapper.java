package com.hik.mapper;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hik.model.EmpLeave;
import com.hik.model.Leave;

@Mapper
public interface LeaveMapper {
    List<Leave> getleaveinfo(@Param("eid") String eid);
     void askleave(@Param("eid") String eid,@Param("reason") String reason,@Param("leavebegin") String leavebegin,@Param("leaveend") String leaveend,@Param("asktime") String asktime);
     void deleteleave(@Param("eid")String eid);
     void updateleave(@Param("eid")String eid,@Param("handle") int handle);
}