package com.hik.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.EmpLeaveMapper;
import com.hik.model.EmpLeave;

@Service
public class EmpLeaveService {
@Autowired
private EmpLeaveMapper empleave;
public List<EmpLeave> bydepartment (String department){
	return empleave.bydepartment(department);
}
//员工个人的审批和未审批状态
public List<EmpLeave> getall (String eid){
	return empleave.getall(eid);
}
public List<EmpLeave> getunhandle(@Param("handle") int handle){
	return empleave.getunhandle(handle);
}
public List<EmpLeave> gethandled(@Param("handle") int handle){
	return empleave.gethandled(handle);
}
//部门经理id
public List<EmpLeave> undepart(@Param("department") String department){
	return empleave.undepart(department);
}
public List<EmpLeave> handledepart(@Param("department") String department){
	return empleave.handledepart(department);
}
public void updatehan(@Param("handle") int handle,@Param("eid") String eid) {
	empleave.updatehan( handle,eid);
}
public void handleend(@Param("eid")String  eid) {
	 empleave.handleend(eid);
}
}
