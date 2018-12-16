package com.hik.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hik.model.ClockIn;
import com.hik.model.Leave;
import com.hik.service.ClockInService;

@RequestMapping("/clock")
@RestController
public class ClockInController {
	@Autowired
	private ClockInService clockinservice;
	@RequestMapping(value="/clckinform",method = RequestMethod.GET)
	  public  String getclockinfomation(@Param("eid") String eid) {		
		List <ClockIn> cl=clockinservice.getclockin(eid);
		JSONArray ar=new JSONArray();
		
		for(int i=0; i<cl.size();i++) {
			JSONObject jo = new JSONObject();
			jo.put("id", cl.get(i).getEid());
			jo.put("clockin",cl.get(i).getClockintime().toString());
			jo.put("clockout",cl.get(i).getClockouttime().toString());
			ar.add(jo);
		}
		JSONObject re=new JSONObject();
		re.put("clockin", ar);
		return re.toJSONString();
		
}
}
