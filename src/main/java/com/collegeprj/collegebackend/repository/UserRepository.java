package com.collegeprj.collegebackend.repository;

import com.collegeprj.collegebackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
