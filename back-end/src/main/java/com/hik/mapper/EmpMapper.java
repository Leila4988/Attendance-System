package com.hik.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper
public interface EmpMapper {
	/**
	 * 
	 * @param eid
	 * @return
	 */
 int getannualdays(@Param("eid") String eid);
 /**
  * 
  * @param eid
  * @param annualdays
  */
 void updateannual(@Param("eid")String eid, @Param("annualdays")int annualdays);
}
