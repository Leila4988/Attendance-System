package com.hik;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;

@SpringBootApplication
@MapperScan("com.hik.mapper")
public class AttendSystemApplication implements WebMvcConfigurer {

	 @Override
	    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	        //1、定义一个convert转换消息的对象
	        FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();
	        //2、添加fastjson的配置信息
	        FastJsonConfig fastJsonConfig = new FastJsonConfig();
	        fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat);
	        //3、在convert中添加配置信息
	        fastConverter.setFastJsonConfig(fastJsonConfig);
	        //4、将convert添加到converters中
	        converters.add(fastConverter);
	    }

	public static void main(String[] args) {
		SpringApplication.run(AttendSystemApplication.class, args);
	}

}

