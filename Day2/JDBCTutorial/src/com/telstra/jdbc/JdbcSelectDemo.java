package com.telstra.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcSelectDemo {
	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/telstra";
		String username = "root";
		String password = "password";
		String selectCommand = "SELECT * FROM employee";
		int i = 0; 
		
		Connection cn = null;
		Statement st = null;
		ResultSet rs = null;
		try {
			cn = DriverManager.getConnection(url, username, password);
			st = cn.createStatement();
			rs = st.executeQuery(selectCommand);
			
			while(rs.next()) {
				int empid = rs.getInt("empid");
				String empname = rs.getString("empname");
				String designation = rs.getString("designation");
				System.out.println(empid + " : " + empname + " : " + designation);
			} 
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
