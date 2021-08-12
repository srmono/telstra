package com.aopconcept.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class MyAspect {
	
	@Before("execution(* com.aopconcept.services.PaymentServiceImpl.makePayment(..))")
	public void printBefore() {
		System.out.println("Payment Started......");
	}
	
	@After("execution(* com.aopconcept.services.PaymentServiceImpl.makePayment(..))")
	public void printAfter() {
		System.out.println("Payment done......");
	}
}
