package com.springcore.postprocessor;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class MyBeanPostProcessor implements BeanPostProcessor {
	
	public Object postProcessBeforeInitialization(Object bean, String beanName) 
	throws BeansException{
		System.out.println("Post Process Before Initializing the bean = " + beanName);
		return bean;
	}
	
	public Object postProcessAfterInitialization(Object bean, String beanName) 
	throws BeansException{
		System.out.println("Post Process After Initializing the bean = " + beanName);
		
		return bean;
	}
}
