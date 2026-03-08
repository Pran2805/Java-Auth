package com.java.learning.auth.dto.req;

import lombok.Data;

@Data
public class AuthSignupReq {
    private String username;
    private String email;
    private String password;
}
