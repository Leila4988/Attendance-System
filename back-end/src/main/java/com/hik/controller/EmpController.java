package com.hik.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.hik.service.EmpService;

@RequestMapping("/employee")
@RestController
public class EmpController {
	  @Autowired
	    private  EmpService empservice;
	  /**
	   * 
	   * @param eid
	   * @return
	   * @throws Exception
	   */
	 @RequestMapping(value="/annual",method = RequestMethod.GET)
    public String selectByPrimaryKey(@Param("eid") String eid) throws Exception{
        JSONObject js=new JSONObject();
        js.put("anuual",empservice.getannualdays(eid) );
       //  jay.add(js);
		return js.toJSONString();
	 }
	 
	  /**
	   * 
	   * @param eid
	   * @param newdays
	   * @return
	   * @throws Exception
	   */
	  @RequestMapping("/updateannual")
	  @ResponseBody
	  public int  updateannual(@RequestParam(value="eid", required = true) String eid , @RequestParam(value="newdays", required = true) int newdays) throws Exception{
	     empservice.updateannual(eid,newdays);
		return  empservice.getannualdays(eid);		 
	  }
	  
}
