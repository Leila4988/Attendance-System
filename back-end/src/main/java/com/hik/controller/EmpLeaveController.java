package com.hik.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hik.model.EmpLeave;
import com.hik.service.EmpLeaveService;

@RequestMapping("/handle")
@RestController
public class EmpLeaveController {
@Autowired
  private EmpLeaveService eleave;
@RequestMapping(value="/emphandle", method = RequestMethod.GET)
public String gethandlebyid (@Param("eid")String eid) {
	List<EmpLeave> li = eleave.getall(eid);
	JSONObject re=new JSONObject();
	JSONArray jsa= new JSONArray();
	for(int i=0 ; i<li.size();i++) {
		JSONObject temp=new JSONObject();
		temp.put("id", eid);
		temp.put("name", li.get(i).getEname());
		temp.put("department", li.get(i).getDepartment());
		temp.put("reason", li.get(i).getReason());
		temp.put("totalTime", li.get(i).getEname());
		temp.put("state", li.get(i).getIfsuccess());
		jsa.add(temp);
	}
	re.put("handles",jsa);
	return re.toJSONString() ;
}
@RequestMapping(value="/empdepartment", method = RequestMethod.GET)
public String bydepart(@Param("eid")String eid)
{
	char s=eid.charAt(1);
	String de=null;
	if(s=='1') {de = "财务部";}
	else if(s=='2') {de = "人事部";}
	else if(s=='3') {de = "技术部";}
	else if(s=='4') {de = "公关部";}
 	List<EmpLeave> li = eleave.bydepartment(de);
	JSONObject re=new JSONObject();
	JSONArray jsa= new JSONArray();
	for(int i=0 ; i<li.size();i++) {
		JSONObject temp=new JSONObject();
		temp.put("id", eid);
		temp.put("name", li.get(i).getEname());
		temp.put("department", li.get(i).getDepartment());
		temp.put("reason", li.get(i).getReason());
		temp.put("totalTime", li.get(i).getHandle());
		temp.put("state", li.get(i).getIfsuccess());
		jsa.add(temp);
	}
	re.put("handles",jsa);
	return re.toJSONString() ;
	}
@RequestMapping(value="handled",method = RequestMethod.GET)
public String handled(@Param("eid")String eid){
	char s0=eid.charAt(0);
	if(s0=='2') {
		char s1=eid.charAt(1);
		String de=null;
		if(s1=='1') {de = "财务部";}
		else if(s1=='2') {de = "人事部";}
		else if(s1=='3') {de = "技术部";}
		else if(s1=='4') {de = "公关部";}
	 	List<EmpLeave> li = eleave.handledepart(de);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;		
	}
	else if(s0=='3') {
		List<EmpLeave> li = eleave.gethandled(2);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;	
	}
	else {
		List<EmpLeave> li = eleave.gethandled(3);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;	
	}
	
}
@RequestMapping(value="unhandle",method = RequestMethod.GET)
public String unhandle(@Param("eid")String eid){
	char s0=eid.charAt(0);
	if(s0=='2') {
		char s1=eid.charAt(1);
		String de=null;
		if(s1=='1') {de = "财务部";}
		else if(s1=='2') {de = "人事部";}
		else if(s1=='3') {de = "技术部";}
		else if(s1=='4') {de = "公关部";}
	 	List<EmpLeave> li = eleave.undepart(de);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;		
	}
	else if(s0=='3') {
		List<EmpLeave> li = eleave.getunhandle(1);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;	
	}
	else {
		List<EmpLeave> li = eleave.getunhandle(2);
		JSONObject re=new JSONObject();
		JSONArray jsa= new JSONArray();
		for(int i=0 ; i<li.size();i++) {
			JSONObject temp=new JSONObject();
			temp.put("id", eid);
			temp.put("name", li.get(i).getEname());
			temp.put("department", li.get(i).getDepartment());
			temp.put("reason", li.get(i).getReason());
			temp.put("totalTime", li.get(i).getEname());
			temp.put("state", li.get(i).getIfsuccess());
			jsa.add(temp);
		}
		re.put("handles",jsa);
		return re.toJSONString() ;	
	}
	
}
}
