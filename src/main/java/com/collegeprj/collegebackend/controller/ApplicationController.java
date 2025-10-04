package com.collegeprj.collegebackend.controller;

import com.collegeprj.collegebackend.entity.Application;
import com.collegeprj.collegebackend.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    // Submit application
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Application submitApplication(
            @RequestParam String name,
            @RequestParam String address,
            @RequestParam String phone,
            @RequestParam String email,
            @RequestParam String cgpa,
            @RequestParam String skills,
            @RequestParam String jobType,
            @RequestParam Long jobId,
            @RequestParam MultipartFile resume
    ) {
        return applicationService.saveApplication(name, address, phone, email, cgpa, skills, jobType, jobId, resume);
    }

    // Get all applications
    @GetMapping
    public List<Application> getAllApplications() {
        return applicationService.getAllApplications();
    }
}
