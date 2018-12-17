package com.hik.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hik.model.Leave;
import com.hik.service.EmpService;
import com.hik.service.LeaveService;

@RequestMapping("/leave")
@RestController
public class LeaveController {
@Autowired
 private LeaveService leaveservice;
private EmpService emp;
@RequestMapping(value="/leaveinfo", method = RequestMethod.GET)
public String getleaveinfomation(@Param("eid") String eid) {	
	 JSONObject jso=new JSONObject();	   
	   jso.put("id",eid);
	 try {List<Leave> lv=leaveservice.getleaveinfo(eid);
	   jso.put("schedule",lv.get(0).getHandle());
	 }
	 catch(Exception e) {
		 jso.put("schedule",-1);
	 }
	//JSONArray jsa=new JSONArray();
	  
	//   if(lv==null) { }

       JSONObject jso2=new JSONObject();
       jso2.put("states",jso);
       return jso2.toJSONString();
}
@RequestMapping(value = "/add", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
public void  updatel(@RequestBody JSONObject jp)  {
	JSONObject fl=jp.getJSONObject("leave");
	//JSONObject fl=temp.getJSONObject(0);
//	 Leave le=new Leave();
	// le.setEid(fl.getString("id"));
//	 DateFormat fmt =new SimpleDateFormat("yyyy-MM-dd");
//	 java.sql.Date date1=null;
//	 java.sql.Date date2=null;
//	 java.sql.Date date3=null;
//	try {
//		date1 = new java.sql.Date(fmt.parse(fl.getString("startTime")).getTime());	
//		date2 = new java.sql.Date(fmt.parse(fl.getString("finalTime")).getTime());
//		date3 = new java.sql.Date(fmt.parse(fl.getString("currentTime")).getTime());
//	}
//	catch(Exception e) {
//		// TODO Auto-generated catch block
//				e.printStackTrace();
//	}
//	 le.setLeavebegin(date1 );
//	 le.setLeaveend(date2);
//	 le.setAsktime(date3);
//	 le.setReason(fl.getString("reason"));
	// JSONObject jo= new JSONObject();
	//int totol= (int) ((date1.getTime() - date2.getTime()) / (1000*3600*24));
//	int have=emp.getannualdays(fl.getString("id"));
	//if(totol<have)
	//{
		leaveservice.askleave(fl.getString("id"),fl.getString("reason"),fl.getString("startTime"),fl.getString("finalTime"),fl.getString("currentTime"));
}
@RequestMapping(value = "/delete", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
public String deleteleave(@Param("eid") String eid)
{
	leaveservice.deleteleave(eid);
	return "成功删除";
	}

}
