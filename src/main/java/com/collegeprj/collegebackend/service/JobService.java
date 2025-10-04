package com.collegeprj.collegebackend.service;

import com.collegeprj.collegebackend.entity.Job;
import com.collegeprj.collegebackend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public List<Job> getAllJobs() { return jobRepository.findAll(); }
    public Job createJob(Job job) { return jobRepository.save(job); }
}
