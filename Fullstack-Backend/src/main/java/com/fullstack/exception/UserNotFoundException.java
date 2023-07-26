package com.fullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id) {
        super("user could not found with id "+id);
    }
}
