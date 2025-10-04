package com.collegeprj.collegebackend.entity;

import jakarta.persistence.*;
import java.util.Arrays;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String phone;
    private String email;
    private String cgpa;
    private String skills;
    private String jobType;

    @Lob
    private byte[] resume;

    private String resumeFileName;

    @ManyToOne
    @JoinColumn(name = "job_id", nullable = false)
    private Job job;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCgpa() { return cgpa; }
    public void setCgpa(String cgpa) { this.cgpa = cgpa; }

    public String getSkills() { return skills; }
    public void setSkills(String skills) { this.skills = skills; }

    public String getJobType() { return jobType; }
    public void setJobType(String jobType) { this.jobType = jobType; }

    public byte[] getResume() { return resume; }
    public void setResume(byte[] resume) { this.resume = resume; }

    public String getResumeFileName() { return resumeFileName; }
    public void setResumeFileName(String resumeFileName) { this.resumeFileName = resumeFileName; }

    public Job getJob() { return job; }
    public void setJob(Job job) { this.job = job; }

    @Override
    public String toString() {
        return "Application{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", cgpa='" + cgpa + '\'' +
                ", skills='" + skills + '\'' +
                ", jobType='" + jobType + '\'' +
                ", resume=" + (resume != null ? resume.length + " bytes" : null) +
                ", resumeFileName='" + resumeFileName + '\'' +
                ", job=" + (job != null ? job.getTitle() : null) +
                '}';
    }
}
