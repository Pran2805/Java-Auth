package com.java.learning.auth.repository;

import com.java.learning.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String> {

    boolean findByEmail(String email);

    boolean findByUsername(String username);
}
