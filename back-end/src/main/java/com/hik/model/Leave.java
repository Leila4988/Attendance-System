package com.hik.model;

import java.sql.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Leave {
	private String eid;
	private Date asktime; 
	private Date leavebegin; 
	private Date leaveend; 
	private String type ;
	private Boolean ifsuccess;
	private String reason;
	private  int handle;
}
