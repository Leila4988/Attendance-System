package com.hik.model;

import java.sql.Date;
import java.sql.Timestamp;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmpLeave {
	private String eid;
	private Boolean ifsuccess;
	private  int handle;
	private String ename;
	private String department;
	private String reason;
}
