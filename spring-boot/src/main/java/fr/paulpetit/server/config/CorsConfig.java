package fr.paulpetit.server.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/api/**") // Allow CORS for your API endpoints
        .allowedOrigins("*") // Allow requests from all origins
        .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
        .allowedHeaders("*"); // Allow all headers
  }
}
