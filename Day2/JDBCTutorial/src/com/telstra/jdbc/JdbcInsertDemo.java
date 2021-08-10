package com.telstra.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcInsertDemo {
	public static void main(String[] args) {
//		try {
//			Class.forName("com.mysql.jdbc.Driver");
//		} catch (ClassNotFoundException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		String url = "jdbc:mysql://localhost:3306/telstra";
		String username = "root";
		String password = "password";
		String insertCommand = "INSERT INTO employee VALUES(8094, 'Poornima', 'Tester')";
		int i = 0; 
		
		Connection cn = null;
		Statement st = null;
		try {
			cn = DriverManager.getConnection(url, username, password);
			st = cn.createStatement();
			i = st.executeUpdate(insertCommand);
			System.out.println(i + " Records added...");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
