package com.hik.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.LeaveMapper;
import com.hik.model.EmpLeave;
import com.hik.model.Leave;

@Service
public class LeaveService {
@Autowired
 private LeaveMapper leavemapper;
public   List<Leave> getleaveinfo(String eid) {
	   return leavemapper.getleaveinfo(eid);
}
 //  EmpLeave getall();
  public void askleave( String eid, String reason,String leavebegin,String leaveend, String asktime) {
	  leavemapper.askleave(eid,  reason, leavebegin, leaveend, asktime);
  }  
  public void deleteleave(@Param("eid")String eid) {
	  leavemapper.deleteleave(eid);
  }
  public void updateleave(@Param("eid")String eid,@Param("handle") int handle) {
	  
  }
}
