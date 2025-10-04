package com.collegeprj.collegebackend.repository;

import com.collegeprj.collegebackend.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long> {}
