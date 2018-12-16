package com.hik.service;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.EmpMapper;

@Service
public class EmpService {
    @Autowired
    private EmpMapper empmapper;
    /**
     * 
     * @param eid
     * @return
     */
    public int  getannualdays(String eid) {
    	return empmapper. getannualdays( eid);
    }
    /**
     * 
     * @param eid
     * @param annualdays
     */
    public void updateannual(String eid ,int annualdays) {
    	empmapper.updateannual( eid,  annualdays);
    }
}
