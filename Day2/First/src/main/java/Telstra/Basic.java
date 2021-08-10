package Telstra;
import java.io.*;
import jakarta.servlet.*; 

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;  

public class Basic extends HttpServlet {
	private String message;
	
	public void init() throws ServletException {
		message = "Welcome to servelet response";
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		
		// Set Response content Type
		response.setContentType("text/html");
		
		// Actual logic here
		
		PrintWriter out = response.getWriter();
		
		out.println("<h1>" + message + "</h1>");
		
	}
	
	public void destory() {
		// do nothing
	}
	
}
