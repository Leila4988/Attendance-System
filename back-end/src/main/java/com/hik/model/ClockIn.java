package com.hik.model;

import java.sql.Date;
import java.sql.Timestamp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClockIn {

  /*
   *
    eid char(20),
    askTime datetime,
    reason char(50),
    type char(20),
    leaveBegin datetime,
    leaveEnd datetime,
    ifSuccess bool,
    handle int,
    
    clockOutTime datetime,
    clockInTime datetime,
    eid char(20),
   */
	private Date clockintime;
	private Date clockouttime;
	private String eid;
	
}
