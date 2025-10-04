package com.collegeprj.collegebackend.controller;

import com.collegeprj.collegebackend.entity.Job;
import com.collegeprj.collegebackend.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public List<Job> getAllJobs() { return jobService.getAllJobs(); }

    @PostMapping
    public Job createJob(@RequestBody Job job) { return jobService.createJob(job); }
}
