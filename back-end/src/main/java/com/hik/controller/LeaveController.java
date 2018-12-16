package com.hik.controller;

import java.sql.Date;
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
import com.hik.service.LeaveService;

@RequestMapping("/leave")
@RestController
public class LeaveController {
@Autowired
 private LeaveService leaveservice;
@RequestMapping(value="/leaveinfo", method = RequestMethod.GET)
public String getleaveinfomation(@Param("eid") String eid) {	
	List<Leave> lv=leaveservice.getleaveinfo(eid);
	JSONArray jsa=new JSONArray();
  for(int    i=0;    i<lv.size();    i++) {
	   JSONObject jso=new JSONObject();
	   jso.put("id",eid);
	   jso.put("reason",lv.get(i).getReason());
	   jso.put("currentTime",lv.get(i).getAsktime().toString());
	   jso.put("startTime", lv.get(i).getLeavebegin().toString());
	   jso.put( "finalTime",lv.get(i).getLeaveend().toString());
	   jsa.add(jso);
  }
  JSONObject jso2=new JSONObject();
  jso2.put("leave",jsa);
  return jso2.toJSONString();
}
@RequestMapping(value = "/add", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
 public void updatel(@RequestBody JSONObject jp) {
	 
	leaveservice.askleave(jp.getString("id") ,jp. getString("reason"), jp.getString("startTime"),jp.getString("finalTime"),jp.getString("currentTime"));
}
@RequestMapping(value = "/delete", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
public String deleteleave(@Param("eid") String eid)
{
	leaveservice.deleteleave(eid);
	return "成功删除";
	}

}
