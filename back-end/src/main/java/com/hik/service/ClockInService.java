package com.hik.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hik.mapper.ClockInMapper;
import com.hik.model.ClockIn;

@Service
public class ClockInService {
@Autowired
private ClockInMapper clockinmapper;
public List<ClockIn> getclockin(String eid) {
	return clockinmapper.getclockin(eid);
}
}
