package com.collegeprj.collegebackend.service;

import com.collegeprj.collegebackend.entity.Application;
import com.collegeprj.collegebackend.entity.Job;
import com.collegeprj.collegebackend.repository.ApplicationRepository;
import com.collegeprj.collegebackend.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private JobRepository jobRepository;

    // Save application
    public Application saveApplication(String name, String address, String phone, String email,
                                       String cgpa, String skills, String jobType, Long jobId, MultipartFile resume) {

        Application application = new Application();
        application.setName(name);
        application.setAddress(address);
        application.setPhone(phone);
        application.setEmail(email);
        application.setCgpa(cgpa);
        application.setSkills(skills);
        application.setJobType(jobType);

        // Link Job
        Job job = jobRepository.findById(jobId)
                .orElseThrow(() -> new RuntimeException("Job not found with id: " + jobId));
        application.setJob(job);

        // Store resume as bytes
        try {
            application.setResume(resume.getBytes());
            application.setResumeFileName(resume.getOriginalFilename());
        } catch (IOException e) {
            throw new RuntimeException("Failed to store resume file", e);
        }

        return applicationRepository.save(application);
    }

    // Get all applications
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }
}
