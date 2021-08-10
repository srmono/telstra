package com.telstra.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcDeleteDemo {
	public static void main(String[] args) {
		String url = "jdbc:mysql://localhost:3306/telstra";
		String username = "root";
		String password = "password";
		String deleteCommand = "DELETE FROM employee WHERE empid=8094";
		int i = 0; 
		
		Connection cn = null;
		Statement st = null;
		try {
			cn = DriverManager.getConnection(url, username, password);
			st = cn.createStatement();
			i = st.executeUpdate(deleteCommand);
			System.out.println(i + " Deleted emp details...");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
