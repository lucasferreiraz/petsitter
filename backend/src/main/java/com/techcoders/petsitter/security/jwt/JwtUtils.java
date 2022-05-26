package com.techcoders.petsitter.security.jwt;

import java.util.Date;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import com.techcoders.petsitter.security.services.UserDetailsImpl;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtUtils {
	
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);
	
	@Value("${petsitter.app.jwtSecret}")
	private String jwtSecret;
	
	@Value("${petsitter.app.jwtExpirationMs}")
	private int jwtExpirationMs;
	
	@Value("${petsitter.app.jwtCookieName}")
	private String jwtCookie;
	
	public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal) {
		
		String jwt = generateTokenFromUsername(userPrincipal.getUsername());
		
		ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt)
											  .path("/api")
											  .maxAge(24*60*60)
											  .httpOnly(true)
											  .build();
		return cookie;
	}
	
	public String getJwtFromCookies(HttpServletRequest request) {
		Cookie cookie = WebUtils.getCookie(request, jwtCookie);
		
		if(cookie != null) {
			return cookie.getValue();
		} else {
			return null;
		}
	}
	
	public ResponseCookie getCleanJwtCookie() {
		ResponseCookie cookie = ResponseCookie.from(jwtCookie, null)
											  .path("/api")
											  .build();
		
		return cookie;
	}
	
	public String generateTokenFromUsername(String username) {
		
		return Jwts.builder()
				   .setSubject(username)
				   .setIssuedAt(new Date())
				   .setExpiration(new Date( new Date().getTime() + jwtExpirationMs))
				   .signWith(SignatureAlgorithm.HS512, jwtSecret)
				   .compact();
	}
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser()
				   .setSigningKey(jwtSecret)
				   .parseClaimsJws(token)
				   .getBody()
				   .getSubject();
	}
	
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser()
				.setSigningKey(jwtSecret)
				.parseClaimsJws(authToken);
			return true;
			
		} catch (SignatureException e) {
			logger.error("Assinatura do JWT inválida: {}", e.getMessage());
		} catch(MalformedJwtException e) {
			logger.error("Token JWT inválido: {}", e.getMessage());
		} catch(ExpiredJwtException e) {
			logger.error("Token JWT expirou: {}", e.getMessage());
		} catch(UnsupportedJwtException e) {
			logger.error("Token JWT não suportado: {}", e.getMessage());
		} catch(IllegalArgumentException e) {
			logger.error("Declaração do JWT está vazia: {}", e.getMessage());
		}
		
		return false;
	}
	
	
}
