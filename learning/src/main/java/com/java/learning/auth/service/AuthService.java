package com.java.learning.auth.service;

import com.java.learning.auth.dto.req.AuthSignupReq;
import com.java.learning.auth.dto.res.AuthSignupResponse;
import com.java.learning.auth.repository.UserRepo;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AuthService {


    private UserRepo repo;

    public AuthSignupResponse signup(AuthSignupReq body) throws Exception {
        if (repo.findByEmail(body.getEmail())) {
            throw new Exception("Email already exists");
        }
        if (repo.findByUsername(body.getUsername())) {
            throw new Exception("Email already exists");
        }



        return null;
    }
}
