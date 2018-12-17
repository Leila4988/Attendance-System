package com.hik.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.hik.model.EmpLeave;
@	Mapper
public interface EmpLeaveMapper {
	//员工id 按照部门的审批状态
   List<EmpLeave> bydepartment (@Param("department") String department);
    //员工个人的审批和未审批状态
   List<EmpLeave> getall (@Param("eid") String eid);  
//    EmpLeave gethandle(@Param("handle") int handle);
  //管理者的id
    //副/总经理id
   List<EmpLeave> getunhandle(@Param("handle") int handle);
   List<EmpLeave> gethandled(@Param("handle") int handle);
    //部门经理id
   List<EmpLeave> undepart(@Param("department") String department);
   List<EmpLeave> handledepart(@Param("department") String department);
   void updatehan(@Param("handle") int handle,@Param("eid") String eid);
   void handleend(@Param("eid")String  eid);
}
